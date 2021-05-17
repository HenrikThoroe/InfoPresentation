#include "json.hpp"
#include "tqdm.hpp"

#include <chrono>
#include <thread>
#include <iostream>
#include <fstream> 
#include <stdio.h>

#include "driver.hpp"
#include "sum_range.hpp"
#include "fill_random.hpp"
#include "quick_sort.hpp"
#include "radix_sort.hpp"

namespace model {

    driver::driver(uint64_t cores, uint64_t memory, uint64_t sections) : cores(cores), memory(memory), sections(sections) {}

    void driver::run(driver::sort_function sortFunction, sort_function_32 sortFunction32) {
        if (sortFunction32 == nullptr && sortFunction == nullptr) {
            exit(1);
        }

        tqdm bar;

        results.clear();
        results.resize(sections);

        std::vector<std::thread> pool{};

        for (size_t i = 0; i < sections; ++i) {
            pool.push_back(std::thread([i, sortFunction, sortFunction32, this] {
                constexpr uint64_t gig = 1'000'000;
                const uint64_t items = (memory * gig * (i + 1)) / (8 * sections);
                
                std::vector<uint64_t> batch{};
                std::vector<uint32_t> batch32{};

                util::fill_random(batch, static_cast<int>(items));

                if (sortFunction == nullptr) {
                    util::fill_random_32(batch32, static_cast<int>(items));
                } else {
                    util::fill_random(batch, static_cast<int>(items));
                }

                std::chrono::steady_clock::time_point begin = std::chrono::steady_clock::now();

                if (sortFunction == nullptr) {
                    sortFunction32(batch32);
                } else {
                    sortFunction(batch);
                }

                std::chrono::steady_clock::time_point end = std::chrono::steady_clock::now();

                const int64_t duration = std::chrono::duration_cast<std::chrono::microseconds>(end - begin).count();

                results[i] = { static_cast<uint64_t>(batch.size()), static_cast<uint64_t>(duration) };
            }));

            // When 'cores' threads are created or end of loop is reached, wait for completion.
            if ((i > 0 && i % cores == 0) || (i == sections - 1)) {
                for (std::thread& thread : pool) {
                    thread.join();
                }

                pool.clear();

                bar.progress(i, sections);
            }
        }

        bar.finish();
        std::cout << std::endl;
    }

    void driver::save(const std::string& algorithm, const std::string& path) const {
        using json = nlohmann::json;

        json cnt;

        cnt["algorithm"] = algorithm;
        cnt["timeUnit"] = "us";
        cnt["results"] = {};

        for (const std::array<uint64_t, 2>& res : results) {
            cnt["results"].push_back({
                { "items", res[0] },
                { "time", res[1] }
            });
        }

        std::remove(path.c_str());
        std::ofstream file(path);
        file << cnt.dump(4);
        file.close();
    }

}

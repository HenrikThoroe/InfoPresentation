#include <chrono>
#include <thread>
#include <iostream>
#include <fstream> 
#include <stdio.h>

#include "json.hpp"

#include "driver.hpp"
#include "sum_range.hpp"
#include "fill_random.hpp"
#include "quick_sort.hpp"
#include "radix_sort.hpp"

namespace model {

    driver::driver(uint64_t cores, uint64_t memory, uint64_t sections) : cores(cores), memory(memory), sections(sections) {}

    void driver::prepareData() {
        constexpr int64_t gig = 1'000'000'000;
        const int64_t totalItems = memory * gig / 8;
        const int64_t batchSize = totalItems / util::sum_range(1, sections + 1);

        data.resize(sections);

        for (uint64_t i = 1; i <= sections; ++i) {
            util::fill_random(data[i - 1], batchSize * i);
        }
    }

    void driver::run(driver::sort_function sortFunction) {
        prepareData();

        results.clear();
        results.resize(sections);

        std::vector<std::thread> pool{};

        for (size_t i = 0; i < data.size(); ++i) {
            pool.push_back(std::thread([i, sortFunction, this] {
                std::vector<uint64_t>& batch = data[i];
                std::chrono::steady_clock::time_point begin = std::chrono::steady_clock::now();

                sortFunction(batch);

                std::chrono::steady_clock::time_point end = std::chrono::steady_clock::now();

                const int64_t duration = std::chrono::duration_cast<std::chrono::microseconds>(end - begin).count();

                results[i] = { static_cast<uint64_t>(batch.size()), static_cast<uint64_t>(duration) };
            }));

            // When 'cores' threads are created or end of loop is reached, wait for completion.
            if ((i > 0 && i % cores == 0) || (i == data.size() - 1)) {
                for (std::thread& thread : pool) {
                    thread.join();
                }

                pool.clear();
            }
        }
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

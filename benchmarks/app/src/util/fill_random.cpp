#include <random>

#include "fill_random.hpp"

namespace util {

    void fill_random(std::vector<uint64_t>& array, int items) {
        static std::random_device seeder;
        static std::mt19937 rng(seeder()); 
        static std::uniform_int_distribution<uint64_t> gen(0, UINT64_MAX);

        array.resize(items);

        for (int i = 0; i < items; ++i) {
            array[i] = gen(rng);
        }
    }

}

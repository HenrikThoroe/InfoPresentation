#pragma once

#include <inttypes.h>
#include <vector>

namespace util {

    /**
     * Fills the `std::vector` object with random numbers
     * 
     * @param array List to fill
     * @param items The number of numbers to be inserted. `array` will be resized  
     */
    void fill_random(std::vector<uint64_t>& array, int items);

    /**
     * Fills the `std::vector` object with random numbers (32 bit)
     * 
     * @param array List to fill
     * @param items The number of numbers to be inserted. `array` will be resized  
     */
    void fill_random_32(std::vector<uint32_t>& array, int items);

}

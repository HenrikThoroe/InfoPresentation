#pragma once

#include <inttypes.h>
#include <vector>

namespace model {

    /**
     * Quick Sort is a comparison based, unstable, in-place sorting algorithm 
     * which operates in O(n logn).
     * 
     * @param data An unsorted array of unsigned 64 bit numbers
     */
    void quick_sort(std::vector<uint64_t>& data);

    /**
     * Quick Sort is a comparison based, unstable, in-place sorting algorithm 
     * which operates in O(n logn).
     * 
     * @param data An unsorted array of unsigned 32 bit numbers
     */
    void quick_sort_32(std::vector<uint32_t>& data);
    
}

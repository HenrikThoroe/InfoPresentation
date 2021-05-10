#pragma once

#include <inttypes.h>
#include <vector>

namespace model {

    /**
     * Merge Sort is a stable sorting algorithm which operates in O(n logn) with a space requirement of O(n).
     * 
     * @param data An unsorted array of unsigned 64 bit numbers
     */
    void merge_sort(std::vector<uint64_t>& data);
    
}

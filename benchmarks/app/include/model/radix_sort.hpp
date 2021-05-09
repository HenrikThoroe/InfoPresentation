#pragma once

#include <inttypes.h>
#include <vector>

namespace model {

    /**
     * Radix Sort is a stable sorting algorithm which operates in O(n*l) with a space requirement of O(n).
     * Let l be the bitwidth of the sorting keys. This implementation operates only on 64 bit keys, 
     * therefore the complexity is O(n).
     * 
     * @param data An unsorted array of unsigned 64 bit numbers
     */
    void radix_sort(std::vector<uint64_t>& data);
    
}

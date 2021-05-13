#pragma once

namespace util {

    /**
     * Sums up the numbers over the given range. 
     * Equivalent to 'sum i, i = lower, i < upper'
     * 
     * @param lower The lower bound (inclusive)
     * @param upper The upper bound (exclusive)
     */
    int sum_range(int lower, int upper);

}

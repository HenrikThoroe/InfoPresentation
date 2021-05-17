#include "merge_sort.hpp"

namespace model {

    namespace {

        void mergeWithCopy(std::vector<uint64_t>& data, int start, int middle, int end) {
            std::vector<uint64_t> result{};
            int idx0 = start;
            int idx1 = middle;
            
            while (idx0 < middle || idx1 < end) {
                if (idx0 == middle) {
                    result.push_back(data[idx1]);
                    idx1 += 1;
                } else if (idx1 == end) {
                    result.push_back(data[idx0]);
                    idx0 += 1;
                } else if (data[idx0] < data[idx1]) {
                    result.push_back(data[idx0]);
                    idx0 += 1;
                } else {
                    result.push_back(data[idx1]);
                    idx1 += 1;
                }
            }

            for (size_t i = 0; i < result.size(); ++i) {
                data[start + i] = result[i];
            }
        }

        //? In Place Alternative -> Even slower
        /* void merge(std::vector<uint64_t>& data, int start, int middle, int end) {
            int i = start;
            int j = middle;

            while (i < middle && j < end) {
                if (data[i] < data[j]) {
                    i += 1;
                } else {
                    // insert data[j] before i and shift remaining items to the right

                    data.insert(data.begin() + i, data[j]);
                    data.erase(data.begin() + j + 1);

                    // shift pointers and border to the right too
                    i += 1;
                    j += 1;
                    middle += 1;
                }
            } 
        } */

        void sort(std::vector<uint64_t>& data, int start, int end) {
            int cntRange = end - start;

            if (cntRange > 1) {
                int middle = cntRange / 2 + start;
                
                sort(data, start, middle);
                sort(data, middle, end);
                
                mergeWithCopy(data, start, middle, end);
            }
        }

    }

    void merge_sort(std::vector<uint64_t>& data) {
        sort(data, 0, data.size());
    }

}

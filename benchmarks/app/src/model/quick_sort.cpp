#include <array>
#include <random>

#include "quick_sort.hpp"

namespace model {

    namespace {

        template <typename T>
        T find_pivot(std::vector<T>& data, int leftBorder, int rightBorder) {
            static std::random_device seeder;
            static std::mt19937 rng(seeder()); 
            std::uniform_int_distribution<int> gen(leftBorder, rightBorder - 1);
            const int idx = gen(rng);

            std::swap(data[idx], data[rightBorder - 1]);

            return data[rightBorder - 1];
        }

        template <typename T>
        int place_pivot(std::vector<T>& data, int leftBorder, int rightBorder) {
            int index = leftBorder - 1;
            const T pivot = find_pivot(data, leftBorder, rightBorder);

            for (int x = leftBorder; x < rightBorder; ++x) {
                if (data[x] <= pivot) {
                    index += 1;
                    std::swap(data[x], data[index]);
                }
            }

            return index;
        }

        template <typename T>
        void sort(std::vector<T>& data, int leftBorder, int rightBorder) {
            if (leftBorder >= rightBorder || data.size() < 2) {
                return;
            }

            const int pivot = place_pivot(data, leftBorder, rightBorder);

            sort(data, leftBorder, pivot);
            sort(data, pivot + 1, rightBorder);
        }

    }

    void quick_sort(std::vector<uint64_t>& data) {
        sort(data, 0, data.size());
    }

    void quick_sort_32(std::vector<uint32_t>& data) {
        sort(data, 0, data.size());
    }

}

#include <array>

#include "radix_sort.hpp"

namespace model {

    void radix_sort(std::vector<uint64_t>& data) {
        std::array<std::vector<uint64_t>, 2> buckets{};

        // O(l), wo l die Bitbreite der zu sortierenden Zahlen ist. 
        // Hier: 64
        for (int i = 0; i < 64; ++i) {
            
            for (const uint64_t& entry : data) {
                // 'entry >> i' verschiebt entry um i Stellen nach rechts.
                // Daher ist die i'te Stelle das LSB.
                // '& 1' wendet eine Bitmaske auf den Integer an, wo lediglich das LSB übernommen wird.
                // Insofern ist das Resultat entweder 0 oder 1, je nachdem welchen Wert das Bit an der 
                // i'ten Stelle von 'entry' hatte.
                buckets[(entry >> i) & 1].push_back(entry);
            }

            // 'buckets' beinhaltet die Zahlen von 'data' in an den Stellen x >= i sortierten Reihenfolge
            // Für den nächsten Durchlauf müssen die sortierten Zahlen also wieder in 'data' kopiert werden
            std::copy(buckets[0].begin(), buckets[0].end(), data.begin());
            std::copy(buckets[1].begin(), buckets[1].end(), data.begin() + buckets[0].size());

            // Zwischenspeicher leeren
            buckets[0].clear();
            buckets[1].clear();
        }
    }

    void radix_sort_32(std::vector<uint32_t>& data) {
        std::array<std::vector<uint32_t>, 2> buckets{};

        // O(l), wo l die Bitbreite der zu sortierenden Zahlen ist. 
        // Hier: 64
        for (int i = 0; i < 32; ++i) {
            
            for (const uint32_t& entry : data) {
                // 'entry >> i' verschiebt entry um i Stellen nach rechts.
                // Daher ist die i'te Stelle das LSB.
                // '& 1' wendet eine Bitmaske auf den Integer an, wo lediglich das LSB übernommen wird.
                // Insofern ist das Resultat entweder 0 oder 1, je nachdem welchen Wert das Bit an der 
                // i'ten Stelle von 'entry' hatte.
                buckets[(entry >> i) & 1].push_back(entry);
            }

            // 'buckets' beinhaltet die Zahlen von 'data' in an den Stellen x >= i sortierten Reihenfolge
            // Für den nächsten Durchlauf müssen die sortierten Zahlen also wieder in 'data' kopiert werden
            std::copy(buckets[0].begin(), buckets[0].end(), data.begin());
            std::copy(buckets[1].begin(), buckets[1].end(), data.begin() + buckets[0].size());

            // Zwischenspeicher leeren
            buckets[0].clear();
            buckets[1].clear();
        }
    }

}

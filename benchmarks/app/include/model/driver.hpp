#pragma once

#include <inttypes.h>
#include <vector>
#include <array>
#include <string>

namespace model {

    /// Class to manage and coordinate benchmarks 
    class driver {
        public:
            typedef void (*sort_function)(std::vector<uint64_t>&);

        private:
            /// Number of used cores
            const uint64_t cores;

            /// Approximately allocated memory 
            const uint64_t memory;

            /// Number of saved entries. 
            /// The higher the more data will be available in output files 
            const uint64_t sections;

            /// The results of the benchmark.
            /// The std::vector has the size `sections`.
            /// The array contains the number of sorted elements and the time required in us.
            std::vector<std::array<uint64_t, 2>> results{};

        public: 
            driver(uint64_t cores, uint64_t memory, uint64_t sections);
            driver(driver& other) = delete;
            driver(driver* other) = delete;

            /**
             * Sorts the data using the given sorting function and meassures the required time
             * 
             * @param sortFunction Pointer to the function whose performance should be meassured
             */
            void run(sort_function sortFunction);

            /**
             * Saves the results of the last run to a .json file
             * 
             * @param algorithm The name of the used algorithm for convinience 
             * @param path Path to .json file
             */
            void save(const std::string& algorithm, const std::string& path) const;
            
    };

}

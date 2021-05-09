#include "cxxopts.hpp"

#include "driver.hpp"
#include "quick_sort.hpp"
#include "radix_sort.hpp"

int main(int argc, char* argv[]) {
    cxxopts::Options options("sortbench", "Command line tool to bench the performance of different sorting algorithms");
    options.add_options()
        ("c,cores", "Number of Used Cores", cxxopts::value<uint64_t>()->default_value("2"))
        ("m,memory", "Memory in Gigabyte Used by Application", cxxopts::value<uint64_t>()->default_value("3"))
        ("s,sections", "Number of Entries in Result Files", cxxopts::value<uint64_t>()->default_value("100"))
        ("o,out", "Path to Output Location", cxxopts::value<std::string>()->default_value("./"))
        ("h,help", "Show Usage Hints")
    ;

    cxxopts::ParseResult cmdResults = options.parse(argc, argv);

    if (cmdResults.count("help")) {
        std::cout << options.help() << std::endl;
        exit(0);
    }

    model::driver driver = model::driver(
        cmdResults["cores"].as<uint64_t>(), 
        cmdResults["memory"].as<uint64_t>(), 
        cmdResults["sections"].as<uint64_t>()
    );

    driver.run(model::quick_sort);
    driver.save("Quick Sort", cmdResults["out"].as<std::string>() + "/quick.json");
    driver.run(model::radix_sort);
    driver.save("Radix Sort", cmdResults["out"].as<std::string>() + "/radix.json");

    return 0;
}

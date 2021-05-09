# Create output directory
mkdir -p dist/

# Compile source files
g++ -Ofast -flto -pthread -Wall -std=c++17 -o dist/benchmarks.out -I app/include/libraries -I app/include/model -I app/include/util $(find ./app/src -type f -name "*.cpp")

# Benchmarks

This directory contains a command line tool to run benchmarks on different sorting algorithms.
The results are saved automatically in JSON files for further usage in `presentation` frontend.

## Build

The build process can be automated with the provided `compile.sh` script.
Running a Linux distro with g++ / gcc is required for building.
The compiled binary can be found in `/benchmarks/dist`.
Building is tested under Ubuntu 20.04 running in WSL.

```sh
./compile.sh
```

## Usage

After building the binary, it can be called directly. You cannot use the executable on a system different to the compile target.

```sh
./dist/benchmarks.out [...OPTIONS]
```

For further instructions on the required arguments use

```sh
./dist/benchmarks.out --help
```

namespace util {

    int sum_range(int lower, int upper) {
        int sum = 0;

        for (int x = lower; x < upper; ++x) {
            sum += x;
        }

        return sum;
    }

}

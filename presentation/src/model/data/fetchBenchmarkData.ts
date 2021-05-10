import radix from "./radix.json"
import quick from "./quick.json"

export interface BenchmarkEntry {
    size: number
    time: {
        quicksort: number
        radixsort: number
    }
}

export default function fetchBenchmarkData(): BenchmarkEntry[] {
    if (radix.results.length !== quick.results.length) {
        return []
    }

    const data: BenchmarkEntry[] = []

    for (let i = 0; i < radix.results.length - 3; ++i) {
        data.push({
            size: radix.results[i].items,
            time: {
                radixsort: radix.results[i].time / 1000000,
                quicksort: quick.results[i].time / 1000000
            }
        })
    }

    return data
}

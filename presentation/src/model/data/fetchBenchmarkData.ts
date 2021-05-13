import radix from "./radix.json"
import radix32 from "./radix32.json"
import quick from "./quick.json"
import quick32 from "./quick32.json"

export interface BenchmarkEntry {
    size: number
    time: {
        quicksort: number
        radixsort: number
        quicksort32: number
        radixsort32: number
    }
}

export default function fetchBenchmarkData(): BenchmarkEntry[] {
    if (radix.results.length !== quick.results.length) {
        return []
    }

    const data: BenchmarkEntry[] = []

    for (let i = 0; i < radix.results.length - 5; ++i) {
        data.push({
            size: radix.results[i].items,
            time: {
                radixsort: radix.results[i].time / 1000000,
                quicksort: quick.results[i].time / 1000000,
                quicksort32: quick32.results[i].time / 1000000,
                radixsort32: radix32.results[i].time / 1000000
            }
        })
    }

    return data
}

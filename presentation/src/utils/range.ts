export default function range(start: number, end: number) {
    if (start >= end) {
        return []
    }

    const numbers: number[] = []

    for (let i = start; i < end; ++i) {
        numbers.push(i)
    }

    return numbers
}

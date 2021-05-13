export default function bubblesort<T>(data: T[], comparator: (a: T, b: T) => boolean) {
    let index = data.length
    let swapped

    do {
        swapped = false
        for (let i = 1; i < index; ++i) {
            if (comparator(data[i - 1], data[i])) {
                ;[data[i], data[i - 1]] = [data[i - 1], data[i]]
                swapped = true
            }
        }

        index -= 1
    } while (swapped)

    return data
}

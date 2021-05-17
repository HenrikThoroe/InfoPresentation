export default function insertionsort<T>(data: T[], comparator: (a: T, b: T) => boolean): T[] {
    for (let i = 0; i < data.length - 1; i++) {
        let jMin = i
        for (let j = i + 1; j < data.length; j++) {
            if (comparator(data[j], data[jMin])) {
                jMin = j
            }
        }

        if (jMin !== i) {
            ;[data[i], data[jMin]] = [data[jMin], data[i]]
        }
    }

    return data
}

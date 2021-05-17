export default function quicksort<T>(data: T[], comparator: (a: T, b: T) => boolean) {
    let u = 0
    const sort = (arr: T[], leftBorder: number, rightBorder: number) => {
        console.log(leftBorder, rightBorder)
        if (u++ > 10) {
            return
        }
        if (leftBorder >= rightBorder || arr.length < 2) {
            return
        }

        const pivotIndex = placePivot(arr, leftBorder, rightBorder)
        sort(arr, leftBorder, pivotIndex)
        sort(arr, pivotIndex + 1, rightBorder)
    }

    const placePivot = (arr: T[], leftBorder: number, rightBorder: number) => {
        let index = leftBorder - 1
        let pivot = findPivot(arr, leftBorder, rightBorder)

        for (let x = leftBorder; x < rightBorder; ++x) {
            if (!comparator(arr[x], pivot)) {
                index += 1
                ;[arr[x], arr[index]] = [arr[index], arr[x]]
            }
        }

        return index
    }

    const findPivot = (arr: T[], leftBorder: number, rightBorder: number) => {
        let high = rightBorder - 1
        let rng = Math.floor(Math.random() * (rightBorder - leftBorder) + leftBorder)

        ;[arr[rng], arr[high]] = [arr[high], arr[rng]]

        return arr[high]
    }

    sort(data, 0, data.length)
    return data
}

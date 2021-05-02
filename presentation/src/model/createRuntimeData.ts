export interface RuntimeData {
    x: number
    n: number
    square: number
    log: number
    nlog: number
}

export default function createRuntimeData(size: number): RuntimeData[] {
    const data: RuntimeData[] = []

    for (let i = 0; i < size; ++i) {
        data.push({
            x: i,
            n: i,
            square: Math.pow(i, 2),
            log: i === 0 ? 0 : Math.log2(i),
            nlog: i === 0 ? 0 : i * Math.log2(i)
        })
    }

    console.log(data)

    return data
}

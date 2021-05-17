export default async function sleep(ms: number): Promise<void> {
    return new Promise((res, _) => {
        setTimeout(res, ms)
    })
}

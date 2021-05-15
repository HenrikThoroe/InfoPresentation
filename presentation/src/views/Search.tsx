import { useEffect, useState } from "react"
import ClickListener from "../components/action/ClickListener"
import Box from "../components/content/Box"
import DataArray from "../components/content/DataArray"
import Text from "../components/content/Text"
import Container from "../components/layout/Container"
import VStack from "../components/layout/VStack"
import sleep from "../utils/sleep"

const unsorted = [
    15,
    12,
    4,
    8,
    14,
    3,
    25,
    18,
    6,
    20,
    24,
    7,
    2,
    29,
    13,
    22,
    9,
    11,
    10,
    26,
    17,
    21,
    19,
    5,
    28,
    0,
    23,
    16,
    1,
    27
]

const sorted = [...unsorted].sort((a, b) => a - b)

export default function Search() {
    const [animation, setAnimation] = useState<"unsorted" | "sorted" | null>(null)
    const [unsortedActive, setUnsortedActive] = useState<number | undefined>(undefined)
    const [sortedActive, setSortedActive] = useState<number | undefined>(undefined)
    const [sortedHighlighted, setSortedHighlighted] = useState<[number, number] | undefined>(
        undefined
    )

    const animateUnsorted = async () => {
        const toFind = 18
        for (let i = 0; i <= unsorted.findIndex(u => u === toFind); ++i) {
            setUnsortedActive(i)
            await sleep(500)
        }

        await sleep(2000)

        setUnsortedActive(undefined)
    }

    const animateSorted = async () => {
        const toFind = 18
        let number: number
        let start = 0
        let end = sorted.length

        do {
            let mid = Math.floor((end - start) / 2) + start

            number = sorted[mid]
            setSortedActive(mid)
            await sleep(500)

            if (number > toFind) {
                end = mid
            }

            if (number < toFind) {
                start = mid + 1
            }

            if (number !== toFind) {
                setSortedActive(undefined)
                setSortedHighlighted([start, end])
                await sleep(1000)
                setSortedHighlighted(undefined)
            }
        } while (number !== toFind)

        await sleep(1000)
        setSortedActive(undefined)
    }

    useEffect(() => {
        if (animation === "unsorted") {
            animateUnsorted()
        }

        if (animation === "sorted") {
            animateSorted()
        }
    }, [animation])

    return (
        <Container overflow="hidden" width="100vw" height="100vh">
            <VStack spacing="3rem" alignment="center" horizontalAlignment="center">
                <ClickListener onClick={() => setAnimation("unsorted")}>
                    <Box shadow={animation === "unsorted" ? 5 : 1}>
                        <VStack spacing="1rem">
                            <Text size="l" weight="bold">
                                Unsortiert
                            </Text>
                            <DataArray numbers={unsorted} active={unsortedActive} />
                        </VStack>
                    </Box>
                </ClickListener>
                <ClickListener onClick={() => setAnimation("sorted")}>
                    <Box shadow={animation === "sorted" ? 5 : 1}>
                        <VStack spacing="1rem">
                            <Text size="l" weight="bold">
                                Sortiert
                            </Text>
                            <DataArray
                                numbers={sorted}
                                active={sortedActive}
                                highlighted={sortedHighlighted}
                            />
                        </VStack>
                    </Box>
                </ClickListener>
            </VStack>
        </Container>
    )
}

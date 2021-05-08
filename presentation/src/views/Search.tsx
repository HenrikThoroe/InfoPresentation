import { useEffect, useState } from "react"
import ClickListener from "../components/action/ClickListener"
import Box from "../components/content/Box"
import DataArray from "../components/content/DataArray"
import Text from "../components/content/Text"
import Container from "../components/layout/Container"
import VStack from "../components/layout/VStack"
import sleep from "../utils/sleep"

export default function Search() {
    const [animation, setAnimation] = useState<"unsorted" | "sorted" | null>(null)
    const [unsortedActive, setUnsortedActive] = useState<number | undefined>(undefined)
    const [sortedActive, setSortedActive] = useState<number | undefined>(undefined)
    const [sortedHighlighted, setSortedHighlighted] = useState<[number, number] | undefined>(
        undefined
    )

    const animateUnsorted = async () => {
        for (let i = 0; i < 5; ++i) {
            setUnsortedActive(i)
            await sleep(500)
        }

        await sleep(2000)

        setUnsortedActive(undefined)
    }

    const animateSorted = async () => {
        setSortedActive(4)
        await sleep(500)
        setSortedActive(undefined)
        setSortedHighlighted([0, 4])
        await sleep(1000)
        setSortedHighlighted(undefined)

        setSortedActive(1)
        await sleep(500)
        setSortedActive(undefined)
        setSortedHighlighted([0, 1])
        await sleep(1000)
        setSortedHighlighted(undefined)

        setSortedActive(0)
        await sleep(2000)
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
                            <DataArray
                                numbers={[8, 3, 2, 6, 0, 1, 7, 9, 5, 4]}
                                active={unsortedActive}
                            />
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
                                numbers={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
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

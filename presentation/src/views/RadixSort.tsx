import { useState } from "react"
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight"
import ClickListener from "../components/action/ClickListener"
import Box from "../components/content/Box"
import Button from "../components/content/Button"
import DataArray from "../components/content/DataArray"
import Popover from "../components/content/Popover"
import Table from "../components/content/Table"
import TableCell from "../components/content/Table/TableCell"
import TableHead from "../components/content/Table/TableHead"
import TableRow from "../components/content/Table/TableRow"
import Text from "../components/content/Text"
import Container from "../components/layout/Container"
import HStack from "../components/layout/HStack"
import VStack from "../components/layout/VStack"
import range from "../utils/range"

const defaultNumbers = [
    [2, 4, 5],
    [3, 1, 2],
    [4, 5, 0],
    [4, 1, 0],
    [8, 2, 0],
    [2, 3, 9],
    [1, 6, 9],
    [8, 6, 8],
    [3, 0, 0],
    [7, 3, 6]
]

const defaultBuckets = Array.from({ length: 10 }, () => [])

const defaultDigit = 2

const code = `
#include <algorithm>
#include <array>
#include <cstdint>
#include <vector>

using namespace std;

template <typename ForwardIt>
void radix_sort(ForwardIt begin, ForwardIt end) {
    // Falls Container leer ist
    if (begin == end)
        return;

    // Partitionierung
    array<vector<uint32_t>, 2> partition;

    // Schleife über alle 32 Bits
    for (uint32_t bit = 0; bit < 32; ++bit) {
        // Bit ermitteln und im Segment abbilden
        for (ForwardIt iterator = begin; iterator != end; ++iterator)
            partition[(*iterator >> bit) & 1].push_back(*iterator);

        // Änderungen aus jedem Segment übernehmen
        copy(partition[0].begin(), partition[0].end(), begin);
        copy(partition[1].begin(), partition[1].end(),
            begin + partition[0].size());

        partition[0].clear();
        partition[1].clear();
    }
}
`

export default function RadixSort() {
    const [numbers, setNumbers] = useState(defaultNumbers)
    const [buckets, setBuckets] = useState<number[][][]>(defaultBuckets)
    const [digit, setDigit] = useState(defaultDigit)
    const [showCode, setShowCode] = useState(false)

    const reset = () => {
        setDigit(defaultDigit)
        setNumbers(defaultNumbers)
        setBuckets(defaultBuckets)
    }

    const addToBucket = (index: number, batch: number[], batchIndex: number) => {
        setBuckets([
            ...buckets.slice(0, index),
            [...buckets[index], batch],
            ...buckets.slice(index + 1)
        ])
        setNumbers([...numbers.slice(0, batchIndex), [], ...numbers.slice(batchIndex + 1)])
    }

    const moveBucket = (index: number) => {
        setNumbers([...numbers.filter(batch => batch.length > 0), ...buckets[index]])
        setBuckets([...buckets.slice(0, index), [], ...buckets.slice(index + 1)])
    }

    const listCells = () => {
        return numbers.map((batch, idx) => (
            <TableCell>
                <ClickListener onClick={() => addToBucket(batch[digit], batch, idx)}>
                    <DataArray shrink active={digit} numbers={batch} />
                </ClickListener>
            </TableCell>
        ))
    }

    const bucketCells = () => {
        return buckets.map((bucket, idx) => (
            <TableCell>
                <ClickListener onClick={() => moveBucket(idx)}>
                    <VStack alignment="start" horizontalAlignment="center">
                        {bucket.map(batch => (
                            <DataArray shrink numbers={batch} />
                        ))}
                    </VStack>
                </ClickListener>
            </TableCell>
        ))
    }

    const headerCells = () => {
        return range(0, 10).map(key => (
            <TableCell>
                <Text size="l" weight="bold" fixedWidth="3rem">
                    {key.toFixed(0)}
                </Text>
            </TableCell>
        ))
    }

    return (
        <Container overflow="hidden" width="100vw" height="100vh">
            <VStack
                spacing="5rem"
                alignment="start"
                horizontalAlignment="center"
                padding="10rem 0px 0px 0px"
            >
                <Text size="xxl" weight="bold">
                    Radix Sort
                </Text>
                <HStack spacing="1rem" padding="0px 25%" shrinkHeight>
                    <Text size="l" weight="bold">
                        Idee:
                    </Text>
                    <Text size="l">
                        Radix (bed.: Basis) Sort ist ein Verfahren, mit dem Zahlen stabil in O(n*l)
                        (n: Größe der zu sortierenden Menge; l: Bit-Breite der zahlen, daher
                        meistens 32 oder 64) sortiert werden können. Es werden ausgehend von einer
                        Seite die einzelnen Stellen der Zahlen in Kästen aufgeteilt, und daraufhin
                        wieder, jetzt in mindestens einer Stelle sortierten Reihenfolge,
                        aufgesammelt. Der Vorgang wird für jede Stelle wiederholt.
                    </Text>
                </HStack>
                <Box>
                    <HStack spacing="2rem" shrinkHeight shrinkWidth>
                        <VStack spacing="5rem" shrinkWidth shrinkHeight>
                            <Table>
                                <TableHead>{headerCells()}</TableHead>
                                <TableRow>{listCells()}</TableRow>
                            </Table>

                            <Table>
                                <TableHead>{headerCells()}</TableHead>
                                <TableRow>{bucketCells()}</TableRow>
                            </Table>
                        </VStack>
                        <VStack spacing="1rem" shrinkWidth shrinkHeight>
                            <Button onClick={() => setDigit(digit - 1)}>Nächste Stelle</Button>
                            <Button onClick={reset}>Reset</Button>
                            <Button onClick={() => setShowCode(true)}>Code</Button>
                        </VStack>
                    </HStack>
                </Box>
            </VStack>

            <Popover shown={showCode} onClose={() => setShowCode(false)}>
                <SyntaxHighlighter
                    customStyle={{ background: "transparent" }}
                    showLineNumbers
                    language="cpp"
                >
                    {code.trim()}
                </SyntaxHighlighter>
            </Popover>
        </Container>
    )
}

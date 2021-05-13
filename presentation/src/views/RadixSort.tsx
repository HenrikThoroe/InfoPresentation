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
void radix_sort(std::vector<uint64_t>& data) {
    std::array<std::vector<uint64_t>, 2> buckets{};

    // O(l), wo l die Bitbreite der zu sortierenden Zahlen ist. 
    // Hier: 64
    for (int i = 0; i < 64; ++i) {
        
        for (const uint64_t& entry : data) {
            // 'entry >> i' verschiebt entry um i Stellen nach rechts.
            // Daher ist die i'te Stelle das LSB.
            // '& 1' wendet eine Bitmaske auf den Integer an, wo lediglich das LSB übernommen wird.
            // Insofern ist das Resultat entweder 0 oder 1, je nachdem welchen Wert das Bit an der 
            // i'ten Stelle von 'entry' hatte.
            buckets[(entry >> i) & 1].push_back(entry);
        }

        // 'buckets' beinhaltet die Zahlen von 'data' in an den Stellen x >= i sortierten Reihenfolge
        // Für den nächsten Durchlauf müssen die sortierten Zahlen also wieder in 'data' kopiert werden
        std::copy(buckets[0].begin(), buckets[0].end(), data.begin());
        std::copy(buckets[1].begin(), buckets[1].end(), data.begin() + buckets[0].size());

        // Zwischenspeicher leeren
        buckets[0].clear();
        buckets[1].clear();
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

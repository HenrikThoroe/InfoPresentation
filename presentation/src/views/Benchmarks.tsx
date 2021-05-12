import { useState } from "react"
import { Label, Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import Text from "../components/content/Text"
import Container from "../components/layout/Container"
import HStack from "../components/layout/HStack"
import VStack from "../components/layout/VStack"
import fetchBenchmarkData from "../model/data/fetchBenchmarkData"
import Switch from "react-switch"

export default function Benchmarks() {
    const [showRadix, setShowRadix] = useState(false)
    const [showRadix32, setShowRadix32] = useState(false)
    const [showQuick, setShowQuick] = useState(false)
    const [showMerge, setShowMerge] = useState(false)

    return (
        <Container overflow="hidden" width="100vw" height="100vh">
            <VStack
                spacing="5rem"
                alignment="start"
                horizontalAlignment="center"
                padding="5rem 0px 0px 0px"
            >
                <HStack alignment="center" verticalAlignment="center" spacing="1rem" shrinkHeight>
                    <Text size="xxl" weight="bold">
                        Radix Sort
                    </Text>
                    <Text size="xl">vs</Text>
                    <Text size="xxl" weight="bold">
                        Quick Sort
                    </Text>
                </HStack>

                <HStack spacing="3rem" shrinkWidth shrinkHeight>
                    <ResponsiveContainer width={1200} height={800}>
                        <LineChart
                            margin={{ bottom: 30, left: 30, right: 30, top: 30 }}
                            data={fetchBenchmarkData()}
                        >
                            <XAxis
                                dataKey="size"
                                tickFormatter={(val: number) =>
                                    val.toLocaleString("de-DE", {
                                        maximumFractionDigits: 2
                                    })
                                }
                            >
                                <Label position="insideTopRight" offset={30}>
                                    Größe der Datenmenge (n)
                                </Label>
                            </XAxis>
                            <YAxis unit="s">
                                <Label value="s" position="top" offset={10}>
                                    Zeit
                                </Label>
                            </YAxis>
                            <Legend />
                            {showRadix && (
                                <Line
                                    name="Radix"
                                    dataKey="time.radixsort"
                                    type="monotone"
                                    stroke="#de4337"
                                    dot={false}
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                />
                            )}
                            {showQuick && (
                                <Line
                                    name="Quick"
                                    dataKey="time.quicksort"
                                    type="monotone"
                                    stroke="#37de3a"
                                    dot={false}
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                />
                            )}
                            {showMerge && (
                                <Line
                                    name="Merge"
                                    dataKey="time.mergesort"
                                    type="monotone"
                                    stroke="#ffc658"
                                    dot={false}
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                />
                            )}
                            {showRadix32 && (
                                <Line
                                    name="Radix 32"
                                    dataKey="time.radixsort32"
                                    type="monotone"
                                    stroke="#8884d8"
                                    dot={false}
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                />
                            )}
                        </LineChart>
                    </ResponsiveContainer>

                    <VStack spacing="3rem" shrinkWidth shrinkHeight>
                        <HStack verticalAlignment="center" spacing="1rem" shrinkHeight shrinkWidth>
                            <Switch onChange={check => setShowRadix(check)} checked={showRadix} />
                            <Text size="m" weight="bold">
                                Radix Sort
                            </Text>
                        </HStack>

                        <HStack verticalAlignment="center" spacing="1rem" shrinkHeight shrinkWidth>
                            <Switch
                                onChange={check => setShowRadix32(check)}
                                checked={showRadix32}
                            />
                            <Text size="m" weight="bold">
                                Radix Sort 32
                            </Text>
                        </HStack>

                        <HStack verticalAlignment="center" spacing="1rem" shrinkHeight shrinkWidth>
                            <Switch onChange={check => setShowQuick(check)} checked={showQuick} />
                            <Text size="m" weight="bold">
                                Quick Sort
                            </Text>
                        </HStack>

                        <HStack verticalAlignment="center" spacing="1rem" shrinkHeight shrinkWidth>
                            <Switch onChange={check => setShowMerge(check)} checked={showMerge} />
                            <Text size="m" weight="bold">
                                Merge Sort
                            </Text>
                        </HStack>
                    </VStack>
                </HStack>
            </VStack>
        </Container>
    )
}

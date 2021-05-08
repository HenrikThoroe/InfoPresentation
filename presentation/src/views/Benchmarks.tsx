import { Label, Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import Text from "../components/content/Text"
import Container from "../components/layout/Container"
import HStack from "../components/layout/HStack"
import VStack from "../components/layout/VStack"
import createRuntimeData from "../model/createRuntimeData"

export default function Benchmarks() {
    return (
        <Container overflow="hidden" width="100vw" height="100vh">
            <VStack
                spacing="5rem"
                alignment="start"
                horizontalAlignment="center"
                padding="10rem 0px 0px 0px"
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

                <ResponsiveContainer width={1200} height={800}>
                    <LineChart
                        margin={{ bottom: 30, left: 30, right: 30, top: 30 }}
                        data={createRuntimeData(Math.pow(10, 3)).map(d => ({
                            ...d,
                            ...{ n: d.n * 9 }
                        }))}
                    >
                        <XAxis dataKey="x">
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
                        <Line
                            name="Radix"
                            dataKey="n"
                            type="monotone"
                            stroke="#de4337"
                            dot={false}
                            strokeWidth={2}
                            strokeLinecap="round"
                        />
                        <Line
                            name="Quick"
                            dataKey="nlog"
                            type="monotone"
                            stroke="#37de3a"
                            dot={false}
                            strokeWidth={2}
                            strokeLinecap="round"
                        />
                    </LineChart>
                </ResponsiveContainer>
            </VStack>
        </Container>
    )
}

import { ResponsiveContainer, AreaChart, XAxis, YAxis, Legend, Area } from "recharts"
import VStack from "../components/layout/VStack"
import createRuntimeData from "../model/createRuntimeData"
import Text from "../components/content/Text"

export default function RuntimeSnippet() {
    return (
        <VStack spacing="3rem">
            <Text weight="normal" size="xl">
                Laufzeit
            </Text>
            <Text weight="bold">
                Def.: Wie verhält sich die Zeit, die der Algorhythmus zur Ausführung braucht, im
                Verhältnis zum Umfang der Eingabe?
            </Text>
            <ResponsiveContainer width="90%" height={400}>
                <AreaChart
                    margin={{ bottom: 20, left: 20, right: 20, top: 20 }}
                    data={createRuntimeData(10)}
                >
                    <XAxis dataKey="x" tick={false} />
                    <YAxis tick={false} />
                    <Legend />
                    <Area
                        name="O(n^2)"
                        type="monotone"
                        dataKey="square"
                        stroke="#82ca9d"
                        fill="#82ca9d"
                        dot={false}
                    />
                    <Area
                        name="O(n * logn)"
                        type="monotone"
                        dataKey="nlog"
                        stroke="#ed8447"
                        fill="#ed8447"
                        dot={false}
                    />
                    <Area
                        name="O(n)"
                        type="monotone"
                        dataKey="n"
                        stroke="#8884d8"
                        fill="#8884d8"
                        dot={false}
                    />
                    <Area
                        name="O(logn)"
                        type="monotone"
                        dataKey="log"
                        stroke="#ffc658"
                        fill="#ffc658"
                        dot={false}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </VStack>
    )
}

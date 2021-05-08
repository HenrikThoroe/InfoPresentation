import Table from "../components/content/Table"
import TableCell from "../components/content/Table/TableCell"
import TableHead from "../components/content/Table/TableHead"
import TableRow from "../components/content/Table/TableRow"
import VStack from "../components/layout/VStack"
import createNameDataset from "../model/createNameDataset"
import Text from "../components/content/Text"
import HStack from "../components/layout/HStack"
import { useState } from "react"
import Button from "../components/content/Button"

export default function StabilitySnippet() {
    const [sort, setSort] = useState<undefined | "stable" | "instable">(undefined)

    return (
        <VStack spacing="3rem">
            <Text weight="normal" size="xl">
                Stabilität
            </Text>
            <Text weight="bold">
                Def.: Ein Sortieralgorhythmus ist stabil, wenn die relative Reihenfolge nicht
                verändert wird.
            </Text>
            <Table>
                <TableHead>
                    <TableCell>Name</TableCell>
                    <TableCell>Vorname</TableCell>
                </TableHead>
                {createNameDataset(sort).map(data => {
                    return (
                        <TableRow>
                            <TableCell>{data.name}</TableCell>
                            <TableCell>{data.firstName}</TableCell>
                        </TableRow>
                    )
                })}
            </Table>

            <HStack alignment="end" spacing="1rem">
                <Button onClick={() => setSort(undefined)}>Zurücksetzen</Button>
                <Button onClick={() => setSort("stable")}>Stabil Sortieren</Button>
                <Button onClick={() => setSort("instable")}>Instabil Sortieren</Button>
            </HStack>
        </VStack>
    )
}

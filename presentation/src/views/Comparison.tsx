import React from "react"
import Table from "../components/content/Table"
import TableCell from "../components/content/Table/TableCell"
import TableHead from "../components/content/Table/TableHead"
import TableRow from "../components/content/Table/TableRow"
import Text from "../components/content/Text"
import Container from "../components/layout/Container"
import HStack from "../components/layout/HStack"
import VStack from "../components/layout/VStack"

export default function Comparison() {
    return (
        <Container overflow="hidden" width="100vw" height="100vh">
            <VStack
                spacing="10rem"
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

                <Table fontSize="1.4rem">
                    <TableHead>
                        <TableCell />
                        <TableCell>Quick Sort</TableCell>
                        <TableCell>Radix Sort</TableCell>
                    </TableHead>
                    <TableRow>
                        <TableCell>
                            <Text weight="bold">Laufzeit</Text>
                        </TableCell>
                        <TableCell centered>O(n logn)</TableCell>
                        <TableCell centered>O(n)</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Text weight="bold">Speicherbedarf</Text>
                        </TableCell>
                        <TableCell centered>O(logn)</TableCell>
                        <TableCell centered>O(n)</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Text weight="bold">Stabil</Text>
                        </TableCell>
                        <TableCell centered>Nein</TableCell>
                        <TableCell centered>Ja</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Text weight="bold">Basiert auf</Text>
                        </TableCell>
                        <TableCell centered>Vergleichen</TableCell>
                        <TableCell centered>Annahmen über die Daten</TableCell>
                    </TableRow>
                </Table>
            </VStack>
        </Container>
    )
}

import Table from "../components/content/Table"
import TableCell from "../components/content/Table/TableCell"
import TableHead from "../components/content/Table/TableHead"
import TableRow from "../components/content/Table/TableRow"
import Text from "../components/content/Text"
import Container from "../components/layout/Container"

export default function Comparison() {
    return (
        <Container overflow="hidden" width="100vw" height="100vh">
            <Table>
                <TableHead>
                    <TableCell />
                    <TableCell>Vergleichsbasiertes Sortieren</TableCell>
                    <TableCell>Nicht vergleichsbasiertes Sortieren</TableCell>
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
                        <Text weight="bold">Stabil</Text>
                    </TableCell>
                    <TableCell centered>Ja</TableCell>
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
        </Container>
    )
}

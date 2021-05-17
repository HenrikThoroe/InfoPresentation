import Text from "../components/content/Text"
import Container from "../components/layout/Container"
import VStack from "../components/layout/VStack"

export default function Welcome() {
    return (
        <Container overflow="hidden" width="100vw" height="100vh">
            <VStack alignment="center" horizontalAlignment="center" padding="5rem">
                <Text size="xxxl" weight="heavy" alignment="center">
                    Nicht vergleichsbasierte Sortierverfahren und mögliche Anwendungen am Beispiel
                    von Radix Sort
                </Text>
            </VStack>
        </Container>
    )
}

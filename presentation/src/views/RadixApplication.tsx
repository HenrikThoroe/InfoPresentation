import Text from "../components/content/Text"
import Container from "../components/layout/Container"
import HStack from "../components/layout/HStack"
import VStack from "../components/layout/VStack"

export default function RadixApplication() {
    return (
        <Container overflow="hidden" width="100vw" height="100vh">
            <VStack alignment="center" horizontalAlignment="center" spacing="10rem">
                <Text size="xxxl" weight="bold">
                    Anwendungen
                </Text>

                <VStack spacing="2rem" alignment="center" padding="0px 20%" shrinkHeight>
                    <HStack spacing="1rem" shrinkHeight>
                        <Text size="xxl" weight="heavy">
                            -
                        </Text>
                        <Text size="xxl">Sehr viele Zahlen mit geringer Breite</Text>
                    </HStack>
                    <HStack spacing="1rem" shrinkHeight>
                        <Text size="xxl" weight="heavy">
                            -
                        </Text>
                        <Text size="xxl">Ausreichend Speicher verfügbar</Text>
                    </HStack>
                </VStack>
            </VStack>
        </Container>
    )
}

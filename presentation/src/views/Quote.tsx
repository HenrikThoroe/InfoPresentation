import Text from "../components/content/Text"
import Container from "../components/layout/Container"
import VStack from "../components/layout/VStack"

export default function Quote() {
    return (
        <Container overflow="hidden" width="100vw" height="100vh">
            <VStack alignment="center" horizontalAlignment="center" spacing="2rem">
                <Text size="xxxl" quote italic>
                    The universe doesn't allow perfection
                </Text>
                <Text>Stephen Hawking</Text>
            </VStack>
        </Container>
    )
}

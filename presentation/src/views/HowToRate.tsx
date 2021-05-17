import { useState } from "react"
import ClickListener from "../components/action/ClickListener"
import Box from "../components/content/Box"
import Popover from "../components/content/Popover"
import Text from "../components/content/Text"
import Container from "../components/layout/Container"
import HStack from "../components/layout/HStack"
import RuntimeSnippet from "./RuntimeSnippet"
import StabilitySnippet from "./StabilitySnippet"

export default function HowToRate() {
    const [showPopover, setShowPopover] = useState<"stability" | "runtime" | false>(false)

    return (
        <Container overflow="hidden" width="100vw" height="100vh">
            <HStack verticalAlignment="center" alignment="center" spacing="5rem">
                <ClickListener onClick={() => setShowPopover("runtime")}>
                    <Box>
                        <Text weight="bold" size="xxl">
                            Laufzeit
                        </Text>
                    </Box>
                </ClickListener>
                <ClickListener onClick={() => setShowPopover("stability")}>
                    <Box>
                        <Text weight="bold" size="xxl">
                            Stabilität
                        </Text>
                    </Box>
                </ClickListener>
            </HStack>

            <Popover shown={showPopover !== false} onClose={() => setShowPopover(false)}>
                {showPopover === "runtime" ? <RuntimeSnippet /> : <StabilitySnippet />}
            </Popover>
        </Container>
    )
}

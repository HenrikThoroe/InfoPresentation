import React, { useState, MouseEvent } from "react"
import Checkmark from "../components/content/Checkmark"
import Circle from "../components/content/Circle"
import Text from "../components/content/Text"
import Container from "../components/layout/Container"
import VStack from "../components/layout/VStack"

const items = [
    "Sensoren (Wetter, ...) liefern meistens 8 - 16 Bit Daten",
    "Big Data -> Es wird immer mehr gesammelt",
    "Verarbeitung erfolgt auf Server Hardware"
]

export default function EmbeededRequirements() {
    const [shownItems, setShownItems] = useState<React.ReactNode[]>([])
    const [showCheckmark, setShowCheckmark] = useState(false)

    const addItem = () => {
        if (shownItems.length === items.length) {
            return
        }

        setShownItems([
            ...shownItems,
            <Text size="l" weight="bold" alignment="center">
                {items[shownItems.length]}
            </Text>
        ])
    }

    const toggleCheck = (e: MouseEvent<SVGSVGElement, any>) => {
        if (shownItems.length !== items.length) {
            return
        }

        setShowCheckmark(!showCheckmark)
        e.preventDefault()
        e.stopPropagation()
    }

    return (
        <Container overflow="hidden" width="100vw" height="100vh">
            <VStack alignment="center" horizontalAlignment="center">
                <Circle size="70vmin">{shownItems}</Circle>
                <Checkmark show={showCheckmark} />
                <svg
                    id="Capa_1"
                    enable-background="new 0 0 512 512"
                    height="512"
                    viewBox="0 0 512 512"
                    width="512"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={addItem}
                    onDoubleClick={toggleCheck}
                    style={{ cursor: "pointer", width: 350, height: 350 }}
                >
                    <g>
                        <path d="m512 121v-30h-61v-30h-30v-61h-30v61h-30v-61h-30v61h-30v-61h-30v61h-30v-61h-30v61h-30v-61h-30v61h-30v-61h-30v61h-30v30h-61v30h61v30h-61v30h61v30h-61v30h61v30h-61v30h61v30h-61v30h61v30h-61v30h61v30h30v61h30v-61h30v61h30v-61h30v61h30v-61h30v61h30v-61h30v61h30v-61h30v61h30v-61h30v-30h61v-30h-61v-30h61v-30h-61v-30h61v-30h-61v-30h61v-30h-61v-30h61v-30h-61v-30zm-361 270h-30v-30h30zm0-90h-30v-90h30zm0-150h-30v-30h30zm60-30h90v30h-90zm90 270h-90v-30h90zm30-60h-150v-150h150zm60 60h-30v-30h30zm0-90h-30v-90h30zm0-150h-30v-30h30z" />
                        <path d="m211 211h90v90h-90z" />
                    </g>
                </svg>
            </VStack>
        </Container>
    )
}

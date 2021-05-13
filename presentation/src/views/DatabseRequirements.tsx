import React, { useState, MouseEvent } from "react"
import Circle from "../components/content/Circle"
import Cross from "../components/content/Cross"
import Text from "../components/content/Text"
import Container from "../components/layout/Container"
import VStack from "../components/layout/VStack"

const items = [
    "Daten passen nicht immer in den Arbeitsspeicher",
    "Es stehen Resourcen zur Parallelisierung bereit",
    "Geringe Latenzen erforderlich",
    "Unterschiedliche Datentypen"
]

export default function DatabaseRequirements() {
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
                <Cross show={showCheckmark} />
                <svg
                    id="_x31__x2C_5"
                    enable-background="new 0 0 24 24"
                    height="20%"
                    viewBox="0 0 24 24"
                    width="auto"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={addItem}
                    onDoubleClick={toggleCheck}
                    style={{ cursor: "pointer" }}
                >
                    <path d="m12 6c-1.228 0-12-.084-12-3s10.772-3 12-3 12 .084 12 3-10.772 3-12 3zm-10.412-3c.732.568 4.245 1.5 10.412 1.5s9.68-.932 10.412-1.5c-.732-.568-4.245-1.5-10.412-1.5s-9.68.932-10.412 1.5zm20.939.116h.01z" />
                    <path d="m12 12c-1.228 0-12-.084-12-3 0-.414.336-.75.75-.75.385 0 .702.29.745.664.462.553 4.012 1.586 10.505 1.586s10.043-1.033 10.505-1.586c.043-.374.36-.664.745-.664.414 0 .75.336.75.75 0 2.916-10.772 3-12 3zm10.5-3.001c0 .001 0 .001 0 0zm-21 0c0 .001 0 .001 0 0z" />
                    <path d="m12 18c-1.228 0-12-.084-12-3 0-.414.336-.75.75-.75.385 0 .702.29.745.664.462.553 4.012 1.586 10.505 1.586s10.043-1.033 10.505-1.586c.043-.374.36-.664.745-.664.414 0 .75.336.75.75 0 2.916-10.772 3-12 3zm10.5-3.001c0 .001 0 .001 0 0zm-21 0c0 .001 0 .001 0 0z" />
                    <path d="m12 24c-1.228 0-12-.084-12-3v-18c0-.414.336-.75.75-.75s.75.336.75.75v17.919c.481.556 4.03 1.581 10.5 1.581s10.019-1.025 10.5-1.581v-17.919c0-.414.336-.75.75-.75s.75.336.75.75v18c0 2.916-10.772 3-12 3z" />
                    <circle cx="5" cy="14" r="1" />
                    <circle cx="5" cy="8" r="1" />
                    <circle cx="5" cy="20" r="1" />
                </svg>
            </VStack>
        </Container>
    )
}

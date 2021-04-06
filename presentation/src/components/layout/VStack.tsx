import React from "react"
import ReactProps from "../../utils/ReactProps"
import Stack, { Alignment } from "./Stack"

export interface Props extends ReactProps<HTMLDivElement> {
    spacing?: string
    horizontalAlignment?: Alignment
    alignment?: Alignment
}

export default function VStack(props: Props) {
    const { spacing, horizontalAlignment, alignment: verticalAlignment, ...other } = props

    return (
        <Stack
            {...other}
            spacing={spacing || "0px"}
            mainAlignment={verticalAlignment || "start"}
            secondaryAlignment={horizontalAlignment || "stretch"}
            direction="column"
        >
            {props.children}
        </Stack>
    )
}

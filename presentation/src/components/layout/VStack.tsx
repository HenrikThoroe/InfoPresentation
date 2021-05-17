import React from "react"
import ReactProps from "../../utils/ReactProps"
import Stack, { Alignment } from "./Stack"

export interface Props extends ReactProps<HTMLDivElement> {
    spacing?: string
    horizontalAlignment?: Alignment
    alignment?: Alignment
    padding?: string
    shrinkHeight?: boolean
    shrinkWidth?: boolean
}

export default function VStack(props: Props) {
    const {
        spacing,
        horizontalAlignment,
        alignment: verticalAlignment,
        padding,
        shrinkWidth,
        shrinkHeight,
        ...other
    } = props

    return (
        <Stack
            {...other}
            spacing={spacing || "0px"}
            mainAlignment={verticalAlignment || "start"}
            secondaryAlignment={horizontalAlignment || "stretch"}
            direction="column"
            padding={padding}
            shrinkWidth={shrinkWidth}
            shrinkHeight={shrinkHeight}
        >
            {props.children}
        </Stack>
    )
}

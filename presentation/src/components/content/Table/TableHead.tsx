import React from "react"
import HeaderContext from "./HeaderContext"
import TableRow from "./TableRow"

export interface Props {
    children: React.ReactNode
}

export default function TableHead(props: Props) {
    return (
        <HeaderContext.Provider value={true}>
            <TableRow>{props.children}</TableRow>
        </HeaderContext.Provider>
    )
}

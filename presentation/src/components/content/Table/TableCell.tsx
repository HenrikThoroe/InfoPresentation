import { useContext } from "react"
import HeaderContext from "./HeaderContext"
import styles from "./index.module.css"
import csx from "classnames"
import Text from "../Text"
import React from "react"

export interface Props {
    children?: React.ReactNode
    centered?: boolean
}

export default function TableCell(props: Props) {
    const isHeader = useContext(HeaderContext)

    const content = () =>
        React.Children.map(props.children, child =>
            typeof child === "string" ? <Text>{child}</Text> : child
        )

    if (isHeader) {
        return (
            <th
                className={csx(styles.tableCell, styles.tableHeaderCell, {
                    [styles.centered]: props.centered
                })}
            >
                {content()}
            </th>
        )
    }

    return (
        <td className={csx(styles.tableCell, { [styles.centered]: props.centered })}>
            {content()}
        </td>
    )
}

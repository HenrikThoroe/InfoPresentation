import { useContext } from "react"
import HeaderContext from "./HeaderContext"
import styles from "./index.module.css"
import csx from "classnames"

export interface Props {
    children?: React.ReactNode
    centered?: boolean
}

export default function TableCell(props: Props) {
    const isHeader = useContext(HeaderContext)

    if (isHeader) {
        return (
            <th
                className={csx(styles.tableCell, styles.tableHeaderCell, {
                    [styles.centered]: props.centered
                })}
            >
                {props.children}
            </th>
        )
    }

    return (
        <td className={csx(styles.tableCell, { [styles.centered]: props.centered })}>
            {props.children}
        </td>
    )
}

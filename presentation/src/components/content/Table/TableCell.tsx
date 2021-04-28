import { useContext } from "react"
import HeaderContext from "./HeaderContext"
import styles from "./index.module.css"
import csx from "classnames"

export interface Props {
    children?: React.ReactNode
}

export default function TableCell(props: Props) {
    const isHeader = useContext(HeaderContext)

    if (isHeader) {
        return <th className={csx(styles.tableCell, styles.tableHeaderCell)}>{props.children}</th>
    }

    return <td className={styles.tableCell}>{props.children}</td>
}

import { useContext } from "react"
import HeaderContext from "./HeaderContext"
import styles from "./index.module.css"
import csx from "classnames"

export interface Props {
    children: React.ReactNode
}

export default function TableRow(props: Props) {
    const isHeader = useContext(HeaderContext)

    return (
        <tr className={csx(styles.tableRow, { [styles.tableHeader]: isHeader })}>
            {props.children}
        </tr>
    )
}

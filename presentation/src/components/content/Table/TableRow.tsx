import { useContext, useState, MouseEvent } from "react"
import HeaderContext from "./HeaderContext"
import styles from "./index.module.css"
import csx from "classnames"

export interface Props {
    children: React.ReactNode
}

export default function TableRow(props: Props) {
    const isHeader = useContext(HeaderContext)
    const [isHighlighted, setIsHighlighted] = useState(false)

    const trigger = (e: MouseEvent<HTMLTableRowElement, any>) => {
        if (e.altKey) {
            e.preventDefault()
            e.stopPropagation()
            setIsHighlighted(!isHighlighted)
        }
    }

    return (
        <tr
            className={csx(styles.tableRow, {
                [styles.tableHeader]: isHeader,
                [styles.highlightedRow]: isHighlighted
            })}
            onClick={trigger}
        >
            {props.children}
        </tr>
    )
}

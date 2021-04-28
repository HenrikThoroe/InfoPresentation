import csx from "classnames"
import styles from "./Box.module.css"

export interface Props {
    children?: React.ReactNode
    radius?: number
    shadow?: "none" | 1 | 2 | 3 | 4 | 5
}

export default function Box(props: Props) {
    return (
        <div
            className={csx(styles.box, styles[`shadow-${props.shadow ?? 1}`])}
            style={{ borderRadius: props.radius ?? 4 }}
        >
            {props.children}
        </div>
    )
}

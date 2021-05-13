import styles from "./layout.module.css"

export interface Props {
    width?: number | string
    height?: number | string
    children?: React.ReactNode
    overflow?: "hidden" | "scroll"
}

export default function Container(props: Props) {
    const { children, width: w, height: h, overflow } = props
    let width, height: string

    if (w === undefined) {
        width = "100%"
    } else if (typeof w === "number") {
        width = `${w}px`
    } else {
        width = w
    }

    if (h === undefined) {
        height = "100%"
    } else if (typeof h === "number") {
        height = `${h}px`
    } else {
        height = h
    }

    return (
        <div
            className={styles.container}
            style={{ width: width, height: height, overflow: overflow }}
        >
            {children}
        </div>
    )
}

import styles from "./index.module.css"

export interface Props {
    children?: React.ReactNode
    fontSize?: string
    customStyle?: React.CSSProperties
}

export default function Table(props: Props) {
    return (
        <table className={styles.table} style={{ ...props.customStyle, fontSize: props.fontSize }}>
            {props.children}
        </table>
    )
}

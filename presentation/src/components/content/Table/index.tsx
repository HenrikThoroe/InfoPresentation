import styles from "./index.module.css"

export interface Props {
    children?: React.ReactNode
    fontSize?: string
}

export default function Table(props: Props) {
    return (
        <table className={styles.table} style={{ fontSize: props.fontSize }}>
            {props.children}
        </table>
    )
}

import styles from "./index.module.css"

export interface Props {
    children?: React.ReactNode
}

export default function Table(props: Props) {
    return <table className={styles.table}>{props.children}</table>
}

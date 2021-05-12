import styles from "./Cross.module.css"

export interface Props {
    show?: boolean
}

export default function Cross(props: Props) {
    return (
        <div className={styles.container} style={{ visibility: props.show ? "visible" : "hidden" }}>
            <span className={styles.main} />
            <span className={styles.sec} />
        </div>
    )
}

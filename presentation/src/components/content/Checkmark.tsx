import styles from "./Checkmark.module.css"

export interface Props {
    show?: boolean
}

export default function Checkmark(props: Props) {
    return (
        <div className={styles.container} style={{ visibility: props.show ? "visible" : "hidden" }}>
            <span className={styles.main} />
            <span className={styles.sec} />
        </div>
    )
}

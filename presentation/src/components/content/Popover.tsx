import React from "react"
import OutsideClickListener from "../action/OutsideClickListener"
import Box from "./Box"
import styles from "./Popover.module.css"

export interface Props {
    children?: React.ReactNode
    onClose?: () => void
    shown?: boolean
}

export default function Popover(props: Props) {
    return (
        <div
            className={styles["popover-container"]}
            style={{ visibility: props.shown ? "visible" : "hidden" }}
        >
            <div className={styles["popover-bg"]} />
            <div className={styles["popover-fg"]}>
                <OutsideClickListener onClick={props.onClose ?? (() => {})}>
                    <Box shadow={3}>{props.children}</Box>
                </OutsideClickListener>
            </div>
        </div>
    )
}

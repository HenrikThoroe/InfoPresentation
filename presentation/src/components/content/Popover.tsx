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
        <>
            {props.shown && (
                <div className={styles["popover-container"]}>
                    <div className={styles["popover-bg"]} />
                    <div className={styles["popover-fg"]}>
                        <OutsideClickListener onClick={props.onClose ?? (() => {})}>
                            <Box shadow={3}>{props.children}</Box>
                        </OutsideClickListener>
                    </div>
                </div>
            )}
        </>
    )
}

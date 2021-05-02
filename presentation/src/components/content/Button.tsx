import React, { useState } from "react"
import styles from "./Button.module.css"
import csx from "classnames"

export interface Props {
    children?: React.ReactNode
    onClick?: () => void
}

export default function Button(props: Props) {
    const [clicked, setClicked] = useState(false)

    return (
        <button
            className={csx(styles.button, { [styles.clicked]: clicked })}
            onClick={props.onClick}
            onMouseDown={() => setClicked(true)}
            onMouseUp={() => setClicked(false)}
            onMouseLeave={() => setClicked(false)}
        >
            {props.children}
        </button>
    )
}

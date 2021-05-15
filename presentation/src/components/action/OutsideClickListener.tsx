import React, { useCallback, useEffect, useRef } from "react"

export interface Props {
    children: React.ReactNode
    onClick: () => void
}

export default function OutsideClickListener(props: Props) {
    const ref = useRef<HTMLSpanElement>(null)

    const handleClick = useCallback(
        (event: MouseEvent) => {
            if (ref.current && event.target && !ref.current.contains(event.target as Node)) {
                event.preventDefault()
                props.onClick()
            }
        },
        [props]
    )

    useEffect(() => {
        window.addEventListener("mousedown", handleClick)
        return () => window.removeEventListener("mousedown", handleClick)
    }, [handleClick])

    return <span ref={ref}>{props.children}</span>
}

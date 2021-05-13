import React, { useEffect, useRef } from "react"

export interface Props {
    children: React.ReactNode
    onClick: () => void
}

export default function OutsideClickListener(props: Props) {
    const ref = useRef<HTMLSpanElement>(null)

    const handleClick = (event: MouseEvent) => {
        if (ref.current && event.target && !ref.current.contains(event.target as Node)) {
            event.preventDefault()
            props.onClick()
        }
    }

    useEffect(() => {
        window.addEventListener("mousedown", handleClick)
        return () => window.removeEventListener("mousedown", handleClick)
    }, [])

    return <span ref={ref}>{props.children}</span>
}

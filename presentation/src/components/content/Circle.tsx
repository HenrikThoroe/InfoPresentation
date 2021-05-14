import React, { useEffect, useRef } from "react"
import styles from "./Circle.module.css"

export interface Props {
    children?: React.ReactNode[]
    size: string
}

export default function Circle(props: Props) {
    const childCount = React.Children.count(props.children)
    const circleRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!props.children || !circleRef.current) {
            return
        }

        const rect = circleRef.current.getBoundingClientRect()
        const radius = Math.min(rect.width, rect.height) / 2

        for (const [index] of props.children.entries()) {
            const angle = (Math.PI * 2 * index) / childCount + Math.PI
            const rect = document
                .querySelector<HTMLDivElement>(`#cc-${index}`)!
                .getBoundingClientRect()
            const x = radius * Math.sin(angle) + radius - rect.width / 2
            const y = radius * Math.cos(angle) + radius - rect.height / 2

            document.querySelector<HTMLDivElement>(`#cc-${index}`)!.style.left = `${x}px`
            document.querySelector<HTMLDivElement>(`#cc-${index}`)!.style.top = `${y}px`
            document.querySelector<HTMLDivElement>(`#cc-${index}`)!.style.opacity = "1"
        }
    })

    return (
        <div
            ref={circleRef}
            className={styles.circle}
            style={{ width: props.size, height: props.size }}
        >
            {props.children?.map((child, index) => (
                <div className={styles.circleChild} id={`cc-${index}`} style={{ opacity: 0 }}>
                    {child}
                </div>
            ))}
        </div>
    )
}

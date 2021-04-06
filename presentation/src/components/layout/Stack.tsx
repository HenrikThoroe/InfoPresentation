import React, { useEffect, ReactNode } from "react"
import ReactProps from "../../utils/ReactProps"
import classNames from "classnames"
import "./stack.css"

export type Alignment = "start" | "end" | "spaceAround" | "spaceBetween" | "center" | "stretch"

export interface Props extends ReactProps<HTMLDivElement> {
    spacing: string
    mainAlignment: Alignment
    secondaryAlignment: Alignment
    direction: "row" | "column"
}

export default function Stack(props: Props) {
    const {
        direction,
        spacing,
        mainAlignment: verticalAlignment,
        secondaryAlignment: horizontalAlignment,
        className,
        children,
        style,
        ...other
    } = props
    const customStyle: React.CSSProperties = {
        ...style,
        ["--spacing" as any]: spacing
    }
    let customChildren: ReactNode[] = []

    if (children instanceof Array) {
        const cleaned = children.filter(c => c !== undefined && c !== null)

        for (let i = 0; i < cleaned.length; ++i) {
            if (i > 0) {
                customChildren.push(
                    <div className="spacer" style={{ ["--spacing" as any]: spacing }} />,
                    cleaned[i]
                )
            } else {
                customChildren.push(cleaned[i])
            }
        }
    } else {
        customChildren = [children]
    }

    return (
        <div
            style={style}
            className={classNames(
                "stack",
                `ma-${props.mainAlignment}`,
                `sa-${props.secondaryAlignment}`,
                direction,
                className
            )}
            {...other}
        >
            {customChildren}
        </div>
    )
}

import { ReactNode } from "react"
import ReactProps from "../../utils/ReactProps"
import classNames from "classnames"
import "./stack.css"

export type Alignment = "start" | "end" | "spaceAround" | "spaceBetween" | "center" | "stretch"

export interface Props extends ReactProps<HTMLDivElement> {
    spacing: string
    mainAlignment: Alignment
    secondaryAlignment: Alignment
    direction: "row" | "column"
    padding?: string
    shrinkHeight?: boolean
    shrinkWidth?: boolean
}

export default function Stack(props: Props) {
    let {
        direction,
        spacing,
        mainAlignment: verticalAlignment,
        secondaryAlignment: horizontalAlignment,
        className,
        children,
        style,
        padding,
        shrinkHeight,
        shrinkWidth,
        ...other
    } = props

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

    if (padding) {
        style = { ...style, padding: padding }
    }

    if (shrinkHeight) {
        style = { ...style, height: "max-content" }
    }

    if (shrinkWidth) {
        style = { ...style, width: "max-content" }
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

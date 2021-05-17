export interface Props {
    children: string
    quote?: boolean
    weight?: "bold" | "light" | "normal" | "heavy"
    italic?: boolean
    size?: "xs" | "s" | "m" | "l" | "xl" | "xxl" | "xxxl" | number
    alignment?: "left" | "center" | "right"
    fixedWidth?: string
}

export default function Text(props: Props) {
    let size: string
    let weight: number

    switch (props.weight) {
        case "bold":
            weight = 700
            break
        case "light":
            weight = 100
            break
        case "heavy":
            weight = 900
            break
        default:
            weight = 400
            break
    }

    switch (props.size) {
        case "xs":
            size = ".5rem"
            break
        case "s":
            size = ".8rem"
            break
        case "m":
            size = "1rem"
            break
        case "l":
            size = "1.5rem"
            break
        case "xl":
            size = "2rem"
            break
        case "xxl":
            size = "3rem"
            break
        case "xxxl":
            size = "5rem"
            break
        default:
            size = `${props.size}rem`
            break
    }

    return (
        <span
            style={{
                fontSize: size,
                fontWeight: weight,
                textAlign: props.alignment,
                fontStyle: props.italic ? "italic" : "normal",
                width: props.fixedWidth,
                display: "inline-block"
            }}
        >
            {props.quote ? `"${props.children}"` : props.children}
        </span>
    )
}

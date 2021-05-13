export interface Props {
    children: React.ReactNode
    onClick: React.MouseEventHandler<HTMLSpanElement>
}

export default function ClickListener(props: Props) {
    return (
        <span style={{ cursor: "pointer" }} onClick={props.onClick}>
            {props.children}
        </span>
    )
}

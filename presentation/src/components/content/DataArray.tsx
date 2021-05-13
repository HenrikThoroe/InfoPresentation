import Text from "./Text"
import csx from "classnames"
import styles from "./DataArray.module.css"

export interface Props {
    numbers: number[]
    highlighted?: [number, number]
    active?: number
    shrink?: boolean
}

export default function DataArray(props: Props) {
    const isInRange = (index: number) => {
        if (props.highlighted) {
            return index >= props.highlighted[0] && index < props.highlighted[1]
        }

        return false
    }

    const createItems = () => {
        return props.numbers.map((value, index) => {
            return (
                <li
                    key={index}
                    className={csx({
                        [styles.active]: index === props.active,
                        [styles.highlighted]: isInRange(index),
                        [styles.shrink]: props.shrink,
                        [styles.first]: props.highlighted && props.highlighted[0] === index,
                        [styles.last]: props.highlighted && props.highlighted[1] - 1 === index
                    })}
                >
                    <Text weight="bold" size="l">
                        {value.toFixed(0)}
                    </Text>
                </li>
            )
        })
    }

    return <ul className={styles.dataArray}>{createItems()}</ul>
}

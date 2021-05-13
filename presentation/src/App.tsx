import { useEffect, useState } from "react"
import Benchmarks from "./views/Benchmarks"
import Comparison from "./views/Comparison"
import DatabaseRequirements from "./views/DatabseRequirements"
import EmbeededRequirements from "./views/EmbeededRequirements"
import HowToRate from "./views/HowToRate"
import Quote from "./views/Quote"
import RadixApplication from "./views/RadixApplication"
import RadixSort from "./views/RadixSort"
import Search from "./views/Search"
import Welcome from "./views/Welcome"
import WhySorting from "./views/WhySorting"

type View =
    | "why"
    | "search"
    | "how"
    | "radix"
    | "comp"
    | "bench"
    | "dbreq"
    | "quote"
    | "application"
    | "ebreq"
    | "welcome"

const order: View[] = [
    "welcome",
    "why",
    "search",
    "how",
    "radix",
    "comp",
    "bench",
    "ebreq",
    "dbreq",
    "quote"
]

function App() {
    const [view, setView] = useState<View>("welcome")

    const parseView = () => {
        switch (view) {
            case "welcome":
                return <Welcome />
            case "why":
                return <WhySorting />
            case "search":
                return <Search />
            case "how":
                return <HowToRate />
            case "radix":
                return <RadixSort />
            case "comp":
                return <Comparison />
            case "bench":
                return <Benchmarks />
            case "ebreq":
                return <EmbeededRequirements />
            case "dbreq":
                return <DatabaseRequirements />
            case "quote":
                return <Quote />
            case "application":
                return <RadixApplication />

            default:
                return <h1>Cannot Parse View</h1>
        }
    }

    const next = () => {
        const index = order.findIndex(value => value === view)

        if (index < order.length - 1) {
            setView(order[index + 1])
        }
    }

    const prev = () => {
        const index = order.findIndex(value => value === view)

        if (index > 0) {
            setView(order[index - 1])
        }
    }

    const handleKeyEvent = (e: KeyboardEvent) => {
        if (e.code === "ArrowRight") {
            next()
        } else if (e.code === "ArrowLeft") {
            prev()
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", handleKeyEvent)
        return () => {
            document.removeEventListener("keydown", handleKeyEvent)
        }
    }, [view])

    return parseView()
}

export default App

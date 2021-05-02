import insertionsort from "./sorting/insertionsort"

export interface NameData {
    name: string
    firstName: string
}

export default function createNameDataset(sorted?: "stable" | "instable"): NameData[] {
    const data = [
        {
            name: "Adams",
            firstName: "Britta"
        },
        {
            name: "Baker",
            firstName: "Ellis"
        },
        {
            name: "Clark",
            firstName: "Aron"
        },
        {
            name: "Davis",
            firstName: "Aron"
        },
        {
            name: "Evans",
            firstName: "Nancy"
        },
        {
            name: "Frank",
            firstName: "Marlen"
        }
    ]

    if (sorted === "stable") {
        return data.sort((a, b) => a.firstName.localeCompare(b.firstName))
    } else if (sorted === "instable") {
        return insertionsort(data, (a, b) => a.firstName.localeCompare(b.firstName) <= 0)
    }

    return data
}

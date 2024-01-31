import { HTMLInputTypeAttribute } from "react"

type InputProps = {
    id: string
    name: string
    label: string
    placeholder?: string
    type?: HTMLInputTypeAttribute
    size?: "sm" | "md" | "lg"
    className?: string
    required?: boolean
    rounded?: string
}

export default function Input(props: InputProps) {
    let className = "hover:outline-2 focus:outline-2 outline-1 outline outline-primary bg-white"

    switch (props.size ?? "md") {
        case "sm":
            className = className.concat(" p-0")
            break
        case "lg":
            className = className.concat(" p-2")
            break
        case "md":
        default:
            className = className.concat(" p-1")
            break
    }

    if (props.rounded) className = className.concat(" " + props.rounded)
    else className = className.concat(" rounded")

    return (
        <div className="flex flex-col w-full">
            <label htmlFor={props.id}>{props.label}</label>
            <input
                id={props.id}
                name={props.name}
                placeholder={props.placeholder}
                type={props.type ?? "text"}
                className={className}
                required={props.required}
            />
        </div>
    )
}

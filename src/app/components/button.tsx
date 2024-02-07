import Link from "next/link"
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react"

type VariantType = "standard" | "secondary" | undefined

// TODO: Aceitar Link (olhar docs de MUI)

interface ButtonPropType extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: VariantType
    link?: never
    href?: never
}

interface LinkPropType extends AnchorHTMLAttributes<HTMLAnchorElement> {
    variant?: VariantType
    link: boolean
    href: string
    disabled?: never
    type?: never
}

type PropType = ButtonPropType | LinkPropType

const getClassName = (variant: VariantType) => {
    switch (variant) {
        case "secondary":
            return "rounded p-1 text-primary text-center font-semibold uppercase w-full transition-all duration-300 hover:bg-primary-fade"

        case "standard":
        default:
            return "rounded p-1 bg-primary text-white uppercase w-full"
    }
}

export default function Button(props: PropType) {
    if (props.link) {
        return (
            <Link href={props.href} className={getClassName(props.variant)}>
                {props.children}
            </Link>
        )
    }

    return (
        <button type={props.type} className={getClassName(props.variant)} disabled={props.disabled}>
            {props.children}
        </button>
    )
}

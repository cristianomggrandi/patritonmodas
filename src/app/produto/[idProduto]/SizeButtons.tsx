"use client"

import { changeSearchParamsWithoutRerender } from "@/utils/router-utils"
import { useState } from "react"

export default function SizeButtons(props: { sizes: string[]; defaultSize: string }) {
    const [selectedSize, setSelectedSize] = useState(props.defaultSize)

    const handleChange = (e: any) => {
        //TODO: Corrigir any
        const newSize = e.target.value
        setSelectedSize(newSize)

        const newSearch = new URLSearchParams(window.location.search)
        newSearch.set("tamanho", newSize)
        changeSearchParamsWithoutRerender(newSearch)
    }

    return (
        <div>
            <p className="my-1">Selecione o tamanho:</p>
            <ul className="flex gap-2">
                {props.sizes.map(size => (
                    <li key={size}>
                        <input
                            id={"size-" + size}
                            value={size}
                            type="radio"
                            className="hidden"
                            checked={size === selectedSize}
                            onChange={handleChange}
                            required
                        />
                        <label
                            htmlFor={"size-" + size}
                            className="h-8 w-8 bg-contrast font-semibold block rounded-md text-center leading-loose text-primary outline-1 outline-primary outline uppercase"
                            style={{
                                outlineWidth: size === selectedSize ? "2px" : "",
                                outlineOffset: size === selectedSize ? "1px" : "",
                            }}
                        >
                            {size}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    )
}

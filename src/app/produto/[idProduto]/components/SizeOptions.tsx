"use client"

import { changeSearchParamsWithoutRerender } from "@/utils/router-utils"
import { useState } from "react"

export default function SizeOptions(props: { sizes: string[]; defaultSize: string }) {
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
            <ul className="flex gap-2 items-center">
                {props.sizes.map(size => (
                    <li key={size}>
                        <input
                            id={"size-" + size}
                            value={size}
                            type="radio"
                            className="peer hidden"
                            checked={size === selectedSize}
                            onChange={handleChange}
                            required
                        />
                        <label
                            htmlFor={"size-" + size}
                            className="h-8 w-8 peer-checked:h-9 peer-checked:w-9 peer-checked:border-2 border-[1px] border-primary bg-contrast font-semibold block rounded-md text-center leading-loose text-primary uppercase"
                        >
                            {size}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    )
}

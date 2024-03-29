"use client"

import { changeSearchParamsWithoutRerender } from "@/utils/router-utils"
import { useState } from "react"

export default function ColorOptions(props: { colors: string[]; defaultColor: string }) {
    const [selectedColor, setSelectedColor] = useState(props.defaultColor)

    const handleChange = (e: any) => {
        //TODO: Corrigir any
        const newColor = e.target.value
        setSelectedColor(newColor)

        const newSearch = new URLSearchParams(window.location.search)
        newSearch.set("cor", newColor)
        changeSearchParamsWithoutRerender(newSearch)
    }

    return (
        <div>
            <p className="my-1">Selecione a cor:</p>
            <ul className="flex gap-2 items-center">
                {props.colors.map(color => (
                    <li key={color}>
                        <input
                            id={"color-" + color}
                            value={color}
                            type="radio"
                            className="peer hidden"
                            checked={color === selectedColor}
                            onChange={handleChange}
                            required
                        />
                        <label
                            htmlFor={"color-" + color}
                            className="h-8 w-8 peer-checked:h-9 peer-checked:w-9 peer-checked:border-2 border-[1px] block rounded-md border-primary"
                            style={{
                                backgroundColor: "#" + color,
                            }}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

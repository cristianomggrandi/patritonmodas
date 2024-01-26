"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { useState } from "react"

export default function () {
    const searchParams = useSearchParams()
    const router = useRouter()

    const colors = ["fff", "000", "ff0", "f00", "f0f", "0ff"]

    const [selectedColor, setSelectedColor] = useState(
        colors.find(c => c === searchParams.get("color")) || colors[0]
    )

    const handleClick = (e: any) => {
        //TODO: Corrigir any
        const newColor = e.target.dataset.color
        setSelectedColor(newColor)
        router.replace(`?color=${newColor}&size=${searchParams.get("size")}`)
    }

    return (
        <div className="">
            <p className="my-1">Selecione a cor:</p>
            <ul className="flex gap-1">
                {colors.map(color => (
                    <li key={color}>
                        <button
                            onClick={handleClick}
                            data-color={color}
                            className={`h-8 w-8 rounded-md border-2 border-solid ${selectedColor === color ? "border-neutral-500" : "border-neutral-300"}`}
                            style={{ backgroundColor: "#" + color }}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

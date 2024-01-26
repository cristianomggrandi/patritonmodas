"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { useState } from "react"

export default function () {
    const searchParams = useSearchParams()
    const router = useRouter()

    const sizes = ["p", "m", "g", "gg", "g1", "g2", "g3"]

    const [selectedSize, setSelectedSize] = useState(
        sizes.find(c => c === searchParams.get("size")) || sizes[0]
    )

    const handleClick = (e: any) => {
        //TODO: Corrigir any
        const newSize = e.target.textContent
        setSelectedSize(newSize)
        router.replace(`?color=${searchParams.get("color")}&size=${newSize}`)
    }

    return (
        <div className="">
            <p className="my-1">Selecione o tamanho:</p>
            <ul className="flex gap-1">
                {sizes.map(size => (
                    <li key={size}>
                        <button
                            onClick={handleClick}
                            className={`h-8 w-12 rounded-full text-center uppercase leading-relaxed border-2 border-solid ${selectedSize === size ? "border-neutral-500" : "border-neutral-300"} ${selectedSize === size ? "bg-contrast" : ""}`}
                        >
                            {size}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

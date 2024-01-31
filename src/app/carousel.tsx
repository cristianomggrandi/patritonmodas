"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export default function Carousel() {
    const [imageIndex, setImageIndex] = useState(0)

    const imageArray = ["/carousel/lancamento.png", "/carousel/modafeminina.png", "/carousel/primaveraverao.png"]

    useEffect(() => {
        const imageChangeInterval = setInterval(() => {
            setImageIndex(i => (i + 1) % imageArray.length)
        }, 5000)

        return () => clearInterval(imageChangeInterval)
    })

    // TODO: Conferir se precisa
    const proportions = {
        x: 1920,
        y: 600,
    }

    return (
        <div className="w-full overflow-hidden">
            <div className="w-full h-full">
                {imageArray.map((imageSrc, index) => (
                    <div
                        key={index}
                        className="w-full absolute flex justify-center transition-opacity duration-700"
                        style={{
                            opacity: imageIndex === index ? 100 : 0,
                        }}
                    >
                        <Image
                            width={proportions.x}
                            height={proportions.y}
                            src={imageSrc}
                            alt="Slide de exemplo"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

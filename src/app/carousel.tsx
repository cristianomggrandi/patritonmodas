"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export default function Carousel() {
    const [imageIndex, setImageIndex] = useState(0)

    const imageArray = ["/slideexemplo.jpg", "/slideexemplo2.jpg"]

    useEffect(() => {
        const imageChangeInterval = setInterval(() => {
            setImageIndex(i => (i + 1) % imageArray.length)
        }, 5000)

        return () => clearInterval(imageChangeInterval)
    })

    return (
        <div className="w-[672px] h-[378px] overflow-hidden">
            <div className="w-full h-full">
                {imageArray.map((imageSrc, index) => (
                    <div
                        key={index}
                        className="absolute transition-opacity duration-700"
                        style={{
                            opacity: imageIndex === index ? 100 : 0,
                        }}
                    >
                        <Image width={672} height={378} src={imageSrc} alt="Slide de exemplo" />
                    </div>
                ))}
            </div>
        </div>
    )
}

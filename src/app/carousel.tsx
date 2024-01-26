"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export default function Carousel() {
    const [imageIndex, setImageIndex] = useState(0)

    const imageArray = ["/slide.jpeg", "/slideexemplo.jpg", "/slideexemplo2.jpg"]

    useEffect(() => {
        const imageChangeInterval = setInterval(() => {
            setImageIndex(i => (i + 1) % imageArray.length)
        }, 5000)

        return () => clearInterval(imageChangeInterval)
    })

    const proportions = {
        x: 939,
        y: 372,
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

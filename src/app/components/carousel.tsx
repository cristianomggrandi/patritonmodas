"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Carousel() {
    const [imageIndex, setImageIndex] = useState(0)

    const imageArray = [
        { src: "/carousel/lancamento.png", link: "/lancamento" },
        { src: "/carousel/modafeminina.png", link: "/modafeminina" },
        { src: "/carousel/primaveraverao.png", link: "/primaveraverao" },
    ]

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
            <Link href={imageArray[imageIndex].link}>
                <div className="w-full h-full">
                    {imageArray.map((image, index) => (
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
                                src={image.src}
                                alt="Slide de exemplo"
                            />
                        </div>
                    ))}
                </div>
            </Link>
        </div>
    )
}

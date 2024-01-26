import Image from "next/image"
import Carousel from "./carousel"

export default function Home() {
    return (
        <main
            className="flex min-h-screen flex-col items-center justify-between bg-white text-black"
            // TODO: Ver se bg-beige é melhor
        >
            <Carousel />
        </main>
    )
}

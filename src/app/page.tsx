import Image from "next/image"
import Carousel from "./components/carousel"

export default function Home() {
    return (
        <main className="flex-1 flex flex-col items-center justify-between bg-white text-black">
            <Carousel />
        </main>
    )
}

import Carousel from "./components/carousel"
import CartDetails from "./components/cart-details"

export default function Home() {
    return (
        <main className="flex-1 relative flex flex-col items-center justify-between bg-white text-black overflow-hidden">
            <Carousel />
        </main>
    )
}

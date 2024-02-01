"use client"

import useCartContext from "../contexts/CartContext"

export default function CartDetails() {
    const { openCart } = useCartContext()

    return (
        <div
            className="h-[82vh] mt-[18vh] absolute flex-1 right-0 translate-x-full h-full w-1/3 absolute transition duration-300"
            style={{
                transform: openCart ? "translateX(0%)" : "",
            }}
        >
            <div className="bg-primary w-full h-full"></div>
        </div>
    )
}

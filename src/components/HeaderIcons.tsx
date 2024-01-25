"use client"

import useCartContext from "@/app/contexts/CartContext"
import { IoPersonCircleOutline } from "react-icons/io5"
import { TiShoppingCart } from "react-icons/ti"

export default function HeaderIcons() {
    const { cart } = useCartContext()

    return (
        <>
            <IoPersonCircleOutline className="text-5xl" />
            <button className="relative">
                <TiShoppingCart className="text-5xl" />
                <div className="cart-icon-number absolute w-1/2 h-1/2 -bottom-1 -right-4 bg-white leading-normal font-semibold text-black text-center rounded-full">
                    {cart.length}
                </div>
            </button>
        </>
    )
}

"use client"

import useCartContext from "@/app/contexts/CartContext"
import { TiShoppingCart } from "react-icons/ti"

export default function CartIcon() {
    const { cart, setOpenCart } = useCartContext()

    const handleClick = () => setOpenCart(prev => !prev)

    return (
        <button className="relative" onClick={handleClick}>
            <TiShoppingCart className="text-4xl" />
            {cart.length ? (
                <div className="absolute w-1/2 h-1/2 -bottom-1 -right-4 bg-white leading-tight text-primary text-center font-semibold rounded-full outline">
                    {cart.length}
                </div>
            ) : null}
        </button>
    )
}

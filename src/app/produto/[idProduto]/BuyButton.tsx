"use client"

import useCartContext from "@/app/contexts/CartContext"
import { CartItemType } from "@/types/CartItem"

export default function BuyButton({ product }: { product: CartItemType }) {
    const { addToCart } = useCartContext()

    const handleClick = () => addToCart(product)

    return (
        <button
            onClick={handleClick}
            className="bg-primary text-white border-2 border-solid border-neutral-900 rounded-xl uppercase py-3 px-8"
        >
            Comprar
        </button>
    )
}

"use client"

import { TiShoppingCart } from "react-icons/ti"
import useCartContext from "../contexts/CartContext"

export default function CartIcon() {
    const { cart } = useCartContext()

    return (
        <label
            htmlFor="open-cart-checkbox"
            data-cart-length={cart.length}
            data-visibility-teste={cart.length ? "1.25rem" : "0rem"}
            className="relative cart-icon cursor-pointer h-full block"
        >
            <TiShoppingCart className="text-4xl h-full" />
        </label>
    )
}

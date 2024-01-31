"use client"

import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useEffect,
    useState,
} from "react"
import { ProductType } from "@/types/Product"

type CartContextType = {
    cart: ProductType[]
    setCart: Dispatch<SetStateAction<ProductType[]>>
    addToCart: (product: ProductType) => void
} | null

const CartContext = createContext<CartContextType>(null)

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<ProductType[]>(
        []
        // JSON.parse(localStorage.getItem("cart") ?? "[]")
    )

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    const addToCart = (product: ProductType) => {
        setCart(prev => [...prev, product])
    }

    console.log("context", cart)

    return (
        <CartContext.Provider value={{ cart, setCart, addToCart }}>{children}</CartContext.Provider>
    )
}

export default function useCartContext() {
    const context = useContext(CartContext)

    if (!context) {
        throw new Error("Uso de contexto fora de Context Provider")
    }

    return context
}

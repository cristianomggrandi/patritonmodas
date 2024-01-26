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
import { CartItemType } from "@/types/CartItem"

type CartContextType = {
    cart: CartItemType[]
    setCart: Dispatch<SetStateAction<CartItemType[]>>
    addToCart: (product: CartItemType) => void
} | null

const CartContext = createContext<CartContextType>(null)

export const CarrinhoContextProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItemType[]>(
        []
        // JSON.parse(localStorage.getItem("cart") ?? "[]")
    )

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    const addToCart = (product: CartItemType) => {
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

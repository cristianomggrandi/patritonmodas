"use client"

import { ProductType } from "@/types/Product"
import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useEffect,
    useState,
} from "react"

type CartContextType = {
    cart: ProductType[]
    setCart: Dispatch<SetStateAction<ProductType[]>>
    addToCart: (product: ProductType) => void
    openCart: boolean
    setOpenCart: Dispatch<SetStateAction<boolean>>
} | null

const CartContext = createContext<CartContextType>(null)

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<ProductType[]>(
        typeof window !== "undefined" ? JSON.parse(localStorage?.getItem("cart") ?? "[]") : []
    )
    const [openCart, setOpenCart] = useState(false)

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    const addToCart = (product: ProductType) => {
        setCart(prev => [...prev, product])
    }

    return (
        <CartContext.Provider value={{ cart, setCart, addToCart, openCart, setOpenCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default function useCartContext() {
    const context = useContext(CartContext)

    if (!context) {
        throw new Error("Uso de contexto fora de Context Provider")
    }

    return context
}

import { ProductType } from "@/types/Product"
import { create } from "zustand"

type CartStore = {
    cart: ProductType[]
    // setCart: Dispatch<SetStateAction<ProductType[]>>
    addToCart: (product: ProductType) => void
    openCart: boolean
    setOpenCart: (open: boolean) => void
}

export const useCartStore = create<CartStore>()(set => ({
    cart: [] as ProductType[],
    addToCart: (product: ProductType) =>
        set(state => ({
            cart: [...state.cart, product],
        })),

    openCart: false,
    setOpenCart: (open: boolean) =>
        set(state => ({
            openCart: open,
        })),
}))

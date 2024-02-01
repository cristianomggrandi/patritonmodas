"use server"

import { revalidatePath } from "next/cache"
import { useCartStore } from "../store/cart-store"
import z from "zod"

const schema = z.object({
    name: z.string(),
    id: z.number(),
    price: z.number(),
    quantity: z.number(),
})

export default async function addProductAction(formData: FormData) {
    try {
        const addToCart = useCartStore.getState().addToCart

        const name = formData.get("name")?.toString()
        const id = Number(formData.get("id")?.toString())
        const color = formData.get("color-picker")?.toString()
        const size = formData.get("size-picker")?.toString()
        const price = Number(formData.get("price")?.toString())

        const product = {
            name,
            id,
            price,
            quantity: 1,
            // color,
            // size,
        }

        const parsedProduct = schema.parse(product)

        addToCart(parsedProduct)

        revalidatePath("/")
    } catch (error) {
        console.error(error)
    }
}

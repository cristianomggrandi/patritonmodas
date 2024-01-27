"use client"

import useCartContext from "@/app/contexts/CartContext"
import { useState } from "react"
import { IoPersonCircleOutline } from "react-icons/io5"
import { TiShoppingCart } from "react-icons/ti"

export default function HeaderIcons() {
    const { cart } = useCartContext()

    const [openLogin, setOpenLogin] = useState(false)
    const handleOpenLogin = () => setOpenLogin(prev => !prev)

    return (
        <>
            <div className="relative w-9 h-9">
                <button onClick={handleOpenLogin}>
                    <IoPersonCircleOutline className="text-4xl" />
                </button>
                <div
                    className="absolute bg-white transition-all duration-700 motion-reduce:transition-none border-2 border-primary rounded-xl rounded-tr-none w-80 z-50 right-0 overflow-hidden"
                    style={
                        openLogin
                            ? {
                                  maxHeight: "100rem",
                              }
                            : {
                                  borderColor: "white",
                                  maxHeight: "0px",
                              }
                    }
                >
                    <form className="h-full flex flex-col gap-3 justify-around align-center p-2 text-primary font-semibold">
                        <div className="flex flex-col">
                            <label htmlFor="login-nome">Nome</label>
                            <input
                                id="login-nome"
                                type="text"
                                className="border-2 border-primary bg-white rounded-md"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="login-email">E-mail</label>
                            <input
                                id="login-email"
                                type="text"
                                className="border-2 border-primary bg-white rounded-md"
                            />
                        </div>
                        <button className="rounded border-primary border-2 mt-4 bg-primary text-white uppercase">
                            Fazer Login
                        </button>
                    </form>
                </div>
            </div>
            <button className="relative">
                <TiShoppingCart className="text-4xl" />
                <div className="absolute w-1/2 h-1/2 -bottom-1 -right-4 bg-white leading-tight font-semibold text-black text-center rounded-full">
                    {cart.length}
                </div>
            </button>
        </>
    )
}

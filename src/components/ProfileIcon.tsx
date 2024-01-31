"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { IoPersonCircleOutline, IoPerson, IoBagHandleSharp } from "react-icons/io5"
import { ImExit } from "react-icons/im"

export default function ProfileIcon(props: {
    user: {
        id: string
        name: string
    } | null
}) {
    const [openLogin, setOpenLogin] = useState(false)
    const handleOpenLogin = () => setOpenLogin(prev => !prev)

    const loginContainerRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const outsideClickHandler = (e: MouseEvent) => {
            if (
                loginContainerRef.current &&
                !loginContainerRef.current.contains(e.target as Node)
            ) {
                setOpenLogin(false)
            }
        }

        document.addEventListener("mousedown", outsideClickHandler)

        return () => document.removeEventListener("mousedown", outsideClickHandler)
    }, [])

    const profileOptions = [
        {
            label: "Meus dados",
            link: "/",
            icon: IoPerson,
        },
        {
            label: "Minhas compras",
            link: "/",
            icon: IoBagHandleSharp,
        },
        {
            label: "Sair",
            link: "/",
            icon: ImExit,
        },
    ]

    return (
        <div className="relative w-9 h-9">
            {props.user ? (
                <>
                    <button onClick={handleOpenLogin}>
                        <IoPersonCircleOutline className="text-4xl" />
                    </button>
                    <div
                        className="shadow-login shadow-primary absolute bg-white transition-all duration-700 motion-reduce:transition-none rounded-xl rounded-tr-none w-80 z-50 right-0 overflow-hidden"
                        ref={loginContainerRef}
                        style={
                            openLogin
                                ? {
                                      maxHeight: "100rem",
                                  }
                                : {
                                      boxShadow: "none",
                                      maxHeight: "0px",
                                  }
                        }
                    >
                        <div className="h-full flex flex-col gap-3 justify-around align-center p-3 text-primary">
                            <ul>
                                {profileOptions.map(option => (
                                    <li className="border-b-[1px] border-primary p-2 uppercase font-semibold">
                                        <Link
                                            className="flex justify-between items-center"
                                            href={option.link}
                                        >
                                            <option.icon className="text-3xl" />
                                            <span>{option.label}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </>
            ) : (
                <Link href="/login">
                    <IoPersonCircleOutline className="text-4xl" />
                </Link>
            )}
        </div>
    )
}

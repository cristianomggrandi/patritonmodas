"use client"

import Link from "next/link"
import { IoPersonCircleOutline } from "react-icons/io5"

export default function ProfileIcon() {
    return (
        <div className="relative w-9 h-9">
            <Link href="/perfil">
                <IoPersonCircleOutline className="text-4xl" />
            </Link>
        </div>
    )
}
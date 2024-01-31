"use client"

import { useFormStatus } from "react-dom"

export default function LoginButton() {
    const { pending } = useFormStatus()

    return (
        <div className="w-full">
            <button
                type="submit"
                className="rounded mt-2 p-1 bg-primary text-white uppercase w-full"
                disabled={pending}
            >
                Entrar
            </button>
        </div>
    )
}

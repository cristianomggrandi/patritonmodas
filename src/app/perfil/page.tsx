import AuthService from "@/modules/auth/session/session-token"
import Link from "next/link"
import { redirect } from "next/navigation"
import { ImExit } from "react-icons/im"
import { IoBagHandleSharp, IoPerson } from "react-icons/io5"

export default async function Perfil() {
    const user = await AuthService.getUserDetails()

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
            link: "/api/user/logout",
            icon: ImExit,
        },
    ]

    if (!user) redirect("/")

    return (
            <div className="flex flex-col gap-6 min-w-[30%] max-w-36 p-4 rounded-lg shadow-md shadow-primary">
                <h1 className="text-3xl text-center text-primary font-semibold">Perfil</h1>
                <h2 className="text-2xl text-primary font-semibold">{user.name}</h2>
                <div className="h-full flex flex-col gap-3 justify-around align-center text-primary">
                    <ul>
                        {profileOptions.map(option => (
                            <li
                                key={option.label}
                                className="border-b-[1px] border-primary p-2 uppercase font-semibold"
                            >
                                <Link className="flex gap-4 items-center" href={option.link}>
                                    <option.icon className="text-3xl" />
                                    <span>{option.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
    )
}

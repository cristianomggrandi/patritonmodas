import Input from "@/components/Input"
import prisma from "@/lib/prisma"
import AuthService from "@/modules/auth/session/session-token"
import bcrypt from "bcrypt"
import Link from "next/link"
import { redirect } from "next/navigation"
import RecoverPassword from "./components/recover-password-button"

export type InfoType = {
    message: string
    status: "success" | "warning" | "error" | undefined
}

async function login(formData: FormData) {
    "use server"
    try {
        const email = formData.get("email")?.toString()
        const password = formData.get("password")?.toString()

        // TODO
        if (!email || !password) return

        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        })

        // TODO
        if (!user) {
            console.log("Usuário não encontrado")
            return
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            console.log("E-mail e senha inválidos")
            return
        }

        await AuthService.createSessionToken({ sub: user.id, name: user.name })
    } catch (error) {
        console.error(error)
    }
    redirect("/")
}

async function recoverPassword(email: string): Promise<InfoType> {
    "use server"
    try {
        // TODO
        if (!email)
            return {
                message: "Digite seu e-mail para recuperar sua senha.",
                status: "warning",
            }

        return {
            message: "Senha enviada ao e-mail preenchido.",
            status: "success",
        }
    } catch (error) {
        console.error(error)
        return {
            message: "Erro ao recuperar senha.",
            status: "error",
        }
    }
}

export default function Login() {
    return (
        <div className="flex flex-col gap-6 min-w-[30%] max-w-36 p-4 rounded-lg shadow-md shadow-primary">
            <h1 className="text-3xl text-center text-primary font-semibold">Faça Login</h1>
            <form action={login} className="flex flex-col gap-3">
                <Input id="login-email" name="email" label="E-mail" type="email" required />
                <Input id="login-password" name="password" label="Senha" type="password" required />
                <RecoverPassword recoverPassword={recoverPassword} />
                <div className="w-full">
                    <button
                        type="submit"
                        className="rounded mt-2 p-1 bg-primary text-white uppercase w-full"
                    >
                        Entrar
                    </button>
                </div>
                <Link
                    href="/cadastro"
                    className="rounded mt-2 p-1 outline outline-primary outline-1 text-primary text-center font-semibold uppercase w-full"
                >
                    Cadastrar
                </Link>
            </form>
        </div>
    )
}

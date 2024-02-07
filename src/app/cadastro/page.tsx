import Input from "@/components/Input"
import prisma from "@/lib/prisma"
import AuthService from "@/modules/auth/session/session-token"
import bcrypt from "bcrypt"
import { redirect } from "next/navigation"
import Button from "../components/button"

export default function Cadastro() {
    async function createAccount(formData: FormData) {
        "use server"
        try {
            const name = formData.get("name")?.toString()
            const email = formData.get("email")?.toString()
            const fone = formData.get("fone")?.toString()
            const password = formData.get("password")?.toString()
            const passwordConfirmation = formData.get("password-confirmation")?.toString()

            // TODO
            if (!name || !email || !fone || !password || !passwordConfirmation) return

            if (passwordConfirmation !== password) return

            const hashedPassword = await bcrypt.hash(password, 10)

            const user = await prisma.user.create({
                data: {
                    name,
                    email,
                    fone,
                    password: hashedPassword,
                },
            })

            await AuthService.createSessionToken({ sub: user.id, name: user.name })
        } catch (error) {
            console.error(error)
        }
        redirect("/")
    }

    return (
        <div className="flex flex-col gap-6 min-w-[30%] max-w-36 p-4 rounded-lg shadow-md shadow-primary">
            <h1 className="text-3xl text-center text-primary font-semibold">Crie sua conta</h1>
            <form action={createAccount} className="flex flex-col gap-3">
                <Input id="signin-name" name="name" label="Nome" type="text" required />
                <Input id="signin-email" name="email" label="E-mail" type="email" required />
                <Input id="fone" name="fone" label="Telefone" type="tel" required />
                <Input
                    id="signin-password"
                    name="password"
                    label="Senha"
                    type="password"
                    required
                />
                <Input
                    id="signin-password-confirmation"
                    name="password-confirmation"
                    label="Confirmação de senha"
                    type="password"
                    required
                />
                <div className="mt-2">
                    <Button type="submit">Cadastrar</Button>
                </div>
            </form>
        </div>
    )
}

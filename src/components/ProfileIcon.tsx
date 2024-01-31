"use client"

import Link from "next/link"
import { IoPersonCircleOutline } from "react-icons/io5"

export default function ProfileIcon() {
    // const [openLogin, setOpenLogin] = useState(false)
    // const handleOpenLogin = () => setOpenLogin(prev => !prev)

    // const loginContainerRef = useRef<HTMLDivElement | null>(null)

    // useEffect(() => {
    //     const outsideClickHandler = (e: MouseEvent) => {
    //         if (
    //             loginContainerRef.current &&
    //             !loginContainerRef.current.contains(e.target as Node)
    //         ) {
    //             setOpenLogin(false)
    //         }
    //     }

    //     document.addEventListener("mousedown", outsideClickHandler)

    //     return () => document.removeEventListener("mousedown", outsideClickHandler)
    // }, [])

    return (
        <div className="relative w-9 h-9">
            <Link href="/login">
                <IoPersonCircleOutline className="text-4xl" />
            </Link>
            {/* <div
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
                    {false ? ( //isLoggedIn ? (
                        // TODO
                        <div>Logado com NOME</div>
                    ) : (
                        <form
                            action={login}
                            className="h-full flex flex-col gap-3 justify-around align-center p-3 text-primary"
                            onSubmit={() => {
                                console.log("refresh")
                                router.refresh()
                            }}
                        >
                            <Input
                                id="login-email"
                                name="email"
                                label="E-mail"
                                type="email"
                                required
                            />
                            <Input
                                id="login-password"
                                name="password"
                                label="Senha"
                                type="password"
                                required
                            />
                            <div className="text-right -mt-2">
                                <Link
                                    href="/"
                                    className="text-xs text-primary underline decoration-primary"
                                >
                                    Recuperar senha
                                </Link>
                            </div>
                            <div className="flex justify-between gap-6">
                                <button
                                    type="submit"
                                    className="flex-1 rounded p-1 px-2 bg-primary text-white uppercase"
                                >
                                    Entrar
                                </button>
                                <Link
                                    href="/cadastro"
                                    className="flex-1 text-center rounded p-1 px-2 text-primary uppercase outline outline-primary outline-1"
                                    onClick={() => setOpenLogin(false)}
                                >
                                    Criar Conta
                                </Link>
                            </div>
                        </form>
                    )}
                </div> */}
        </div>
    )
}

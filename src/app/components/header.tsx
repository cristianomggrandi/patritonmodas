import CartIcon from "@/components/CartIcon"
import ProfileIcon from "@/components/ProfileIcon"
import AuthService from "@/modules/auth/session/session-token"
import Image from "next/image"
import Link from "next/link"
import { IoIosArrowForward } from "react-icons/io"

export default async function Header() {
    const user = await AuthService.getUserDetails()

    return (
        <header>
            <nav className="bg-white text-primary">
                <ul className="flex justify-around">
                    <li className="flex flex-1 items-center justify-center">
                        <input
                            className="hover:outline-2 focus:outline-2 outline-1 outline outline-primary text-primary rounded-full p-2"
                            placeholder="O que você procura?"
                        />
                    </li>
                    <li className="flex flex-1 items-center justify-center">
                        <Link href="/">
                            <Image
                                src="/logopatritonmodas.jpg"
                                alt="Logo Patriton Modas"
                                width={192}
                                height={72}
                            />
                        </Link>
                    </li>
                    <li className="flex flex-1 items-center justify-center gap-3">
                        <ProfileIcon user={user} />
                        <CartIcon />
                    </li>
                </ul>
            </nav>
            <nav>
                <ul className="flex justify-around bg-primary text-white p-2 list-none">
                    <li className="flex-1 text-center relative justify-center hover:border-b-2 hover:-mb-1 border-solid border-cement">
                        <Link className="block w-full" href="/novidades">
                            Novidades
                        </Link>
                    </li>
                    <li className="flex-1 text-center relative justify-center hover:border-b-2 hover:-mb-1 border-solid border-cement">
                        <Link className="block w-full" href="/promocoes">
                            Promoções
                        </Link>
                    </li>
                    <li className="flex-1 text-center relative hover:border-b-2 hover:-mb-1 border-solid border-cement dropdown-categorias">
                        <Link className="block w-full" href="/masculino">
                            Masculino
                            <IoIosArrowForward className="dropdown-arrow inline-block ml-3" />
                        </Link>
                        <div className="absolute hidden w-full z-20 shadow-md shadow-primary">
                            <ul className="w-full p-2 bg-primary flex flex-col">
                                <li className="flex items-center border-b-2 border-solid border-white">
                                    <Link className="w-full p-1 text-left" href="/vestido">
                                        Vestido
                                    </Link>
                                </li>
                                <li className="flex items-center border-b-2 border-solid border-white">
                                    <Link className="w-full p-1 text-left" href="/shorts">
                                        Shorts
                                    </Link>
                                </li>
                                <li className="flex items-center border-b-2 border-solid border-white">
                                    <Link className="w-full p-1 text-left" href="/saias">
                                        Saias
                                    </Link>
                                </li>
                                <li className="flex items-center border-b-2 border-solid border-white">
                                    <Link className="w-full p-1 text-left" href="/casacos">
                                        Casacos
                                    </Link>
                                </li>
                                <li className="flex items-center border-b-2 border-solid border-white">
                                    <Link className="w-full p-1 text-left" href="/jeans">
                                        Jeans
                                    </Link>
                                </li>
                                <li className="flex items-center border-b-2 border-solid border-white">
                                    <Link className="w-full p-1 text-left" href="/macacao">
                                        Macacão
                                    </Link>
                                </li>
                                <li className="flex items-center border-b-2 border-solid border-white">
                                    <Link className="w-full p-1 text-left" href="/calcados">
                                        Calçados
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="flex-1 text-center relative justify-center relative dropdown-categorias hover:border-b-2 hover:-mb-1 border-solid border-cement">
                        <Link className="block w-full" href="/feminino">
                            Feminino
                            <IoIosArrowForward className="dropdown-arrow inline-block ml-3" />
                        </Link>
                        <div className="absolute hidden w-full z-20 shadow-md shadow-primary">
                            <ul className="w-full p-2 bg-primary flex flex-col">
                                <li className="flex items-center border-b-2 border-solid border-white">
                                    <Link className="w-full p-1 text-left" href="/vestido">
                                        Vestido
                                    </Link>
                                </li>
                                <li className="flex items-center border-b-2 border-solid border-white">
                                    <Link className="w-full p-1 text-left" href="/shorts">
                                        Shorts
                                    </Link>
                                </li>
                                <li className="flex items-center border-b-2 border-solid border-white">
                                    <Link className="w-full p-1 text-left" href="/saias">
                                        Saias
                                    </Link>
                                </li>
                                <li className="flex items-center border-b-2 border-solid border-white">
                                    <Link className="w-full p-1 text-left" href="/casacos">
                                        Casacos
                                    </Link>
                                </li>
                                <li className="flex items-center border-b-2 border-solid border-white">
                                    <Link className="w-full p-1 text-left" href="/jeans">
                                        Jeans
                                    </Link>
                                </li>
                                <li className="flex items-center border-b-2 border-solid border-white">
                                    <Link className="w-full p-1 text-left" href="/macacao">
                                        Macacão
                                    </Link>
                                </li>
                                <li className="flex items-center border-b-2 border-solid border-white">
                                    <Link className="w-full p-1 text-left" href="/calcados">
                                        Calçados
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="flex-1 text-center relative justify-center relative hover:border-b-2 hover:-mb-1 border-solid border-cement dropdown-categorias">
                        <Link className="block w-full" href="/promoção">
                            Acessórios
                            <IoIosArrowForward className="dropdown-arrow inline-block ml-3" />
                        </Link>
                        <div className="absolute hidden w-full z-20 shadow-md shadow-primary">
                            <ul className="w-full p-2 bg-primary flex flex-col">
                                <li className="flex items-center border-b-2 border-solid border-white">
                                    <Link className="w-full p-1 text-left" href="/vestido">
                                        Vestido
                                    </Link>
                                </li>
                                <li className="flex items-center border-b-2 border-solid border-white">
                                    <Link className="w-full p-1 text-left" href="/shorts">
                                        Shorts
                                    </Link>
                                </li>
                                <li className="flex items-center border-b-2 border-solid border-white">
                                    <Link className="w-full p-1 text-left" href="/saias">
                                        Saias
                                    </Link>
                                </li>
                                <li className="flex items-center border-b-2 border-solid border-white">
                                    <Link className="w-full p-1 text-left" href="/casacos">
                                        Casacos
                                    </Link>
                                </li>
                                <li className="flex items-center border-b-2 border-solid border-white">
                                    <Link className="w-full p-1 text-left" href="/jeans">
                                        Jeans
                                    </Link>
                                </li>
                                <li className="flex items-center border-b-2 border-solid border-white">
                                    <Link className="w-full p-1 text-left" href="/macacao">
                                        Macacão
                                    </Link>
                                </li>
                                <li className="flex items-center border-b-2 border-solid border-white">
                                    <Link className="w-full p-1 text-left" href="/calcados">
                                        Calçados
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="flex-1 text-center relative justify-center relative hover:border-b-2 hover:-mb-1 border-solid border-cement dropdown-categorias">
                        <Link className="block w-full" href="/blusas">
                            Blusas
                            <IoIosArrowForward className="dropdown-arrow inline-block ml-3" />
                        </Link>
                        <div className="absolute hidden w-full z-20 shadow-md shadow-primary">
                            <ul className="w-full p-2 bg-primary flex flex-col">
                                <li className="flex items-center border-b-2 border-solid border-white">
                                    <Link className="w-full p-1 text-left" href="/vestido">
                                        Vestido
                                    </Link>
                                </li>
                                <li className="flex items-center border-b-2 border-solid border-white">
                                    <Link className="w-full p-1 text-left" href="/shorts">
                                        Shorts
                                    </Link>
                                </li>
                                <li className="flex items-center border-b-2 border-solid border-white">
                                    <Link className="w-full p-1 text-left" href="/macacao">
                                        Macacão
                                    </Link>
                                </li>
                                <li className="flex items-center border-b-2 border-solid border-white">
                                    <Link className="w-full p-1 text-left" href="/calcados">
                                        Calçados
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="flex-1 text-center relative justify-center relative hover:border-b-2 hover:-mb-1 border-solid border-cement dropdown-categorias">
                        <Link className="block w-full" href="/calça">
                            Calça
                            <IoIosArrowForward className="dropdown-arrow inline-block ml-3" />
                        </Link>
                        <div className="absolute hidden w-full z-20 shadow-md shadow-primary">
                            <ul className="w-full p-2 bg-primary flex flex-col">
                                <li className="flex items-center border-b-2 border-solid border-white">
                                    <Link className="w-full p-1 text-left" href="/saias">
                                        Saias
                                    </Link>
                                </li>
                                <li className="flex items-center border-b-2 border-solid border-white">
                                    <Link className="w-full p-1 text-left" href="/casacos">
                                        Casacos
                                    </Link>
                                </li>
                                <li className="flex items-center border-b-2 border-solid border-white">
                                    <Link className="w-full p-1 text-left" href="/jeans">
                                        Jeans
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

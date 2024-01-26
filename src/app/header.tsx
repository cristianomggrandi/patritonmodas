import HeaderIcons from "@/components/HeaderIcons"
import Image from "next/image"
import Link from "next/link"
import { IoIosArrowForward } from "react-icons/io"

export default function Header() {
    return (
        <header>
            <nav className="bg-black text-white">
                <ul className="flex justify-around">
                    <li className="flex flex-1 items-center justify-center">
                        <input className="rounded-full p-2" placeholder="O que você procura?" />
                    </li>
                    <li className="flex flex-1 items-center justify-center">
                        <Link href="/">
                            <Image
                                src="/logopatritonmodas.jpg"
                                alt="Logo Patriton Modas"
                                width={135}
                                height={225}
                            />
                        </Link>
                    </li>
                    <li className="flex flex-1 items-center justify-center gap-3">
                        <HeaderIcons />
                    </li>
                </ul>
            </nav>
            <nav>
                <ul className="flex justify-around bg-black text-white p-2 list-none">
                    <li className="flex-1 text-center relative justify-center hover:border-b-2 hover:-mb-1 border-solid border-cement">
                        <Link className="block w-full" href="/novidades">
                            Novidades
                        </Link>
                    </li>
                    <li className="flex-1 text-center relative justify-center hover:border-b-2 hover:-mb-1 border-solid border-cement">
                        <Link className="block w-full" href="/promocao">
                            Promoção
                        </Link>
                    </li>
                    <li className="flex-1 text-center relative hover:border-b-2 hover:-mb-1 border-solid border-cement dropdown-categorias">
                        <Link className="block w-full" href="/masculino">
                            Masculino
                            <IoIosArrowForward className="dropdown-arrow inline-block ml-3" />
                        </Link>
                        <div className="absolute hidden w-full">
                            <ul className="w-full p-2 bg-black flex flex-col gap-2">
                                <li className="flex items-center border-b-2 border-solid border-cement">
                                    <Link href="/vestido">Vestido</Link>
                                </li>
                                <li className="flex items-center border-b-2 border-solid border-cement">
                                    <Link href="/shorts">Shorts</Link>
                                </li>
                                <li className="flex items-center border-b-2 border-solid border-cement">
                                    <Link href="/saias">Saias</Link>
                                </li>
                                <li className="flex items-center border-b-2 border-solid border-cement">
                                    <Link href="/casacos">Casacos</Link>
                                </li>
                                <li className="flex items-center border-b-2 border-solid border-cement">
                                    <Link href="/jeans">Jeans</Link>
                                </li>
                                <li className="flex items-center border-b-2 border-solid border-cement">
                                    <Link href="/macacao">Macacão</Link>
                                </li>
                                <li className="flex items-center border-b-2 border-solid border-cement">
                                    <Link href="/calcados">Calçados</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="flex-1 text-center relative justify-center relative dropdown-categorias hover:border-b-2 hover:-mb-1 border-solid border-cement">
                        <Link className="block w-full" href="/feminino">
                            Feminino
                            <IoIosArrowForward className="dropdown-arrow inline-block ml-3" />
                        </Link>
                        <div className="absolute hidden w-full">
                            <ul className="w-full p-2 bg-black flex flex-col gap-2">
                                <li className="flex items-center border-b-2 border-solid border-cement">
                                    <Link href="/vestido">Vestido</Link>
                                </li>
                                <li className="flex items-center border-b-2 border-solid border-cement">
                                    <Link href="/shorts">Shorts</Link>
                                </li>
                                <li className="flex items-center border-b-2 border-solid border-cement">
                                    <Link href="/saias">Saias</Link>
                                </li>
                                <li className="flex items-center border-b-2 border-solid border-cement">
                                    <Link href="/casacos">Casacos</Link>
                                </li>
                                <li className="flex items-center border-b-2 border-solid border-cement">
                                    <Link href="/jeans">Jeans</Link>
                                </li>
                                <li className="flex items-center border-b-2 border-solid border-cement">
                                    <Link href="/macacao">Macacão</Link>
                                </li>
                                <li className="flex items-center border-b-2 border-solid border-cement">
                                    <Link href="/calcados">Calçados</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="flex-1 text-center relative justify-center relative hover:border-b-2 hover:-mb-1 border-solid border-cement dropdown-categorias">
                        <Link className="block w-full" href="/promoção">
                            Acessórios
                            <IoIosArrowForward className="dropdown-arrow inline-block ml-3" />
                        </Link>
                        <div className="absolute hidden w-full">
                            <ul className="w-full p-2 bg-black flex flex-col gap-2">
                                <li className="flex items-center border-b-2 border-solid border-cement">
                                    <Link href="/vestido">Vestido</Link>
                                </li>
                                <li className="flex items-center border-b-2 border-solid border-cement">
                                    <Link href="/shorts">Shorts</Link>
                                </li>
                                <li className="flex items-center border-b-2 border-solid border-cement">
                                    <Link href="/saias">Saias</Link>
                                </li>
                                <li className="flex items-center border-b-2 border-solid border-cement">
                                    <Link href="/casacos">Casacos</Link>
                                </li>
                                <li className="flex items-center border-b-2 border-solid border-cement">
                                    <Link href="/jeans">Jeans</Link>
                                </li>
                                <li className="flex items-center border-b-2 border-solid border-cement">
                                    <Link href="/macacao">Macacão</Link>
                                </li>
                                <li className="flex items-center border-b-2 border-solid border-cement">
                                    <Link href="/calcados">Calçados</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="flex-1 text-center relative justify-center relative hover:border-b-2 hover:-mb-1 border-solid border-cement dropdown-categorias">
                        <Link className="block w-full" href="/blusas">
                            Blusas
                            <IoIosArrowForward className="dropdown-arrow inline-block ml-3" />
                        </Link>
                        <div className="absolute hidden w-full">
                            <ul className="w-full p-2 bg-black flex flex-col gap-2">
                                <li className="flex items-center border-b-2 border-solid border-cement">
                                    <Link href="/vestido">Vestido</Link>
                                </li>
                                <li className="flex items-center border-b-2 border-solid border-cement">
                                    <Link href="/shorts">Shorts</Link>
                                </li>
                                <li className="flex items-center border-b-2 border-solid border-cement">
                                    <Link href="/macacao">Macacão</Link>
                                </li>
                                <li className="flex items-center border-b-2 border-solid border-cement">
                                    <Link href="/calcados">Calçados</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="flex-1 text-center relative justify-center relative hover:border-b-2 hover:-mb-1 border-solid border-cement dropdown-categorias">
                        <Link className="block w-full" href="/calça">
                            Calça
                            <IoIosArrowForward className="dropdown-arrow inline-block ml-3" />
                        </Link>
                        <div className="absolute hidden w-full">
                            <ul className="w-full p-2 bg-black flex flex-col gap-2">
                                <li className="flex items-center border-b-2 border-solid border-cement">
                                    <Link href="/saias">Saias</Link>
                                </li>
                                <li className="flex items-center border-b-2 border-solid border-cement">
                                    <Link href="/casacos">Casacos</Link>
                                </li>
                                <li className="flex items-center border-b-2 border-solid border-cement">
                                    <Link href="/jeans">Jeans</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

import HeaderIcons from "@/components/HeaderIcons"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return (
        <header>
            <nav className="bg-black text-white p-2">
                <ul className="flex justify-around">
                    <li className="flex items-center">
                        <Link href="/">
                            <Image
                                src="/logopatritonmodas.jpg"
                                alt="Logo Patriton Modas"
                                width={90}
                                height={150}
                            />
                        </Link>
                    </li>
                    <li className="flex items-center">
                        <Link href="/masculino">Masculino</Link>
                    </li>
                    <li className="flex items-center">
                        <Link href="/feminino">Feminino</Link>
                    </li>
                    <li className="flex items-center">
                        <Link href="/infantil">Infantil</Link>
                    </li>
                    <li className="flex items-center">
                        <input className="rounded-full p-2" placeholder="O que você procura?" />
                    </li>
                    <li className="flex items-center gap-3">
                        <HeaderIcons />
                    </li>
                </ul>
            </nav>
        </header>
    )
}

import Image from "next/image"
import Link from "next/link"

export default function Produto({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    const cores = ["fff", "000", "ff0", "f00", "f0f", "0ff"]
    const tamanhos = ["p", "m", "g", "gg", "xg"]

    console.log("search", searchParams)

    const corSelecionada = cores.find(c => c === searchParams.cor) || cores[0]
    const tamanhoSelecionado = tamanhos.find(c => c === searchParams.tamanho) || cores[0]

    return (
        <main>
            <div className="flex p-16 gap-12">
                <div className="flex w-1/2 justify-end">
                    <Image src="/roupafeminina.jpg" alt="Imagem produto" height={320} width={240} />
                </div>
                <div className="w-1/2">
                    <div className="mb-4">
                        <h1 className="font-bold text-3xl">Vestido Teste</h1>
                        <span className="">Id: 578591623</span>
                    </div>
                    <div className="my-4">
                        <p className="my-1">Selecione a cor:</p>
                        <ul className="flex gap-1">
                            {cores.map(cor => (
                                <li key={cor}>
                                    <Link href={`?cor=${cor}&tamanho=${tamanhoSelecionado}`}>
                                        <div
                                            className={`h-8 w-8 rounded-md border-2 border-solid ${corSelecionada === cor ? "border-neutral-500" : "border-neutral-300"}`}
                                            style={{ backgroundColor: "#" + cor }}
                                        />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="my-3">
                        <p className="my-1">Selecione o tamanho:</p>
                        <ul className="flex gap-1">
                            {tamanhos.map(tamanho => (
                                <li key={tamanho}>
                                    <Link href={`?cor=${corSelecionada}&tamanho=${tamanho}`}>
                                        <div
                                            className={`h-8 w-12 rounded-full text-center uppercase leading-relaxed border-2 border-solid ${tamanhoSelecionado === tamanho ? "border-neutral-500" : "border-neutral-300"} ${tamanhoSelecionado === tamanho ? "bg-contrast" : ""}`}
                                        >
                                            {tamanho}
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="my-3 font-bold text-2xl">R$ 119,90</div>
                    <div className="my-3 font-bold text-2xl">
                        <button className="bg-primary text-white border-2 border-solid border-neutral-900 rounded-xl uppercase py-3 px-8">
                            Comprar
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex p-16 gap-12">
                <div className="flex w-1/2 justify-end">
                    <Image src="/roupafeminina.jpg" alt="Imagem produto" height={320} width={240} />
                </div>
                <div className="w-1/2">
                    <div className="mb-4">
                        <h1 className="font-bold text-3xl">Vestido Teste</h1>
                        <span className="">Id: 578591623</span>
                    </div>
                    <div className="my-4">
                        <p className="my-1">Selecione a cor:</p>
                        <ul className="flex gap-1">
                            {cores.map(cor => (
                                <li key={cor}>
                                    <Link href={`?cor=${cor}&tamanho=${tamanhoSelecionado}`}>
                                        <div
                                            className={`h-8 w-8 rounded-md border-2 border-solid ${corSelecionada === cor ? "border-neutral-500" : "border-neutral-300"}`}
                                            style={{ backgroundColor: "#" + cor }}
                                        />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="my-3">
                        <p className="my-1">Selecione o tamanho:</p>
                        <ul className="flex gap-1">
                            {tamanhos.map(tamanho => (
                                <li key={tamanho}>
                                    <Link href={`?cor=${corSelecionada}&tamanho=${tamanho}`}>
                                        <div
                                            className={`h-8 w-12 rounded-full text-center uppercase leading-relaxed border-2 border-solid ${tamanhoSelecionado === tamanho ? "border-neutral-500" : "border-neutral-300"} ${tamanhoSelecionado === tamanho ? "bg-contrast" : ""}`}
                                        >
                                            {tamanho}
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="my-3 font-bold text-2xl">R$ 119,90</div>
                    <div className="my-3 font-bold text-2xl">
                        <button className="bg-primary text-white border-2 border-solid border-neutral-900 rounded-xl uppercase py-3 px-8">
                            Comprar
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex p-16 gap-12">
                <div className="flex w-1/2 justify-end">
                    <Image src="/roupafeminina.jpg" alt="Imagem produto" height={320} width={240} />
                </div>
                <div className="w-1/2">
                    <div className="mb-4">
                        <h1 className="font-bold text-3xl">Vestido Teste</h1>
                        <span className="">Id: 578591623</span>
                    </div>
                    <div className="my-4">
                        <p className="my-1">Selecione a cor:</p>
                        <ul className="flex gap-1">
                            {cores.map(cor => (
                                <li key={cor}>
                                    <Link href={`?cor=${cor}&tamanho=${tamanhoSelecionado}`}>
                                        <div
                                            className={`h-8 w-8 rounded-md border-2 border-solid ${corSelecionada === cor ? "border-neutral-500" : "border-neutral-300"}`}
                                            style={{ backgroundColor: "#" + cor }}
                                        />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="my-3">
                        <p className="my-1">Selecione o tamanho:</p>
                        <ul className="flex gap-1">
                            {tamanhos.map(tamanho => (
                                <li key={tamanho}>
                                    <Link href={`?cor=${corSelecionada}&tamanho=${tamanho}`}>
                                        <div
                                            className={`h-8 w-12 rounded-full text-center uppercase leading-relaxed border-2 border-solid ${tamanhoSelecionado === tamanho ? "border-neutral-500" : "border-neutral-300"} ${tamanhoSelecionado === tamanho ? "bg-contrast" : ""}`}
                                        >
                                            {tamanho}
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="my-3 font-bold text-2xl">R$ 119,90</div>
                    <div className="my-3 font-bold text-2xl">
                        <button className=" py-3 px-16 bg-primary text-white border-2 border-solid border-neutral-900 rounded-xl uppercase">
                            Comprar
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}

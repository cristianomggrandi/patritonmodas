import Image from "next/image"
import Link from "next/link"
import BuyButton from "./BuyButton"

type ParamType = { [key: string]: string | string[] | undefined }

export default function ProductPage({
    params,
    searchParams,
}: {
    params: ParamType
    searchParams: ParamType
}) {
    const colors = ["fff", "000", "ff0", "f00", "f0f", "0ff"]
    const sizes = ["p", "m", "g", "gg", "g1", "g2", "g3"]

    const selectedColor = colors.find(c => c === searchParams.color) || colors[0]
    const selectedSize = sizes.find(c => c === searchParams.size) || sizes[0]

    const product = {
        id: Number(params.idProduto),
        name: "Vestido Teste",
        price: 119.9,
        quantity: 1,
    }

    return (
        <main>
            <div className="flex p-16 gap-12">
                <div className="flex w-1/2 justify-end">
                    <Image src="/roupafeminina.jpg" alt="Imagem product" height={320} width={240} />
                </div>
                <div className="w-1/2 flex flex-col justify-between">
                    <div className="">
                        <h1 className="font-bold text-3xl">{product.name}</h1>
                        <span className="">Id: {product.id}</span>
                    </div>
                    <div className="">
                        <p className="my-1">Selecione a cor:</p>
                        <ul className="flex gap-1">
                            {colors.map(color => (
                                <li key={color}>
                                    <Link href={`?color=${color}&size=${selectedSize}`}>
                                        <div
                                            className={`h-8 w-8 rounded-md border-2 border-solid ${selectedColor === color ? "border-neutral-500" : "border-neutral-300"}`}
                                            style={{ backgroundColor: "#" + color }}
                                        />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="">
                        <p className="my-1">Selecione o tamanho:</p>
                        <ul className="flex gap-1">
                            {sizes.map(size => (
                                <li key={size}>
                                    <Link href={`?color=${selectedColor}&size=${size}`}>
                                        <div
                                            className={`h-8 w-12 rounded-full text-center uppercase leading-relaxed border-2 border-solid ${selectedSize === size ? "border-neutral-500" : "border-neutral-300"} ${selectedSize === size ? "bg-contrast" : ""}`}
                                        >
                                            {size}
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="font-bold text-2xl">
                        <span className="my-3 font-bold text-2xl block">R$ {product.price}</span>
                        <BuyButton product={product} />
                    </div>
                </div>
            </div>
        </main>
    )
}

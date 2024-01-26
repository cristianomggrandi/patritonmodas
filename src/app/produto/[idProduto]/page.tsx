import Image from "next/image"
import Link from "next/link"
import BuyButton from "./BuyButton"
import ColorButtons from "./ColorButtons"
import SizeButtons from "./SizeButtons"

type ParamType = { [key: string]: string | string[] | undefined }

export default function ProductPage({
    params,
    searchParams,
}: {
    params: ParamType
    searchParams: ParamType
}) {
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
                    <ColorButtons />
                    <SizeButtons />
                    <div className="font-bold text-2xl">
                        <span className="my-3 font-bold text-2xl block">R$ {product.price}</span>
                        <BuyButton product={product} />
                    </div>
                </div>
            </div>
        </main>
    )
}

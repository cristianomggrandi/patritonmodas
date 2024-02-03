import Image from "next/image"
import ColorButtons from "./ColorButtons"
import SizeButtons from "./SizeButtons"
import { useCartStore } from "@/app/store/cart-store"
import addProductAction from "@/app/actions/add-product"
import Link from "next/link"

type ParamType = { [key: string]: string | string[] | undefined }

export default function ProductPage({
    params,
    searchParams,
}: {
    params: ParamType
    searchParams: ParamType
}) {
    const colors = ["fff", "000", "ff0", "f00", "f0f", "0ff"]
    const sizes = ["p", "m", "g", "gg", "xg"]

    const defaultColor = colors.find(c => c === searchParams.cor) || colors[0]
    const defaultSize = sizes.find(c => c === searchParams.tamanho) || sizes[0]

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
                    <Image src="/roupafeminina.jpg" alt="Imagem product" height={425} width={240} />
                </div>
                <div className="w-1/2 flex flex-col justify-between">
                    <div>
                        <h1 className="font-bold text-3xl">{product.name}</h1>
                        <span className="">Id: {product.id}</span>
                    </div>
                    {/* TODO: Alterar outline para border */}
                    <ColorButtons colors={colors} defaultColor={defaultColor} />
                    <SizeButtons sizes={sizes} defaultSize={defaultSize} />
                    <div className="font-bold text-2xl">
                        <span className="my-3 font-bold text-2xl block">R$ {product.price}</span>
                        <button className="bg-primary text-white border-2 border-solid border-neutral-900 rounded-xl uppercase py-3 px-8">
                            Comprar
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}

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

    const selectedColor = colors.find(c => c === searchParams.cor) || colors[0]
    const selectedSize = sizes.find(c => c === searchParams.tamanho) || sizes[0]

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
                <form action={addProductAction} className="w-1/2 flex flex-col justify-between">
                    <div>
                        <h1 className="font-bold text-3xl">{product.name}</h1>
                        <input name="name" className="hidden" defaultValue={product.name} />
                        <span className="">Id: {product.id}</span>
                        <input name="id" className="hidden" defaultValue={product.id} />
                    </div>
                    <div>
                        <p className="my-1">Selecione a cor:</p>
                        <ul className="flex gap-2 picker-container">
                            {colors.map(cor => (
                                <li key={cor}>
                                    <input
                                        name="color-picker"
                                        id={"color-" + cor}
                                        value={cor}
                                        type="radio"
                                        className="hidden"
                                        defaultChecked={cor === selectedColor}
                                        required
                                    />
                                    <label
                                        htmlFor={"color-" + cor}
                                        className="h-8 w-8 block rounded-md outline outline-1 outline-primary"
                                        style={{ backgroundColor: "#" + cor }}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p className="my-1">Selecione o tamanho:</p>
                        <ul className="flex gap-2 picker-container">
                            {sizes.map(size => (
                                <li key={size}>
                                    <input
                                        name="size-picker"
                                        id={"size-" + size}
                                        value={size}
                                        type="radio"
                                        className="hidden"
                                        defaultChecked={size === selectedSize}
                                        required
                                    />
                                    <label
                                        htmlFor={"size-" + size}
                                        className="h-8 w-8 block rounded-md text-center leading-loose text-primary outline outline-1 outline-primary uppercase"
                                    >
                                        {size}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="font-bold text-2xl">
                        <span className="my-3 font-bold text-2xl block">R$ {product.price}</span>
                        <input name="price" className="hidden" defaultValue={product.price} />
                        <button
                            type="submit"
                            className="bg-primary text-white border-2 border-solid border-neutral-900 rounded-xl uppercase py-3 px-8"
                        >
                            Comprar
                        </button>
                    </div>
                </form>
            </div>
            <div className="flex p-16 gap-12">
                <div className="flex w-1/2 justify-end">
                    <Image src="/roupafeminina.jpg" alt="Imagem product" height={425} width={240} />
                </div>
                <form action={addProductAction} className="w-1/2 flex flex-col justify-between">
                    <div>
                        <h1 className="font-bold text-3xl">{product.name}</h1>
                        <input name="name" className="hidden" defaultValue={product.name} />
                        <span className="">Id: {product.id}</span>
                        <input name="id" className="hidden" defaultValue={product.id} />
                    </div>
                    <div>
                        <p className="my-1">Selecione a cor:</p>
                        <ul className="flex gap-2 picker-container">
                            {colors.map(cor => (
                                <li key={cor}>
                                    <input
                                        name="color-picker"
                                        id={"color-" + cor}
                                        value={cor}
                                        type="radio"
                                        className="hidden"
                                        defaultChecked={cor === selectedColor}
                                        required
                                    />
                                    <label
                                        htmlFor={"color-" + cor}
                                        className="h-8 w-8 block rounded-md outline outline-1 outline-primary"
                                        style={{ backgroundColor: "#" + cor }}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p className="my-1">Selecione o tamanho:</p>
                        <ul className="flex gap-2 picker-container">
                            {sizes.map(size => (
                                <li key={size}>
                                    <input
                                        name="size-picker"
                                        id={"size-" + size}
                                        value={size}
                                        type="radio"
                                        className="hidden"
                                        defaultChecked={size === selectedSize}
                                        required
                                    />
                                    <label
                                        htmlFor={"size-" + size}
                                        className="h-8 w-8 block rounded-md text-center leading-loose text-primary outline outline-1 outline-primary uppercase"
                                    >
                                        {size}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="font-bold text-2xl">
                        <span className="my-3 font-bold text-2xl block">R$ {product.price}</span>
                        <input name="price" className="hidden" defaultValue={product.price} />
                        <button
                            type="submit"
                            className="bg-primary text-white border-2 border-solid border-neutral-900 rounded-xl uppercase py-3 px-8"
                        >
                            Comprar
                        </button>
                    </div>
                </form>
            </div>
            <div className="flex p-16 gap-12">
                <div className="flex w-1/2 justify-end">
                    <Image src="/roupafeminina.jpg" alt="Imagem product" height={425} width={240} />
                </div>
                <form action={addProductAction} className="w-1/2 flex flex-col justify-between">
                    <div>
                        <h1 className="font-bold text-3xl">{product.name}</h1>
                        <input name="name" className="hidden" defaultValue={product.name} />
                        <span className="">Id: {product.id}</span>
                        <input name="id" className="hidden" defaultValue={product.id} />
                    </div>
                    <div>
                        <p className="my-1">Selecione a cor:</p>
                        <ul className="flex gap-2 picker-container">
                            {colors.map(cor => (
                                <li key={cor}>
                                    <input
                                        name="color-picker"
                                        id={"color-" + cor}
                                        value={cor}
                                        type="radio"
                                        className="hidden"
                                        defaultChecked={cor === selectedColor}
                                        required
                                    />
                                    <label
                                        htmlFor={"color-" + cor}
                                        className="h-8 w-8 block rounded-md outline outline-1 outline-primary"
                                        style={{ backgroundColor: "#" + cor }}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p className="my-1">Selecione o tamanho:</p>
                        <ul className="flex gap-2 picker-container">
                            {sizes.map(size => (
                                <li key={size}>
                                    <input
                                        name="size-picker"
                                        id={"size-" + size}
                                        value={size}
                                        type="radio"
                                        className="hidden"
                                        defaultChecked={size === selectedSize}
                                        required
                                    />
                                    <label
                                        htmlFor={"size-" + size}
                                        className="h-8 w-8 block rounded-md text-center leading-loose text-primary outline outline-1 outline-primary uppercase"
                                    >
                                        {size}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="font-bold text-2xl">
                        <span className="my-3 font-bold text-2xl block">R$ {product.price}</span>
                        <input name="price" className="hidden" defaultValue={product.price} />
                        <button
                            type="submit"
                            className="bg-primary text-white border-2 border-solid border-neutral-900 rounded-xl uppercase py-3 px-8"
                        >
                            Comprar
                        </button>
                    </div>
                </form>
            </div>
        </main>
    )
}

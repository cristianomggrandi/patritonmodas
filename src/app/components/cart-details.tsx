import { useCartStore } from "../store/cart-store"

export default function CartDetails() {
    const cart = useCartStore.getState().cart

    return (
        <div className="peer-checked:min-h-48 peer-checked:h-auto right-0 w-1/3 shadow-dropdown min-h-0 h-0 shadow-primary fixed bg-white transition-all duration-300 motion-reduce:transition-none rounded-xl rounded-tr-none z-50 overflow-hidden">
            <div className="bg-white w-full h-full text-primary">
                {cart.length ? (
                    <div>
                        {cart.map(item => (
                            <div key={item.id}>{item.name}</div>
                        ))}
                    </div>
                ) : (
                    <div>Carrinho vazio</div>
                )}
            </div>
        </div>
    )
}

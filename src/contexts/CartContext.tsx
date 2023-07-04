import { ReactNode, createContext, useState, useCallback, useEffect } from 'react';
import Cart from '../types/Cart';
import Product from '../types/Product';
import { toast } from 'react-toastify';
import CartService from '../services/CartService';

interface ICartContext {
    cart: Cart | null;
    loadCart: () => Promise<void>;
    handleAddProduct: (product: Product, count: number) => Promise<void>;
    handleRemoveProduct: (product: Product) => Promise<void>;
    handleRemoveCartItem: (product: Product) => Promise<void>;
}

interface CartProviderProps {
    children: ReactNode;
}

export const CartContext = createContext({} as ICartContext);

export function CartProvider({ children }: CartProviderProps) {
	const [cart, setCart] = useState<Cart | null>(null);

	useEffect(() => {
		return () => {
			setCart(null);
		}
	}, []);

	const loadCart = useCallback(async () => {
		try {
			const cartResponse = await CartService.getCart();
			setCart(cartResponse);

		} catch {
			toast.error("Erro ao carregar produtos");
		}
	}, []);

	async function handleAddProduct(product: Product, count: number) {
		if(!cart) return;
		
		
		const product_ids = [];
		for(let i = 0; i < count; i++) {
			product_ids.push(product.id);
		}
		
		try {
			const cartResponse = await CartService.addProduct(product_ids);
			setCart(cartResponse);
		} catch(e) {
			toast.error('Erro ao cadastrar produto!');
		}
	}
	
	async function handleRemoveProduct(product: Product) {
		if(!cart) return;
		
		
		try {
			const cartResponse = await CartService.removeProduct(product.id);
			setCart(cartResponse);
		} catch(e) {
			toast.error('Erro ao remover produto!');
		}
	}

	async function handleRemoveCartItem(product: Product) {
		if(!cart) return;
		
		
		try {
			const cartResponse = await CartService.removeCartItem(product.id);
			setCart(cartResponse);
		} catch(e) {
			console.log(e);
		}
	}

	return (
		<CartContext.Provider value={{
			cart,
			loadCart,
			handleAddProduct,
			handleRemoveProduct,
			handleRemoveCartItem
		}}>
			{children}
		</CartContext.Provider>
	);
}

import { ReactNode, createContext, useEffect, useState, useCallback } from 'react';
import Cart from '../models/Cart';
import api from '../services/api';
import Product from '../models/Product';

interface ICartContext {
    cart: Cart | null;
    loadCart: () => void;
    handleAddProduct: (product: Product, count: number) => void;
    handleRemoveProduct: (product: Product) => void;
    handleRemoveCartItem: (product: Product) => void;
}

interface CartProviderProps {
    children: ReactNode;
}

export const CartContext = createContext({} as ICartContext);

export function CartProvider({ children }: CartProviderProps) {
	const [cart, setCart] = useState<Cart | null>(null);

	const loadCart = useCallback(async () => {
		const response = await api.get('/carts', {
			headers: {
				'x-user-id': 'c76ac4b3-afb0-4b1b-ad92-4bf98884c745'
			}
		});

		setCart(response.data);
	}, []);

	useEffect(() => {
		loadCart();
	}, [loadCart]);

	async function handleAddProduct(product: Product, count: number) {
		if(!cart) return;

		const product_ids = [];
		for(let i = 0; i < count; i++) {
			product_ids.push(product.id);
		}

		try {
			const response = await api.patch('/carts/add-products', {
				product_ids
			}, {
				headers: {
					'x-user-id': 'c76ac4b3-afb0-4b1b-ad92-4bf98884c745'
				}
			})

			setCart(response.data);
		} catch(e) {
			console.log(e);
		}
	}

	async function handleRemoveProduct(product: Product) {
		if(!cart) return;

		try {
			const response = await api.patch('/carts/remove-products', {
				product_id: product.id
			}, {
				headers: {
					'x-user-id': 'c76ac4b3-afb0-4b1b-ad92-4bf98884c745'
				}
			});

			setCart(response.data);
		} catch(e) {
			console.log(e);
		}
	}

	async function handleRemoveCartItem(product: Product) {
		if(!cart) return;

		try {
			const response = await api.patch('/carts/remove-cart-items', {
				product_id: product.id
			}, {
				headers: {
					'x-user-id': 'c76ac4b3-afb0-4b1b-ad92-4bf98884c745'
				}
			});

			setCart(response.data);
		} catch(e) {
			console.log(e);
		}
	}

	return (
		<CartContext.Provider value={{ cart, loadCart, handleAddProduct, handleRemoveProduct, handleRemoveCartItem }}>
			{children}
		</CartContext.Provider>
	);
}

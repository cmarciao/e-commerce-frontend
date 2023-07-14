import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useCart } from "../../hooks/useCart";

import Product from "../../types/Product";
import CartService from "../../services/CartService";

export function useCartPage() {
	const navigate = useNavigate();
    const { cart, loadCart } = useCart();
	const [isLoadingCart, setIsLoadingCart] = useState(true);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

	useEffect(() => {
		async function load() {
			setIsLoadingCart(true);
			await loadCart();
			setIsLoadingCart(false);
		}

		load();

	}, [loadCart]);
	
	useEffect(() => {
		setFilteredProducts(cart?.products || []);
		
		return () => {
			setFilteredProducts([]);
		}
	}, [cart?.products]);

	const handleFilterList = useCallback((filter: string) => {
		const filteredList = cart?.products.filter(product => 
			product
				.name
				.toLocaleLowerCase()
				.includes(filter.toLocaleLowerCase())
		) || [];
		
		setFilteredProducts(filteredList);
	}, [cart]);

	async function handleConfirmCart() {
		try {
			setIsSubmitting(true);
			await CartService.completeSale();
			navigate('/thanks');
		} finally {
			setIsSubmitting(false);
		}
	}

    return {
		isSubmitting,
        handleFilterList,
		handleConfirmCart,
		isLoadingCart,
		cart,
		filteredProducts,
    }
}
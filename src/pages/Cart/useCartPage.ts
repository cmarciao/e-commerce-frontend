import { useCallback, useEffect, useState } from "react";
import { useCart } from "../../hooks/useCart";
import Product from "../../types/Product";
import { useNavigate } from "react-router-dom";

export function useCartPage() {
	const navigate = useNavigate();
    const { cart, loadCart } = useCart();
	const [isLoadingCart, setIsLoadingCart] = useState(true);
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

	function handleConfirmCart() {
		navigate('/thanks');
	}

    return {
        handleFilterList,
		handleConfirmCart,
		isLoadingCart,
		cart,
		filteredProducts,
    }
}
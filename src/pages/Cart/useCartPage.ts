import { useCallback, useEffect, useState } from "react";
import { useCart } from "../../hooks/useCart";
import Product from "../../types/Product";

export function useCartPage() {
    const { cart, loadCart } = useCart();
	const [isLoadingCart, setIsLoadingCart] = useState(true);
	const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

	useEffect(() => {
		loadCart();
	}, [loadCart]);
	
	useEffect(() => {
		if(cart?.products != null) {
			setIsLoadingCart(false);
		}

		setFilteredProducts(cart?.products || []);
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

    return {
        handleFilterList,
		isLoadingCart,
		cart,
		filteredProducts,
    }
}
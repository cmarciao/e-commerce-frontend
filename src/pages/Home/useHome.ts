import { useCallback, useEffect, useState } from "react";
import Product from "../../types/Product";
import ProductService from "../../services/ProductService";

export function useHome() {
    const [products, setProducts] = useState<Product[]>([]);
	const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
	const [isLoadingProducts, setIsLoadingProducts] = useState(true);

	const loadProducts = useCallback(async () => {
		const products = await ProductService.listProducts();

		setProducts(products);
		setFilteredProducts(products);
		setIsLoadingProducts(false);
	}, []);

	useEffect(() => {
		loadProducts();
	}, [loadProducts]);

	const handleFilterList = useCallback((filter: string) => {
		const filteredList = products.filter(product => 
			product
				.name
				.toLocaleLowerCase()
				.includes(filter.toLocaleLowerCase())
		);

		setFilteredProducts(filteredList);
	}, [products]);

    return {
		handleFilterList,
		isLoadingProducts,
		filteredProducts
	};
}
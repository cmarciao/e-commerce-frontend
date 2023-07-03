import { useState } from "react";
import { toast } from "react-toastify";
import Product from "../../types/Product";
import { useCart } from "../../hooks/useCart";

export function useProductCartItem(product: Product) {
    const [isLoading, setIsLoading] = useState(false);
	const [count, setCount] = useState<number>(0);
	const { handleAddProduct } = useCart();

	function handleIncremmentProduct() {
		setCount(preState => preState + 1);
	}

	function handleDecremmentProduct() {
		setCount(preState =>
			preState === 0
				? preState
				: preState - 1
		);
	}

	async function handleAddProducts() {
		if(count === 0 ) {
			toast.info("Informe a quantidade de produtos.");
			return;
		};
		
		setIsLoading(true);
		
		await handleAddProduct(product, count)
		
		toast.success('Produto cadastrado com sucesso!');

		setIsLoading(false);
		setCount(0);
	}

    return {
		count,
		handleDecremmentProduct,
		handleIncremmentProduct,
		isLoading,
		handleAddProducts
	}
}

import Product from '../../types/Product';
import { Button } from '../Button';

import { useProductCartItem } from './useProductCartItem';
import { ProductInfo } from './components/ProductInfo';

import { ItemProduct } from './styles';

interface ProductItemProps {
    product: Product;
}

export function ProductItem({ product }: ProductItemProps) {
	const {
		count,
		handleDecremmentProduct,
		handleIncremmentProduct,
		isLoading,
		handleAddProducts
	} = useProductCartItem(product);

	return (
		<ItemProduct key={product.id}>
			<img src={product.url_photo} alt="Product" />

			<ProductInfo
				name={product.name}
				amount={count}
				price={product.price}
				stockQuantity={product.stock_quantity}
				onIncremmentProduct={handleIncremmentProduct}
				onDecremmentProduct={handleDecremmentProduct}
			/>

			<Button
				isLoading={isLoading}
				onClick={handleAddProducts}
			>
				Adicionar
			</Button>
		</ItemProduct>
	);
};

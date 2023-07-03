import Product from '../../types/Product';
import { Button } from '../Button';

import { MdOutlineAdd } from 'react-icons/md';
import { HiMinusSm } from 'react-icons/hi';

import { formatCurrency } from '../../utils/formatCurrency';
import { useProductCartItem } from './useProductCartItem';

import { ItemProduct, AreaInfoProduct, LeftArea, ActionButton, RightArea } from './styles';

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
			<AreaInfoProduct>
				<LeftArea>
					<h1>{product.name}</h1>
					<span>
						{formatCurrency(product.price)}
					</span>
				</LeftArea>

				<RightArea>
					<span>{count}</span>

					<div>
						<ActionButton onClick={handleDecremmentProduct} disabled={count === 0}>
							<HiMinusSm size="1.25rem" />
						</ActionButton>

						<ActionButton onClick={handleIncremmentProduct} disabled={count === product.stock_quantity}>
							<MdOutlineAdd size="1.25rem" />
						</ActionButton>
					</div>
				</RightArea>
			</AreaInfoProduct>

			<Button
				title="Adicionar"
				isLoading={isLoading}
				onAction={handleAddProducts}
			/>
		</ItemProduct>
	);
};

import React, { useState } from 'react';

import Product from '../../models/Product';
import Button from '../Button';

import { MdOutlineAdd } from 'react-icons/md';
import { HiMinusSm } from 'react-icons/hi';

import { ItemProduct, AreaInfoProduct, LeftArea, ActionButton, RightArea } from './styles';
import { useCart } from '../../hooks/useCart';

interface ProductItemProps {
    product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }: ProductItemProps) => {
	const [count, setCount] = useState<number>(1);
	const { handleAddProduct } = useCart();

	function handleIncremmentProduct() {
		setCount(preState => preState + 1);
	}

	function handleDecremmentProduct() {
		setCount(preState =>
			preState === 1
				? preState
				: preState - 1
		);
	}

	return (
		<ItemProduct key={product.id}>
			<img src={product.url_photo} alt="Product" />
			<AreaInfoProduct>
				<LeftArea>
					<h1>{product.name}</h1>
					<span>
						{new Intl.NumberFormat('pt-BR', {
							style: 'currency',
							currency: 'BRL'
						}).format(product.price)}
					</span>
				</LeftArea>

				<RightArea>
					<span>{count}</span>

					<div>
						<ActionButton onClick={handleDecremmentProduct} disabled={count === 1}>
							<HiMinusSm size="1.25rem" />
						</ActionButton>

						<ActionButton onClick={handleIncremmentProduct} disabled={count === product.stock_quantity}>
							<MdOutlineAdd size="1.25rem" />
						</ActionButton>
					</div>
				</RightArea>
			</AreaInfoProduct>

			<Button title="Adicionar" handleAction={() => handleAddProduct(product, count)} />
		</ItemProduct>
	);
};

export { ProductItem };

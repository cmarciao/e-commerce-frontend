import Header from '../../components/Header';
import Button from '../../components/Button';

import { ProductCartItem } from '../../components/ProductCartItem';
import { useCart } from '../../hooks/useCart';
import { formatCurrency } from '../../utils/formatCurrency';

import {
	Container,
	Content,
	Informations,
	ProductItemList,
	Summary,
	SummaryContent
} from './styles';
import { useEffect } from 'react';

const MyCarts: React.FC = () => {
	const { cart, loadCart } = useCart();

	useEffect(() => {
		loadCart();
	}, [loadCart]);

	return (
		<Container>
			<Header page="my-carts" name="Mocked Name"/>
			<Content>
				<Informations>
					{cart && cart.products.length > 0 && (
						<>
							<ProductItemList>
								<h1>Sua lista de pedidos</h1>
								<div>
									{cart!.products.map((product) => (
										<ProductCartItem
											key={product.id}
											product={product}
										/>
									))}
								</div>
							</ProductItemList>

							<Summary>
								<h1>Resumo das compras</h1>

								<SummaryContent>
									<p>Você tem {cart!.amount} {cart!.amount === 1 ? 'item' : 'itens'}</p>
									<div>
										<span>Preço total</span>
										<span>
											{formatCurrency(cart!.total)}
										</span>
									</div>
									<div>
										<span>Frete</span>
										<span>Grátis</span>
									</div>

									<hr />

									<div>
										<span>Preço total</span>
										<span>
											{formatCurrency(cart!.total)}
										</span>
									</div>

									<Button title="Confirmar compra" />
								</SummaryContent>
							</Summary></>
					)}
				</Informations>
			</Content>
		</Container>
	);
};

export default MyCarts;

import { Header } from '../../components/Header';
import { Loader } from '../../components/Loader';

import { useCartPage } from './useCartPage';

import { EmptyCart } from './components/EmptyCart';
import { ProductsList } from './components/ProductsList';
import { Summary } from './components/Summary';

import {
	Container,
	Content,
	Informations
} from './styles';

export function Cart() {
	const {
		isSubmitting,
		handleFilterList,
		handleConfirmCart,
		isLoadingCart,
		cart,
		filteredProducts,
	} = useCartPage();

	const hasProducts = cart && filteredProducts.length !== 0;

	return (
		<Container>
			<Header
				page="cart"
				onSearchProduct={handleFilterList}
			/>

			<Loader isLoading={isLoadingCart} />

			{!isLoadingCart && (
				<Content>
					{!hasProducts && <EmptyCart description='Seu carrinho está vazio.'/>}

					{hasProducts && (
						<Informations>
							<ProductsList products={filteredProducts} />

							<Summary
								isLoading={isSubmitting}
								cart={cart}
								onConfirmCart={handleConfirmCart}
							/>
						</Informations>
					)}
				</Content>
			)}
		</Container>
	);
};

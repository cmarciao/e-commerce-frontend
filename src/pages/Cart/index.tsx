import { useCartPage } from './useCartPage';

import { Header } from '../../components/Header';
import { Loader } from '../../components/Loader';

import { Summary } from './components/Summary';
import { EmptyCart } from './components/EmptyCart';
import { ProductsList } from './components/ProductsList';

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
					{!hasProducts && <EmptyCart description='Your cart is empty.'/>}

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

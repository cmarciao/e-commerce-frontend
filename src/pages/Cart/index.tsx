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
		handleFilterList,
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
					{!hasProducts && <EmptyCart />}

					{hasProducts && (
						<Informations>
							<ProductsList products={filteredProducts} />

							<Summary cart={cart} />
						</Informations>
					)}
				</Content>
			)}
		</Container>
	);
};

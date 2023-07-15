import { useHome } from './useProducts';

import { Header } from '../../components/Header';
import { Loader } from '../../components/Loader';
import { ProductsList } from './components/ProdutcsList';
import { EmptyCart } from '../Cart/components/EmptyCart';

import { Container, Content } from './styles';

export function Products() {
	const {
		handleFilterList,
		isLoadingProducts,
		filteredProducts
	} = useHome();

	const hasProducts = filteredProducts.length > 0;

	return (
		<Container>
			<Header
				page="products"
				onSearchProduct={handleFilterList}
			/>
			
			<Loader isLoading={isLoadingProducts} />

			{!isLoadingProducts && (
				<Content>
					{!hasProducts && <EmptyCart description='Oh, we do not have any products.'/>}

					{hasProducts && (
						<ProductsList products={filteredProducts} />
					)}
				</Content>
			)}
		</Container>
	);
};

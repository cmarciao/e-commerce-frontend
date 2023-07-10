import { useHome } from './useProducts';

import { Header } from '../../components/Header';
import { Loader } from '../../components/Loader';
import { ProductsList } from './components/ProdutcsList';

import {
	Container
} from './styles';

export function Products() {
	const {
		handleFilterList,
		isLoadingProducts,
		filteredProducts
	} = useHome();

	return (
		<Container>
			<Header
				page="products"
				onSearchProduct={handleFilterList}
			/>
			
			<Loader isLoading={isLoadingProducts} />

			{!isLoadingProducts && (
				<ProductsList products={filteredProducts} />
			)}
		</Container>
	);
};

import { useHome } from './useHome';

import { Header } from '../../components/Header';
import { Loader } from '../../components/Loader';
import { ProductsList } from './components/ProdutcsList';

import {
	Container
} from './styles';

export function Home() {
	const {
		handleFilterList,
		isLoadingProducts,
		filteredProducts
	} = useHome();

	return (
		<Container>
			<Header
				page="home"
				onSearchProduct={handleFilterList}
			/>
			
			<Loader isLoading={isLoadingProducts} />

			{!isLoadingProducts && (
				<ProductsList products={filteredProducts} />
			)}
		</Container>
	);
};

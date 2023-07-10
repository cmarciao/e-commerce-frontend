import { Header } from "../../components/Header";
import { Loader } from "../../components/Loader";
import { PurchaseItem } from "../../components/PurchaseItem";
import { EmptyCart } from "../Cart/components/EmptyCart";

import { usePurchases } from "./usePurchases";

import { Container, Content, Informations } from "./styles";

export function Purchases() {
	const {
		isLoadingPurchases,
		filteredPurchases,
		handleFilterList
	} = usePurchases();

	const hasProducts = filteredPurchases.length !== 0;

    return (
        <Container>
			<Loader isLoading={isLoadingPurchases} />

			<Header
				page="purchases"
				onSearchProduct={handleFilterList}
			/>

			{!isLoadingPurchases && (
				<Content>
					{!hasProducts && <EmptyCart description="Seu histórico de compras está vazio." />}

					{hasProducts && (
						<Informations>
							<h1>Histórico de compras</h1>

							{filteredPurchases.map((purchase) => (
								<PurchaseItem
									key={purchase.id}
									purchase={purchase}
								/>
							))}
						</Informations>
					)}
				</Content>
			)}
			
		</Container>
    )
}
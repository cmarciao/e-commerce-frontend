import Product from "../../../../types/Product";
import { ProductCartItem } from "../../../../components/ProductCartItem";

import { Container } from "./styles";

interface ProductsListProps {
    products: Product[];
}

export function ProductsList({ products }: ProductsListProps) {
    return (
        <Container>
            <h1>Your shopping cart</h1>
            <div>
                {products.map((product) => (
                    <ProductCartItem
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </Container>
    )
}
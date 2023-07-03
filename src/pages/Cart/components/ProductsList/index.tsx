import { ProductCartItem } from "../../../../components/ProductCartItem";
import Product from "../../../../types/Product";
import { Container } from "./styles";

interface ProductsListProps {
    products: Product[];
}

export function ProductsList({ products }: ProductsListProps) {
    return (
        <Container>
            <h1>Sua lista de pedidos</h1>
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
import { ProductItem } from "../../../../components/ProductItem";
import Product from "../../../../types/Product";

import { Container, Content } from "./styles";

interface ProductsListProps {
    products:Product[];
}

export function ProductsList({ products }: ProductsListProps) {
    return (
        <Container>
            <h1>Hello, welcome</h1>
            <Content>
                {products.map((product) => (
                    <ProductItem
                        key={product.id}
                        product={product}
                    />
                ))}
            </Content>
        </Container>
    );
}

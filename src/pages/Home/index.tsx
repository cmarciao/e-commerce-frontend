import React, { useState, useEffect, useCallback } from "react";

import api from "../../services/api";
import Product from "../../models/Product";

import Header from "../../components/Header";
import { ProductItem } from "../../components/ProductItem";

import {
    Container,
    Content,
    ProductItemList,
} from "./styles";

const Home: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    const loadProducts = useCallback(async () => {
        const response = await api.get('/products');
        const products = response.data;

        setProducts(products);
    }, []);

    useEffect(() => {
        loadProducts();
    }, [loadProducts]);

    function handleProduct() {
        // Not implemeted
    }

    return (
        <Container>
            <Header page="home" name="Mocked Name" />
            <Content>
                <h1>Seja muito bem vindo</h1>
                <ProductItemList>
                    {products.map((product) => (
                        <ProductItem
                            key={product.id}
                            product={product}
                            handleProduct={handleProduct}
                        />
                    ))}
                </ProductItemList>
            </Content>
        </Container>
    );
};

export default Home;

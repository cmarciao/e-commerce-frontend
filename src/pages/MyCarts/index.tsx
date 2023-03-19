import React, { useEffect, useState } from "react";
import Header from "../../components/Header";

import Cart from "../../models/Cart";
import User from "../../models/User";
import Product from "../../models/Product";

import { ProductCartItem } from "../../components/ProductCartItem";
import { Container, Content, Informations, ProductItemList, Summary, SummaryContent } from "./styles";
import Button from "../../components/Button";

const MyCarts: React.FC = () => {
    let allCarts: Cart[] = [];
    const [user, setUser] = useState<User>();
    const [data, setData] = useState<Product[]>([]);

    const productPrice = data.reduce((acc, item) => {
        acc += item.price * item.amount
        return acc
    }, 0);

    const formatedProductPrice = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(productPrice);

    const formatedTotalPrice = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(1938);

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("logged") || "{}"));
    }, []);

    if (data.length === 0) {
        allCarts = JSON.parse(localStorage.getItem("carts") || "[]");
        allCarts.forEach((item) => {
            if (item.idUser === user?.id) {
                setData(item.products || []);
            }
        });
    }

    return (
        <Container>
            <Header page="my-carts" />
            <Content>

                <Informations>
                    <ProductItemList>
                        <h1>Sua lista de pedidos</h1>
                        <div>
                            {data.map((product) => (
                                <ProductCartItem
                                key={product.id}
                                product={product}
                                handleProduct={() => {}}
                                />
                            ))}
                        </div>
                    </ProductItemList>

                    <Summary>
                        <h1>Resumo das compras</h1>

                        <SummaryContent>
                            <p>Você tem {data.length} ite{data.length === 1 ? "m" : "ns"}</p>
                            <div>
                                <span>Preço total</span>
                                <span>{formatedProductPrice}</span>
                            </div>
                            <div>
                                <span>Frete</span>
                                <span>Grátis</span>
                            </div>

                            <hr />

                            <div>
                                <span>Preço total</span>
                                <span>{formatedTotalPrice}</span>
                            </div>

                            <Button title="Confirmar compra" />

                        </SummaryContent>
                    </Summary>
                </Informations>
                
            </Content>
        </Container>
    );
};

export default MyCarts;

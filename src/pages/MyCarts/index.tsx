import React, { useEffect, useState } from "react";

import api from "../../services/api";
import Cart from "../../models/Cart";

import Header from "../../components/Header";
import Button from "../../components/Button";
import { ProductCartItem } from "../../components/ProductCartItem";

import {
    Container,
    Content,
    Informations,
    ProductItemList,
    Summary,
    SummaryContent
} from "./styles";

const MyCarts: React.FC = () => {
    const [carts, setCarts] = useState<Cart>({} as Cart);

    useEffect(() => {
        async function loadCart() {
            const response = await api.get('/carts', {
                headers: {
                    'x-user-id': 'c76ac4b3-afb0-4b1b-ad92-4bf98884c745'
                }
            });

            setCarts(response.data);
        }

        loadCart();
    }, []);

    return (
        <Container>
            <Header page="my-carts" name="Mocked Name"/>
            <Content>
                <Informations>
                    <ProductItemList>
                        <h1>Sua lista de pedidos</h1>
                        <div>
                            {carts.products?.map((product) => (
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
                            <p>Você tem {carts.products?.length} {carts.products?.length === 1 ? 'item' : 'itens'}</p>
                            <div>
                                <span>Preço total</span>
                                <span>
                                    {new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(carts.total)}
                                </span>
                            </div>
                            <div>
                                <span>Frete</span>
                                <span>Grátis</span>
                            </div>

                            <hr />

                            <div>
                                <span>Preço total</span>
                                <span>
                                    {new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(carts.total)}
                                </span>
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

import React, { useState, useEffect } from "react";

import api from "../../services/api";

import Header from "../../components/Header";

import {
    Container,
    Content,
    ProductItemList,
} from "./styles";

import Product from "../../models/Product";
import Cart from "../../models/Cart";
import User from "../../models/User";
import { ProductItem } from "../../components/ProductItem";


const Home: React.FC = () => {
    const [user, setUser] = useState<User>();
    const [data, setData] = useState<Product[]>([]);

    useEffect(() => {
        handelApi();
        setUser(JSON.parse(localStorage.getItem("logged") || "{}"));
    }, []);

    async function handelApi() {
        let response = await api.get("");
        let data = response.data;

        setData(data);
    }

    function handleProduct(product: Product, count: number) {
        let exist: boolean = false;
        let indexCart: number;

        const allCarts: Cart[] = JSON.parse(
            localStorage.getItem("carts") || "[]"
        );

        let myCart: Cart = {};
        allCarts.forEach((item, index) => {
            if (item.idUser === user?.id) {
                myCart = item;
                indexCart = index;
            }
        });

        myCart.products?.forEach((item, index) => {
            if (item.id === product.id) {
                let myAmount: number = item.amount || 0;
                let myProduct: Product = {
                    ...product,
                    amount: myAmount + 1,
                };

                exist = true;
                myCart.products?.splice(index, 1, myProduct);
                allCarts.splice(indexCart, 1, myCart);
            }
        });

        if (!exist) {
            let myProduct: Product = {
                ...product,
                amount: 1,
            };

            if (myCart.idUser === undefined) {
                console.log("aa");
                myCart = {
                    idUser: user?.id,
                    products: [myProduct],
                };

                allCarts.push(myCart);
            } else {
                let a = 0;
                allCarts.forEach((item, index) => {
                    if (item.idUser === user?.id) {
                        a = index;
                    }
                });
                myCart.products?.push(myProduct);
                allCarts.splice(a, 1, myCart);
            }
        }

        localStorage.setItem("carts", JSON.stringify(allCarts));
    }
    

    return (
        <Container>
            <Header page="home" />
            <Content>
                <h1>Seja muito bem vindo</h1>
                <ProductItemList>
                    {data.map((product) => (
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

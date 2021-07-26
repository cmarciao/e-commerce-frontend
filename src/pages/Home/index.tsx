import React, { useState, useEffect } from "react";

import api from "../../services/api";

import Header from "../../components/Header";

import { FaCartPlus } from "react-icons/fa";

import {
    AreaInfoProduct,
    Container,
    Content,
    ItemProduct,
    LeftArea,
    RightArea,
} from "./styles";

import Product from "../../models/Product";
import Cart from "../../models/Cart";
import User from "../../models/User";

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

    function handleProduct(product: Product) {
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
                    id: product.id,
                    name: product.name,
                    amount: myAmount + 1,
                    price: product.price,
                    urlPhoto: product.urlPhoto,
                };

                exist = true;
                myCart.products?.splice(index, 1, myProduct);
                allCarts.splice(indexCart, 1, myCart);
            }
        });

        if (!exist) {
            let myProduct: Product = {
                id: product.id,
                name: product.name,
                amount: 1,
                price: product.price,
                urlPhoto: product.urlPhoto,
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

        console.log(allCarts);
        localStorage.setItem("carts", JSON.stringify(allCarts));
    }

    return (
        <Container>
            <Header page="home" />
            <Content>
                {data.map((product) => (
                    <ItemProduct key={product.id}>
                        <img src={product.urlPhoto} alt="Product" />
                        <AreaInfoProduct>
                            <LeftArea>
                                <h3>{product.name}</h3>
                                <p>
                                    R${" "}
                                    {product.price
                                        ?.toFixed(2)
                                        .replace(".", ",")}
                                </p>
                            </LeftArea>
                            <RightArea>
                                <button onClick={() => handleProduct(product)}>
                                    <FaCartPlus size="1.5rem" />
                                </button>
                            </RightArea>
                        </AreaInfoProduct>
                    </ItemProduct>
                ))}
            </Content>
        </Container>
    );
};

export default Home;

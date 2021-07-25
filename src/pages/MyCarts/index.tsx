import React, { useEffect, useState } from "react";
import Header from "../../components/Header";

import Cart from "../../models/Cart";
import User from "../../models/User";

import {
    Container,
    Content,
    ItemProduct,
    AreaInfoProduct,
    LeftArea,
    RightArea,
    AreaButtons,
} from "./styles";
import Product from "../../models/Product";

const MyCarts: React.FC = () => {
    let allCarts: Cart[] = [];
    const [user, setUser] = useState<User>();
    const [data, setData] = useState<Product[]>([]);

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("logged") || "{}"));
    }, []);

    if (data.length == 0) {
        allCarts = JSON.parse(localStorage.getItem("carts") || "[]");
        allCarts.map((item) => {
            if (item.idUser === user?.id) {
                setData(item.products || []);
            }
        });
    }

    return (
        <Container>
            <Header page="cart" />
            <Content>
                {data.map((product) => (
                    <ItemProduct key={product.id}>
                        <img src={product.urlPhoto} alt="Photo Product" />
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
                                <p>Quant. {product.amount}</p>
                            </RightArea>
                        </AreaInfoProduct>
                    </ItemProduct>
                ))}
            </Content>
        </Container>
    );
};

export default MyCarts;

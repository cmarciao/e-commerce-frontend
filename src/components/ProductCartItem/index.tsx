import React, { useState } from "react";

import Product from "../../models/Product";

import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineAdd } from "react-icons/md";
import { HiMinusSm } from "react-icons/hi"

import {
    Container,
    Content,
    AreaInfoProduct,
    LeftArea,
    ActionButton,
    RightArea
} from "./styles";

interface ProductCartItemProps {
    product: Product;
    handleProduct: (product: Product, count: number) => void;
}

const ProductCartItem: React.FC<ProductCartItemProps> = ({ product, handleProduct }: ProductCartItemProps) => {
    const [count, setCount] = useState<number>(1)

    function handleIncremmentProduct() {
        setCount(preState => preState + 1);
    }

    function handleDecremmentProduct() {
        setCount(preState => 
            preState === 1
            ? preState
            : preState - 1
        );
    }

    return (
        <Container key={product.id}>
            <Content>
                <img src={product.urlPhoto} alt="Product" />
                <AreaInfoProduct>
                    <LeftArea>
                        <h1>{product.name}</h1>
                    </LeftArea>

                    <RightArea>
                        <ActionButton onClick={handleDecremmentProduct} disabled={count === 1}>
                            <HiMinusSm size="1.25rem" />
                        </ActionButton>

                        <span>{count}</span>
                        
                        <ActionButton onClick={handleIncremmentProduct} disabled={count === product.stockQuantity}>
                            <MdOutlineAdd size="1.25rem" />
                        </ActionButton>
                    </RightArea>

                    <span>
                        {new Intl.NumberFormat('pt-BR', {
                            style: "currency",
                            currency: "BRL"
                        }).format(product.price)}
                    </span>

                    <button>
                        <AiOutlineClose />
                    </button>
                </AreaInfoProduct>
            </Content>
        </Container>
    )
}

export { ProductCartItem };
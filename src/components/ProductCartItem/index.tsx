import Product from "../../types/Product";

import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineAdd } from "react-icons/md";
import { HiMinusSm } from "react-icons/hi"

import {
    Container,
    Content,
    AreaInfoProduct,
    LeftArea,
    ActionButton,
    ItemQuantity,
    RightArea
} from "./styles";
import { useCart } from "../../hooks/useCart";
import { formatCurrency } from "../../utils/formatCurrency";
import { useState } from "react";
import { Spinner } from "../Spinner";

interface ProductCartItemProps {
    product: Product;
}

export function ProductCartItem({ product }: ProductCartItemProps) {
    const {handleAddProduct, handleRemoveProduct, handleRemoveCartItem} = useCart();
    const [isLoading, setIsLoading] = useState(false);

    async function handleAdd() {
        setIsLoading(true);
        await handleAddProduct(product, 1);
        setIsLoading(false);
    }

    async function handleRemove() {
        setIsLoading(true);
        await handleRemoveProduct(product);
        setIsLoading(false);
    }

    async function handleRemoveItem() {
        setIsLoading(true);
        await handleRemoveCartItem(product);
        setIsLoading(false);
    }

    const isAddProductButtonDisabled = isLoading || product.amount === 0;
    const isRemoveProductButtonDisabled = isLoading || product.amount === product.stock_quantity;

    return (
        <Container key={product.id}>
            <Content>
                <img src={product.url_photo} alt="Product" />
                <AreaInfoProduct>
                    <LeftArea>
                        <h1>{product.name}</h1>
                    </LeftArea>

                    <RightArea>
                        <ActionButton onClick={handleRemove} disabled={isRemoveProductButtonDisabled}>
                            <HiMinusSm size="1.25rem" />
                        </ActionButton>

                        <ItemQuantity>
                                {isLoading && <Spinner size={8} />}
                                {!isLoading && <span>{product.amount}</span>}
                        </ItemQuantity>
                        
                        <ActionButton onClick={handleAdd} disabled={isAddProductButtonDisabled}>
                            <MdOutlineAdd size="1.25rem" />
                        </ActionButton>
                    </RightArea>

                    <span>
                        {formatCurrency(product.price)}
                    </span>

                    <button disabled={isLoading} onClick={handleRemoveItem}>
                        <AiOutlineClose />
                    </button>
                </AreaInfoProduct>
            </Content>
        </Container>
    )
}

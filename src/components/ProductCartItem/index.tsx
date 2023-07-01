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
import { useCart } from "../../hooks/useCart";

interface ProductCartItemProps {
    product: Product;
}

const ProductCartItem: React.FC<ProductCartItemProps> = ({ product }: ProductCartItemProps) => {
    const {handleAddProduct, handleRemoveProduct, handleRemoveCartItem} = useCart();

    return (
        <Container key={product.id}>
            <Content>
                <img src={product.url_photo} alt="Product" />
                <AreaInfoProduct>
                    <LeftArea>
                        <h1>{product.name}</h1>
                    </LeftArea>

                    <RightArea>
                        <ActionButton onClick={() => handleRemoveProduct(product)} disabled={product.amount === 0}>
                            <HiMinusSm size="1.25rem" />
                        </ActionButton>

                        <span>{product.amount}</span>
                        
                        <ActionButton onClick={() => handleAddProduct(product, 1)} disabled={product.amount === product.stock_quantity}>
                            <MdOutlineAdd size="1.25rem" />
                        </ActionButton>
                    </RightArea>

                    <span>
                        {new Intl.NumberFormat('pt-BR', {
                            style: "currency",
                            currency: "BRL"
                        }).format(product.price)}
                    </span>

                    <button onClick={() => handleRemoveCartItem(product)}>
                        <AiOutlineClose />
                    </button>
                </AreaInfoProduct>
            </Content>
        </Container>
    )
}

export { ProductCartItem };
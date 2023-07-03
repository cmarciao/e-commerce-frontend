import { HiMinusSm } from "react-icons/hi";

import { Container, LeftArea, RightArea, ActionButton } from "./styles";
import { MdOutlineAdd } from "react-icons/md";
import { formatCurrency } from "../../../../utils/formatCurrency";

interface ProductInfoProps {
    name: string;
    price: number;
    amount: number;
    stockQuantity: number;
    onDecremmentProduct: () => void;
    onIncremmentProduct: () => void;
}

export function ProductInfo({
    name,
    price,
    amount,
    stockQuantity,
    onDecremmentProduct,
    onIncremmentProduct
}: ProductInfoProps) {
    return (
        <Container>
            <LeftArea>
                <h1>{name}</h1>
                <span>
                    {formatCurrency(price)}
                </span>
            </LeftArea>

            <RightArea>
                <span>{amount}</span>

                <div>
                    <ActionButton onClick={onDecremmentProduct} disabled={amount === 0}>
                        <HiMinusSm size="1.25rem" />
                    </ActionButton>

                    <ActionButton onClick={onIncremmentProduct} disabled={amount === stockQuantity}>
                        <MdOutlineAdd size="1.25rem" />
                    </ActionButton>
                </div>
            </RightArea>
        </Container>
    );
}
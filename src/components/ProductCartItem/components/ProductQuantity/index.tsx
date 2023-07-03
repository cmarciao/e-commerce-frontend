import { HiMinusSm } from "react-icons/hi";
import { MdOutlineAdd } from "react-icons/md";
import { Spinner } from "../../../Spinner";

import { ActionButton, Container, ItemQuantity } from "./styles";

interface ProductQuantityProps {
    amount: number;
    isLoading: boolean;
    onAddProduct: () => Promise<void>;
    onRemoveProduct: () => Promise<void>;
    isAddProductButtonDisabled: boolean; 
    isRemoveProductButtonDisabled: boolean;
}

export function ProductQuantity({
    amount,
    isLoading,
    onAddProduct,
    onRemoveProduct,
    isAddProductButtonDisabled,
    isRemoveProductButtonDisabled
}: ProductQuantityProps) {
    return (
        <Container>
            <ActionButton onClick={onRemoveProduct} disabled={isRemoveProductButtonDisabled}>
                <HiMinusSm size="1.25rem" />
            </ActionButton>

            <ItemQuantity>
                    {isLoading && <Spinner size={8} />}
                    {!isLoading && <span>{amount}</span>}
            </ItemQuantity>
            
            <ActionButton onClick={onAddProduct} disabled={isAddProductButtonDisabled}>
                <MdOutlineAdd size="1.25rem" />
            </ActionButton>
        </Container>
    )
}
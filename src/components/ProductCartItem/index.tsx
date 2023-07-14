import Product from "../../types/Product";
import { AiOutlineClose } from "react-icons/ai";

import { Modal } from "../Modal";
import { formatCurrency } from "../../utils/formatCurrency";

import { LeftArea } from "./components/LeftArea";
import { ProductQuantity } from "./components/ProductQuantity";

import { useProductCartItem } from "./useProductCartItem";

import {
    Container
} from "./styles";

interface ProductCartItemProps {
    product: Product;
}

export function ProductCartItem({ product }: ProductCartItemProps) {
    const {
        isLoading,
        isDeleteProductModalOpen,
        handleAdd,
        handleRemove,
        handleRemoveItem,
        handleOpenDeleteProductModal,
        handleCancelDeleteProductModal
    } = useProductCartItem(product);

    const isAddProductButtonDisabled = isLoading || product.amount === 0;
    const isRemoveProductButtonDisabled = isLoading || product.amount === product.stock_quantity;

    return (
        <Container key={product.id}>
            <LeftArea
                name={product.name}
                url_photo={product.url_photo}
            />

            <ProductQuantity
                amount={product.amount}
                isLoading={isLoading}
                onAddProduct={handleAdd}
                onRemoveProduct={handleRemove}
                isAddProductButtonDisabled={isAddProductButtonDisabled}
                isRemoveProductButtonDisabled={isRemoveProductButtonDisabled}
            />

            <span>{formatCurrency(product.price)}</span>

            <button disabled={isLoading} onClick={handleOpenDeleteProductModal}>
                <AiOutlineClose />
            </button>

            <Modal
                title="Are you sure you want to delete the product?"
                isVisible={isDeleteProductModalOpen}
                isLoading={isLoading}
                confirmLabel="Exclude"
                cancelLabel="Cancel"
                onCancel={handleCancelDeleteProductModal}
                onConfirm={handleRemoveItem}
            >

            <p>The product <strong>{product.name}</strong> will be deleted from your shopping cart.</p>
            </Modal>
        </Container>
    )
}

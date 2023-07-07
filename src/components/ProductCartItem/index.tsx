import Product from "../../types/Product";

import { Modal } from "../Modal";
import { AiOutlineClose } from "react-icons/ai";
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
                title={`Tem certeza que quer excluir o produto?`}
                isVisible={isDeleteProductModalOpen}
                isLoading={isLoading}
                confirmLabel='Excluir'
                cancelLabel='Cancelar'
                onCancel={handleCancelDeleteProductModal}
                onConfirm={handleRemoveItem}
            >
                <p>Você irá excluir o produto <strong>{product.name}</strong> da sua lista de pedidos no seu carrinho.</p>
            </Modal>
        </Container>
    )
}

import { useState } from "react";
import { useCart } from "../../hooks/useCart";
import Product from "../../types/Product";


export function useProductCartItem(product: Product) {
    const {handleAddProduct, handleRemoveProduct, handleRemoveCartItem} = useCart();
    const [isLoading, setIsLoading] = useState(false);
    const [isDeleteProductModalOpen, setIsDeleteProductModalOpen] = useState(false);

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
        setIsDeleteProductModalOpen(false);
    }

    function handleOpenDeleteProductModal() {
        setIsDeleteProductModalOpen(true);
    }

    function handleCancelDeleteProductModal() {
        setIsDeleteProductModalOpen(false);
    }

    return {
        isLoading,
        isDeleteProductModalOpen,
        handleAdd,
        handleRemove,
        handleRemoveItem,
        handleOpenDeleteProductModal,
        handleCancelDeleteProductModal,
    }
}
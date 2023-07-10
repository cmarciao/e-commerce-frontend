import Cart from "../../../../types/Cart";
import { formatCurrency } from "../../../../utils/formatCurrency";

import { Modal } from "../../../../components/Modal";
import { Button } from "../../../../components/Button";

import { Container, Content } from "./styles";
import { useState } from "react";

interface SummaryProps {
    isLoading: boolean;
    cart: Cart;
    onConfirmCart: () => void;
}

export function Summary({ isLoading, cart, onConfirmCart }: SummaryProps) {
    const [isConfirmCartModalOpen, setIsConfirmCartModalOpen] = useState(false);

    function handleOpenConfirmCartModal() {
        setIsConfirmCartModalOpen(true);   
    }

    function handleCloseConfirmCartModal() {
        setIsConfirmCartModalOpen(false);   
    }

    return (
        <Container>
            <h1>Resumo das compras</h1>

            <Content>
                <p>Você tem {cart.amount} {cart.amount === 1 ? 'item' : 'itens'}</p>
                <div>
                    <span>Preço total</span>
                    <span>
                        {formatCurrency(cart.total)}
                    </span>
                </div>
                <div>
                    <span>Frete</span>
                    <span>Grátis</span>
                </div>

                <hr />

                <div>
                    <span>Preço total</span>
                    <span>
                        {formatCurrency(cart.total)}
                    </span>
                </div>

                <Button onClick={handleOpenConfirmCartModal} >
                    Confirmar compra
                </Button>
            </Content>

            <Modal
                title="Confirmar a compra?"
                isVisible={isConfirmCartModalOpen}
                isLoading={isLoading}
                confirmLabel="Confirmar"
                cancelLabel="Cancelar"
                onConfirm={onConfirmCart}
                onCancel={handleCloseConfirmCartModal}
            >
                <p>Deseja finalizar as suas compras?</p>
            </Modal>
        </Container>
    )
}
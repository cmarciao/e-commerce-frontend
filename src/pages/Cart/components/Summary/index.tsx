import { useState } from "react";
import Cart from "../../../../types/Cart";
import { formatCurrency } from "../../../../utils/formatCurrency";

import { Modal } from "../../../../components/Modal";
import { Button } from "../../../../components/Button";

import { Container, Content } from "./styles";

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
            <h1>Summary of purchases</h1>

            <Content>
                <p>You have {cart.amount} {cart.amount === 1 ? 'item' : 'items'}</p>
                <div>
                    <span>Total price</span>
                    <span>
                        {formatCurrency(cart.total)}
                    </span>
                </div>
                <div>
                    <span>Freight</span>
                    <span>Free</span>
                </div>

                <hr />

                <div>
                    <span>Final price</span>
                    <span>
                        {formatCurrency(cart.total)}
                    </span>
                </div>

                <Button onClick={handleOpenConfirmCartModal} >
                    Confirm purchase
                </Button>
            </Content>

            <Modal
                title="Confirm the purchase?"
                isVisible={isConfirmCartModalOpen}
                isLoading={isLoading}
                confirmLabel="Confirm"
                cancelLabel="Cancel"
                onConfirm={onConfirmCart}
                onCancel={handleCloseConfirmCartModal}
            >
                <p>Want to finalize your purchases?</p>
            </Modal>
        </Container>
    )
}
import Cart from "../../../../types/Cart";
import { formatCurrency } from "../../../../utils/formatCurrency";

import { Button } from "../../../../components/Button";

import { Container, Content } from "./styles";

interface SummaryProps {
    cart: Cart;
    onConfirmCart: () => void;
}

export function Summary({ cart, onConfirmCart }: SummaryProps) {
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

                <Button
                    title="Confirmar compra"
                    onAction={onConfirmCart}
                />
            </Content>
        </Container>
    )
}
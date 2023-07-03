import emptyCartImg from '../../../../assets/empty-cart.png';

import { Container } from "./styles";

export function EmptyCart() {
    return (
        <Container>
            <img src={emptyCartImg} alt="" />
            <h1>Seu carrinho está vazio.</h1>
        </Container>
    )
}
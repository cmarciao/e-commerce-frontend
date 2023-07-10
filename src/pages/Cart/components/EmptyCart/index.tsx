import emptyCartImg from '../../../../assets/empty-cart.png';

import { Container } from "./styles";

interface EmptyProps {
    description: string;
}

export function EmptyCart({ description }: EmptyProps) {
    return (
        <Container>
            <img src={emptyCartImg} alt="" />
            <h1>{description}</h1>
        </Container>
    )
}
import { Link } from "react-router-dom";
import { Button } from "../../../../components/Button";

import { Container, Content, AreaButton } from "./styles";

export function LeftArea() {
    return (
        <Container>
            <Content>
                <div>
                    <h1>Entre agora</h1>
                    <p>Está na hora de você ver os melhores preços que o mercado pode oferecer sobre tecnologia em um só lugar, acesse agora a nossa plataforma usando seu email e senha de cadastro. Tenha um bom uso!</p>
                </div>

                <AreaButton>
                    <Link to="/">
                        <Button title="Voltar" />
                    </Link>
                </AreaButton>
            </Content>
        </Container>
    )
}
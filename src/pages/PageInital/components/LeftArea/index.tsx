import { Link } from "react-router-dom";
import { Button } from "../../../../components/Button";

import { AreaButton, Container, Content } from "./styles";

export function LeftArea() {
    return (
       <Container>
            <Content>
                <div>
                    <h1>Bem Vindo ao</h1>
                    <h1>E-commerce Vtex</h1>
                    <p>Faça o seu cadastro ou realize o seu Login para começar a ter
                        acesso aos nossos produtos. Aqui você encontra os melhores
                        produtos de tecnologias com os melhores preços do mercado, não
                        perca mais tempo e acesso nossa plataforma.
                    </p>
                </div>

                <AreaButton>
                    <Link to="/register">
                        <Button title="Cadastrar" />
                    </Link>
                    <Link to="/login">
                        <Button title="Fazer login" />
                    </Link>
                </AreaButton>
            </Content>
        </Container>
    )
}

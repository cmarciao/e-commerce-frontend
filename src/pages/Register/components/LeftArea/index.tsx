import { Link } from "react-router-dom";
import { Button } from "../../../../components/Button";
import { AreaButton, Container, Content } from "./styles";

export function LeftArea() {
    return (
        <Container>
            <Content>
                <div>
                    <h1>Faça seu Cadastro</h1>
                    <p>Para começar a acessar nossa plataforma crie um login com email e senha, e então poderá se aventurar pela maior plataforma de E-commerce do mundo!.
                    </p>
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
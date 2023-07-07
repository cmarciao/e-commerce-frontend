import { Link } from "react-router-dom";

import thanksImg from '../../assets/thanks.png';

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

import { useThanks } from "./useThanks";

import { Container, Content } from "./styles";

export function Thanks() {
    const { isNameLoading } = useThanks();

    if(isNameLoading) return null;

    return (
        <Container>
            <Header
                page="thanks"
            />

            <Content>
                <img src={thanksImg} alt="" />

                <h1>Muito obrigado!</h1>
                <p>Agradeço por ter usado esse meu mini e-commerce, espero que tenha gostado. 🙃</p>

                <Link to={"/home"}>
                    <Button>
                        Voltar para página inicial
                    </Button>
                </Link>
            </Content>
        </Container>
    );
}
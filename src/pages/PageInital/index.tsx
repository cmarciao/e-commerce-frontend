import React from "react";
import Button from "../../components/Button";
import { Link, useHistory } from "react-router-dom";

import { Container, Content, LeftArea, RightArea } from "./styles";
import Title from "../../components/Title";
import User from "../../models/User";

const PageInital: React.FC = () => {
    const history = useHistory();
    const logged: User = JSON.parse(localStorage.getItem("logged") || "{}");

    if (logged.name != null) {
        history.push("/home");
    }

    return (
        <Container>
            <Content>
                <LeftArea>
                    <Title
                        title="Bem Vindo ao"
                        othertitle="E-commerce Vtex"
                        subtitle="Faça o seu cadastro ou realize o seu Login para começar a ter
                acesso aos nossos produtos. Aqui você encontra os melhores
                produtos de tecnologias com os melhores preços do mercado, não
                perca mais tempo e acesso nossa plataforma."
                    >
                        <Link to="/register">
                            <Button title="Cadastrar" />
                        </Link>
                        <Link to="/login">
                            <Button title="Fazer login" />
                        </Link>
                    </Title>
                </LeftArea>
                <RightArea>
                    <img
                        src="https://www.allcontab.com.br/wp-content/uploads/2019/09/offices.png"
                        alt=""
                    />
                </RightArea>
            </Content>
        </Container>
    );
};

export default PageInital;

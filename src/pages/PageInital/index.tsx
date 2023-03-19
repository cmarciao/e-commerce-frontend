import React from "react";
import { Link, useNavigate } from "react-router-dom";

import User from "../../models/User";
import Title from "../../components/Title";
import Button from "../../components/Button";

import InitialBanner from "../../assets/initial-banner.png"

import { Container, Content, LeftArea, RightArea } from "./styles";

const PageInital: React.FC = () => {
    const navigate = useNavigate();
    const logged: User = JSON.parse(localStorage.getItem("logged") || "{}");

    if (logged.name != null) {
        navigate("/home");
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
                        src={InitialBanner}
                        alt=""
                    />
                </RightArea>
            </Content>
        </Container>
    );
};

export default PageInital;

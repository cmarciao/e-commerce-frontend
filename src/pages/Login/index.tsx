import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import Title from "../../components/Title";

import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineLock } from "react-icons/ai";

import {
    Container,
    Content,
    LeftArea,
    RightArea,
    ItemInput,
    AreaButton,
} from "./styles";
import User from "../../models/User";

const Login: React.FC = () => {
    const navigate = useNavigate();
    const logged: User = JSON.parse(localStorage.getItem("logged") || "{}");

    if (logged.name != null) {
        navigate("/home");
    }

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    let found = false;

    function handleLogin() {
        if (validateDatas()) {
            alert("Preencha todos os campos!");
            return;
        }

        let users: User[] = JSON.parse(localStorage.getItem("users") || "[]");

        users.forEach((user) => {
            if (user.email === email && user.password === password) {
                navigate("/home");
                localStorage.setItem("logged", JSON.stringify(user));
                found = true;

                return;
            }
        });

        if (!found) alert("Usuário não encontrado!");
    }

    function validateDatas() {
        if (email != null && password != null) {
            return false;
        }

        return true;
    }

    return (
        <Container>
            <Content>
                <LeftArea>
                    <Title
                        title="Entre agora"
                        subtitle="Está na hora de você ver os melhores preços que o mercado pode oferecer sobre tecnologia em um só lugar, acesse agora a nossa plataforma usando seu email e senha de cadastro. Tenha um bom uso!"
                    >
                        <Link to="/">
                            <Button title="Voltar" />
                        </Link>
                    </Title>
                </LeftArea>
                <RightArea>
                    <form onSubmit={handleLogin}>
                        <div>
                            <ItemInput>
                                <HiOutlineMail size="2rem" />
                                <input
                                    type="email"
                                    placeholder="Informe seu email"
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                />
                            </ItemInput>

                            <ItemInput>
                                <AiOutlineLock size="2rem" />
                                <input
                                    type="password"
                                    placeholder="Informe sua senha"
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                />
                            </ItemInput>
                        </div>

                        <AreaButton>
                            <Button title="Entrar" type="submit" />
                        </AreaButton>
                    </form>

                    <Link to="/">
                        <Button title="Voltar" />
                    </Link>
                </RightArea>
            </Content>
        </Container>
    );
};

export default Login;

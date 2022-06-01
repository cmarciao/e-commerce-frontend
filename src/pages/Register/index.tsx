import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import User from "../../models/User";

import Button from "../../components/Button";
import Title from "../../components/Title";

import { FiUser } from "react-icons/fi";
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

const Register: React.FC = () => {
    const navigate = useNavigate();
    const logged: User = JSON.parse(localStorage.getItem("logged") || "{}");

    if (logged.name != null) {
        navigate("/home");
    }

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    function handleRegister() {
        if (validateDatas()) {
            alert("Preencha todos os campos!");
            return;
        }

        let users: User[] = JSON.parse(localStorage.getItem("users") || "[]");
        let validate: boolean = false;

        let myId: number = 0;
        users.forEach((item) => {
            if (item.email === email) {
                validate = true;
                return;
            }
            myId++;
        });

        if (validate) {
            alert("Usuário já cadastrado!");
            return;
        }

        const user: User = {
            id: myId,
            name: name,
            email: email,
            password: password,
        };

        users.push(user);

        localStorage.setItem("users", JSON.stringify(users));

        alert("Usuário cadastrado com sucesso!");
        navigate("/login");
    }

    function validateDatas() {
        if (name != null && email != null && password != null) {
            return false;
        }

        return true;
    }

    return (
        <Container>
            <Content>
                <LeftArea>
                    <Title
                        title="Faça seu Cadastro"
                        subtitle="Para começar a acessar nossa plataforma crie um login com email e senha, e então poderá se aventurar pela maior plataforma de E-commerce do mundo!."
                    >
                        <Link to="/">
                            <Button title="Voltar" />
                        </Link>
                    </Title>
                </LeftArea>
                <RightArea>
                    <form>
                        <ItemInput>
                            <FiUser size="2rem" />
                            <input
                                type="text"
                                placeholder="Informe seu nome"
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                            />
                        </ItemInput>

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

                        <AreaButton>
                            <Button title="Cadastrar" props={handleRegister} />
                        </AreaButton>
                    </form>
                </RightArea>
            </Content>
        </Container>
    );
};

export default Register;

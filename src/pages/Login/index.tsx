import React, { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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

    function formValidate(): Boolean {
        return !(!email && !password);
    }

    function handleLogin(e: FormEvent) {
        e.preventDefault();

        if (!formValidate()) {
            toast.info("Preencha todos os campos!");
            return;
        }

        toast.promise<string, string, string>(new Promise((resolve, reject) => {
            setTimeout(() => {
                let users: User[] = JSON.parse(localStorage.getItem("users") || "[]");

                users.forEach((user) => {
                    if (user.email === email && user.password === password) {
                        localStorage.setItem("logged", JSON.stringify(user));
                        found = true;
                        
                        resolve("Seja bem vindo");
                    }
                });
                
                if (!found) reject("Usuário não encontrado!");
            }, 1000 * 2);
        }), {
            pending: "Espere um momento",
            success: {
                render({ data }) {
                    navigate("/home");
                    
                    return data;
                }
            },
            error: {
                render(err) {
                    return err.data;
                }
            }
        });
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

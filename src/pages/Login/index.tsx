import React, { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Cookies from 'js-cookie';

import { useErrors } from "../../hooks/useErrors";
import api from "../../services/api";
import isEmailValid from "../../utils/isEmailValid";

import Title from "../../components/Title";
import Button from "../../components/Button";
import { Input } from "../../components/Input";

import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineLock } from "react-icons/ai";

import {
    Container,
    Content,
    LeftArea,
    RightArea,
    AreaButton,
} from "./styles";

const Login: React.FC = () => {
    const navigate = useNavigate();
    const { setError, getErrorByFieldName, removeError } = useErrors();
    
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    function checkIfIsEmailValid(email: string): boolean {
        if(!email) {
            setError({ field: "email", message: "Informe o seu email."});
            return false;
        }

        if(!isEmailValid(email)) {
            setError({ field: "email", message: "O email não é válido."});
            return false;
        }

        removeError("email");

        return true;
    }

    function checkIfIsPasswordValid(password: string) {
        if(password.length < 8) {
            setError({ field: "password", message: "A senha deve ter mais de 8 caracteres."});
            return false;
        }

        removeError("password");

        return true;
    }

    function formValidate(): Boolean {
        const isEmailValid = checkIfIsEmailValid(email); 
        const isPasswordValid = checkIfIsPasswordValid(password);
        
        return  isEmailValid && isPasswordValid; 
    }

    function handleLogin(e: FormEvent) {
        e.preventDefault();

        if (!formValidate()) return;

        toast.promise(api.post('/', {
            email, password
        }), {
            success: {
                render({ data }) {   
                    navigate("/home");
                    
                    Cookies.set(
                        'token',
                        `${data?.data}`,
                        { expires: 1 }
                    );
                    
                    return "Seja bem vindo!";
                }
            },
            pending: 'Validando usuário...',
            error: 'Email ou senha incorretos!'
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
                    <form noValidate onSubmit={handleLogin}>
                        <div>
                            <Input
                                Icon={HiOutlineMail}
                                type="email"
                                error={getErrorByFieldName("email")}
                                placeholder="Informe seu email"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />

                            <Input
                                Icon={AiOutlineLock}
                                type="password"
                                error={getErrorByFieldName("password")}
                                placeholder="Informe sua senha"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
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

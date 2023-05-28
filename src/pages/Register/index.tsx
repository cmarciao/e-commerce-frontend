import React, { FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import User from "../../models/User";
import { useErrors } from "../../hooks/useErrors";
import isEmailValid from "../../utils/isEmailValid";

import Title from "../../components/Title";
import Button from "../../components/Button";
import { Input } from "../../components/Input";

import { FiUser } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineLock } from "react-icons/ai";

import {
    Container,
    Content,
    LeftArea,
    RightArea,
    AreaButton,
} from "./styles";
import api from "../../services/api";

const Register: React.FC = () => {
    const navigate = useNavigate();
    const { setError, getErrorByFieldName, removeError } = useErrors();

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    
    useEffect(() => {
        const logged: User = JSON.parse(localStorage.getItem("logged") || "{}");

        if (logged.name != null) {
            navigate("/home");
        }
    }, [navigate]);

    function checkIfIsNameValid(name: string) {
        if(!name) {
            setError({ field: "name", message: "Informe o seu nome."});
            return false;
        }

        removeError('name');

        return true;
    }

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
        return checkIfIsNameValid(name)
            && checkIfIsEmailValid(email) 
            && checkIfIsPasswordValid(password);
    }

    function handleRegister(e: FormEvent) {
        e.preventDefault();

        if (!formValidate()) return;
        
        toast.promise(api.post('/users', {
            name, email, password
        }), {
            success: {
                render() {   
                    navigate("/login");
                    return "Usuário cadastrado!";
                }
            },
            pending: 'Cadastrando usuário...',
            error: 'Erro ao cadastrar usuário'
        });
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
                    <form noValidate onSubmit={handleRegister}>
                        <div>
                            <Input
                                Icon={FiUser}
                                type="text"
                                error={getErrorByFieldName("name")}
                                placeholder="Informe seu nome"
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                            />

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
                            <Button title="Cadastrar" type="submit" />
                        </AreaButton>
                    </form>

                    <Link to="/">
                        <Button title="Voltar" />
                    </Link>
                </RightArea>
            </Content>
        </Container>
    );
}

export default Register;
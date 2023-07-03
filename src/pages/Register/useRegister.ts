import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useErrors } from "../../hooks/useErrors";
import isEmailValid from "../../utils/isEmailValid";
import UserService from "../../services/UserService";

export function useRegister() {
    const navigate = useNavigate();
    const { setError, getErrorByFieldName, removeError } = useErrors();

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

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
        
        toast.promise(UserService.createUser(name, email, password), {
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

    return {
        getErrorByFieldName,
        handleRegister,
        setName,
        setEmail,
        setPassword
    };
}
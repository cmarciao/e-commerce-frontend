import { useNavigate } from "react-router-dom";
import { useErrors } from "../../hooks/useErrors";
import { FormEvent, useState } from "react";
import isEmailValid from "../../utils/isEmailValid";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import AuthService from "../../services/AuthService";

export function useLogin() {
    const navigate = useNavigate();
    const { setError, getErrorByFieldName, removeError } = useErrors();
    
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false);

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

    async function handleLogin(e: FormEvent) {
        e.preventDefault();

        if (!formValidate()) return;

        setIsLoading(true);

        try {
            const response = await AuthService.login(email, password)
            const token = response.data;
            
            Cookies.set('token', token,{
                expires: 1
            });

            navigate("/home");
                    
            toast.success('Seja bem vindo!');
        } catch {
            toast.error('Email ou senha incorretos!');
        } finally {
            setIsLoading(false);
        }
    }

    return {
        handleLogin,
        isLoading,
        getErrorByFieldName,
        setEmail,
        setPassword
    }
}
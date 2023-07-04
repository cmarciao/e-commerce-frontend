import { Input } from "../../../../components/Input";

import { FiUser } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineLock } from "react-icons/ai";

import { AreaButton, Container } from "./styles";
import { Button } from "../../../../components/Button";
import { Dispatch, FormEvent, SetStateAction } from "react";

interface RightAreaProps {
    onRegister: (e: FormEvent) => void;
    getErrorByFieldName: (fieldName: string) => string;
    setName: Dispatch<SetStateAction<string>>;
    setEmail: Dispatch<SetStateAction<string>>;
    setPassword: Dispatch<SetStateAction<string>>;
    isLoading: boolean;
}

export function RightArea({
    onRegister,
    getErrorByFieldName,
    setName,
    setEmail,
    setPassword,
    isLoading
}: RightAreaProps) {
    return (
        <Container>
            <form noValidate onSubmit={onRegister}>
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
                    <Button
                        title="Cadastrar"
                        type="submit" 
                        isLoading={isLoading}
                    />
                </AreaButton>
            </form>
        </Container>
    )
}
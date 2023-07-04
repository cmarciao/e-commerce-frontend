import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineLock } from "react-icons/ai";

import { Input } from "../../../../components/Input";
import { Button } from "../../../../components/Button";

import { AreaButton, Container } from "./styles";
import { Dispatch, FormEvent, SetStateAction } from "react";

interface RightAreaProps {
    onLogin: (e: FormEvent<Element>) => void;
    getErrorByFieldName: (fieldName: string) => string;
    setEmail: Dispatch<SetStateAction<string>>;
    setPassword: Dispatch<SetStateAction<string>>;
    isLoading: boolean;
}

export function RightArea({
    onLogin,
    getErrorByFieldName,
    setEmail,
    setPassword,
    isLoading
}: RightAreaProps) {
    return (
        <Container>
            <form noValidate onSubmit={onLogin}>
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
                    <Button
                        title="Entrar"
                        type="submit"
                        isLoading={isLoading}
                    />
                </AreaButton>
            </form>
        </Container>
    )
}

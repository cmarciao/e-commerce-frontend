import { InputHTMLAttributes } from "react";
import { IconType } from "react-icons";

import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    Icon: IconType;
    error: string;
}

export function Input({ Icon, error, ...props }: InputProps) {
    return (
        <Container error={Boolean(error)}>
            <div>
                <Icon  size="2rem" />

                <input
                    {...props}
                />                
            </div>

            <small>{error}</small>
        </Container>
    )
}
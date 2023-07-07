import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Spinner } from "../Spinner";
import { ButtonContainer } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    isLoading?: boolean;
    children: ReactNode;
}

export function Button({
    isLoading = false,
    children,
    ...props
}: ButtonProps){
    return (
        <ButtonContainer
            disabled={isLoading}
            {...props}
        >
            {isLoading && (
                <Spinner size={16}/>
            )}

            {!isLoading && children}
        </ButtonContainer>
    )
};

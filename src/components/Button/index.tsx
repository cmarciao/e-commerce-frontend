import React, { ButtonHTMLAttributes } from "react";

import { ButtonContainer } from "./styles";
import { Spinner } from "../Spinner";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    isLoading?: boolean;
    onAction?: () => void;
}

export function Button({ title, isLoading = false, onAction, ...props }: ButtonProps){
    return (
        <ButtonContainer {...props} onClick={onAction} disabled={isLoading}>
            {isLoading && (
                <Spinner size={16}/>
            )}

            {!isLoading && title}
        </ButtonContainer>
    )
};

import React, { ButtonHTMLAttributes } from "react";

import { ButtonContainer } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    handleAction?: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, handleAction, ...props }) => {
    return <ButtonContainer {...props} onClick={handleAction}>{title}</ButtonContainer>;
};

export default Button;

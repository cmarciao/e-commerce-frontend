import React from "react";

import { ButtonContainer } from "./styles";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    title: string;
    props?: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, props }) => {
    return <ButtonContainer onClick={props}>{title}</ButtonContainer>;
};

export default Button;

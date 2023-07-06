import { Spinner } from "../Spinner";
import { ButtonContainer } from "./styles";

interface ButtonProps {
    title: string;
    type?: 'submit' | 'button' | 'reset';
    isLoading?: boolean;
    onAction?: () => void;
}

export function Button({
    title,
    type = 'button',
    isLoading = false,
    onAction,
    ...props
}: ButtonProps){
    return (
        <ButtonContainer
            onClick={onAction}
            disabled={isLoading}
            type={type}
            {...props}
        >
            {isLoading && (
                <Spinner size={16}/>
            )}

            {!isLoading && title}
        </ButtonContainer>
    )
};

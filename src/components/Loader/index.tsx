import { Spinner } from "../Spinner";
import { Container } from "./styles";

interface LoaderProps {
    isLoading: boolean;
}

export function Loader({ isLoading }: LoaderProps) {
    if(!isLoading) return null;

    return (
        <Container>
            <Spinner size={48}/>
        </Container>
    );
}
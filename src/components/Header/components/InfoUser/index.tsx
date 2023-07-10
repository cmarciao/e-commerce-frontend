import { FaUserCircle } from "react-icons/fa";
import { Container } from "./styles";

interface InfoUserProps {
    name: string;
}

export function InfoUser({ name }: InfoUserProps) {
    return (
        <Container>
            <FaUserCircle size="2.5rem" />
            <h3>{name}</h3>
        </Container>
    )
}
import { FaUserCircle } from "react-icons/fa";
import { Container } from "./styles";

interface InfoUserProps {
    formatedName: string;
}

export function InfoUser({ formatedName }: InfoUserProps) {
    return (
        <Container>
            <FaUserCircle size="2.5rem" />
            <h3>{formatedName}</h3>
        </Container>
    )
}
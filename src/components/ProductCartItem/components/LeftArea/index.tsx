import { Container } from "./styles";

interface LeftAreaProps {
    name: string;
    url_photo: string;
}

export function LeftArea({ name, url_photo }: LeftAreaProps) {
    return (
        <Container>
            <img src={url_photo} alt="Product" />
            <h1>{name}</h1>
        </Container>
    )
}
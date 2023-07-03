import InitialBanner from "../../../../assets/initial-banner.png";
import { Container } from "./styles";

export function RightArea() {
    return (
        <Container>
            <img
                src={InitialBanner}
                alt=""
            />
        </Container>
    )
}

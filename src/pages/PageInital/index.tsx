import { LeftArea } from "./components/LeftArea";
import { RightArea } from "./components/RightArea";

import {
    Container,
    Content
} from "./styles";

export function PageInital() {
    return (
        <Container>
            <Content>
                <LeftArea />
                <RightArea />
            </Content>
        </Container>
    );
};

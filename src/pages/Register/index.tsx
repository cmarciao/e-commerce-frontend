import { useRegister } from "./useRegister";

import { LeftArea } from "./components/LeftArea";
import { RightArea } from "./components/RightArea";

import {
    Container,
    Content
} from "./styles";

export function Register() {
    const {
        getErrorByFieldName,
        handleRegister,
        setName,
        setEmail,
        setPassword,
    } = useRegister();

    return (
        <Container>
            <Content>
                <LeftArea />
                
                <RightArea
                    onRegister={handleRegister}
                    getErrorByFieldName={getErrorByFieldName}
                    setName={setName}
                    setEmail={setEmail}
                    setPassword={setPassword}
                />
            </Content>
        </Container>
    );
}

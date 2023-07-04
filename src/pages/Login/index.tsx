import { useLogin } from "./useLogin";

import { LeftArea } from "./components/LeftArea";
import { RightArea } from "./components/RightArea";

import {
    Container,
    Content
} from "./styles";


export function Login() {
    const {
        handleLogin,
        isLoading,
        getErrorByFieldName,
        setEmail,
        setPassword
    } = useLogin();

    return (
        <Container>
            <Content>
                <LeftArea />
                <RightArea
                    onLogin={handleLogin}
                    isLoading={isLoading}
                    getErrorByFieldName={getErrorByFieldName}
                    setEmail={setEmail}
                    setPassword={setPassword}
                />
            </Content>
        </Container>
    );
};

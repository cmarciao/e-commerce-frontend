import { Link } from "react-router-dom";
import { Button } from "../../../../components/Button";
import { AreaButton, Container, Content } from "./styles";

export function LeftArea() {
    return (
        <Container>
            <Content>
                <div>
                    <h1>Register account</h1>
                    <p>To start accessing our platform create a login with email and password, and then you can venture into the largest E-commerce platform in the world!</p>
                </div>

                <AreaButton>
                    <Link to="/">
                        <Button>Back</Button>
                    </Link>
                </AreaButton>
            </Content>
        </Container>
    )
}
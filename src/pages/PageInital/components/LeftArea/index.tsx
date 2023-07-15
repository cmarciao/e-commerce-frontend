import { Link } from "react-router-dom";
import { Button } from "../../../../components/Button";

import { AreaButton, Container, Content } from "./styles";

export function LeftArea() {
    return (
       <Container>
            <Content>
                <div>
                    <h1>Welcome to</h1>
                    <h1>E-commerce</h1>
                    <p>Register or Login to start having
                        access to our products. Here you will find the best
                        technology products with the best prices on the market, do not
                        waste more time and access our platform.
                    </p>
                </div>

                <AreaButton>
                    <Link to="/register">
                        <Button>Register</Button>
                    </Link>
                    <Link to="/login">
                        <Button>Sig In</Button>
                    </Link>
                </AreaButton>
            </Content>
        </Container>
    )
}

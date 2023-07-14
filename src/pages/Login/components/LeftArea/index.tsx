import { Link } from "react-router-dom";
import { Button } from "../../../../components/Button";

import { Container, Content, AreaButton } from "./styles";

export function LeftArea() {
    return (
        <Container>
            <Content>
                <div>
                    <h1>Log in now</h1>
                    <p>The time has come for you to see the best prices that the market can offer in technology in one place, access our platform right now using your registration email and password. Have a good use!</p>
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
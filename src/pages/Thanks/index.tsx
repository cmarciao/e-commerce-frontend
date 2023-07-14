import { Link } from "react-router-dom";

import thanksImg from '../../assets/thanks.png';

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

import { useThanks } from "./useThanks";

import { Container, Content } from "./styles";

export function Thanks() {
    const { isNameLoading } = useThanks();

    if(isNameLoading) return null;

    return (
        <Container>
            <Header
                page="thanks"
            />

            <Content>
                <img src={thanksImg} alt="" />

                <h1>Thank you so much!</h1>
                <p>Thank you for using this mini e-commerce of mine, I hope you enjoyed it. 🙃</p>

                <Link to={"/products"}>
                    <Button>
                        Back to home page
                    </Button>
                </Link>
            </Content>
        </Container>
    );
}
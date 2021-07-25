import React from "react";

import { Container, AreaButton } from "./styles";

type TitleProps = {
    title: string;
    othertitle?: string;
    subtitle: string;
    children: React.ReactNode;
};

const Title: React.FC<TitleProps> = ({
    title,
    othertitle,
    subtitle,
    children,
}: TitleProps) => {
    return (
        <Container>
            <h1>{title}</h1>
            <h1>{othertitle}</h1>
            <p>{subtitle}</p>

            <AreaButton>{children}</AreaButton>
        </Container>
    );
};

export default Title;

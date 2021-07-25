import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primary);

    padding: 0 2%;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    max-width: 1080px;
    width: 100%;
`;

export const LeftArea = styled.div`
    flex: 1;
    padding: 0 2%;
`;

export const RightArea = styled.div`
    flex: 1;
    padding: 0 2%;

    img {
        width: 40rem;
        min-width: 15rem;
    }
`;

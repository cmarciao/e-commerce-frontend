import styled from "styled-components";

export const Container = styled.section`
    flex: 1;
    min-width: 320px;
    width: 100%;

    & >  h1 {
        font-size: 2rem;
    }

    @media(max-width: 430px) {
        min-width: inherit;
    }
`;

export const Content = styled.div `
    display: flex;
    flex-direction: column;
    gap: 1rem;

    border-radius: 8px;
    background-color: white;

    padding: 1rem;
    margin-top: 3rem;

    p {
        color: #1a1a1a;
    }

    & > div {
        display: flex;
        align-items: center;
        justify-content: space-between;


        span {
            font-weight: bold;
            color: #1a1a1a;
        }
    }

    & > button {
        margin-top: 2rem;
    }

    hr + div > span {
        font-size: 1.25rem;
    }
`;

import styled from "styled-components";

export const Container = styled.div`
    background: var(--primary);
    height: max(100vh, auto);
`;

export const Content = styled.div`
    max-width: 1180px;
    width: 100%;
    margin: 0 auto;
    padding: 3rem 1rem 2rem;
`;

export const Informations = styled.section `
    display: flex;
    justify-content: space-between;

    margin-top: 3rem;

    gap: 1.5rem;
    
    @media (max-width: 863px) {
        flex-direction: column-reverse;
    }
`;

export const ProductItemList = styled.div`
    flex: 2.25;

    & > div {
        display: flex;
        flex-direction: column;
        margin-top: 3rem;
        gap: 1rem;
    }  

    & >  h1 {
        font-size: 2rem;
    }
`;

export const Summary = styled.section`
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

export const SummaryContent = styled.div `
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
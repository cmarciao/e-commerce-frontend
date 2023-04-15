import styled from "styled-components";

export const Container = styled.div`
    background: var(--primary);
`;

export const Content = styled.div`
    max-width: 1180px;
    width: 100%;
    
    margin: 0 auto;
    padding: 5rem 2% 2rem;
`;

export const ProductItemList = styled.div`
    display: grid;
    grid-template-areas: 
    "div div div div";
    
    margin-top: 3rem;
    gap: 1rem;

    @media(max-width: 995px) {
        grid-template-areas: "div div div";
        justify-content: space-around;
    }

    @media(max-width: 662px) {
        grid-template-areas: "div div";
        justify-content: space-around;
    }

    @media(max-width: 414px) {
        grid-template-areas: "div";
        justify-content: center;
    }
`;
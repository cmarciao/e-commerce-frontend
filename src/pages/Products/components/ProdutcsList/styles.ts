import styled from "styled-components";

export const Content = styled.div`
    display: grid;
    grid-template-areas: 
    "div div div div";
    justify-content: space-between;
    
    margin-top: 3rem;
    gap: 1rem;

    @media(max-width: 1025px) {
        grid-template-areas: "div div div";
        justify-content: space-between;
    }

    @media(max-width: 750px) {
        grid-template-areas: "div div";
        justify-content: space-evenly;
    }

    @media(max-width: 500px) {
        grid-template-areas: "div";
        justify-content: center;
    }
`;

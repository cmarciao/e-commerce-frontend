import styled from "styled-components";

export const Container = styled.div`
    max-width: 1180px;
    width: 100%;
    
    margin: 0 auto;
`;

export const Content = styled.div`
    padding: 6rem 1rem 2rem;
`;

export const Informations = styled.div`
    & > h1 {
        margin-bottom: 3rem;    
    }

    & > div {
        margin-top: 1rem;
    }
`;
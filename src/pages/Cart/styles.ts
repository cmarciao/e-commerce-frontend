import styled from "styled-components";

export const Container = styled.div`
    max-width: 1180px;
    width: 100%;
    margin: 0 auto;
`;

export const Content = styled.div`
    padding: 3rem 1rem 2rem;
`;

export const Informations = styled.section `
    display: flex;
    justify-content: space-between;

    margin-top: 3rem;

    gap: 1.5rem;
    
    @media (max-width: 903px) {
        flex-direction: column-reverse;
    }
`;

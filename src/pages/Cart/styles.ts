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

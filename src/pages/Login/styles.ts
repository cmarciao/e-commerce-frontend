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
    width: 100%;
    max-width: 1180px;
    display: grid;
    grid-template-columns: 1fr 1fr;

    gap: 3rem;

    @media (max-width: 720px) {
        max-width: 520px;
        width: 100%;
        
        display: flex;
        flex-direction: column;
    }
`;

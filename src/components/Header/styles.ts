import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    max-width: 1180px;
    
    position: fixed;
    background-color: var(--primary);
    
    left: 50%;
    transform: translateX(-50%);
    
    z-index: 1;
    `;

export const Content = styled.div `
    height: 4rem;
    display: flex;
    justify-content: space-between;

    padding: 8px 1rem;
`;

export const ItemInput = styled.div`
    max-width: 30vw;
    min-width: 380px;

    width: 100%;
    
    display: flex;
    align-items: center;
    gap: 0.5rem;

    input {
        width: 100%;
        padding: 15px;
        border-radius: 8px;
        margin: 5px 0;
        color: black;
    }

    @media (max-width: 720px) {
        display: none;
    }
`;

import styled from "styled-components";

export const Container = styled.header`
    width: 100vw;
    position: fixed;
    background-color: var(--primary);

    z-index: 1;
`;

export const Content = styled.div `
    max-width: 1180px;
    
    width: 100%;
    
    margin: 0 auto;

    display: flex;
    justify-content: space-between;

    padding: 8px 2%;
`;

export const InfoUser = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    h3 {
        font-weight: 500;
    }

    @media (max-width: 920px) {
        h3 {
            display: none;
        }
    }

    @media (max-width: 520px) {
        display: none;
    }
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

export const AreaIcons = styled.div`
    display: flex;
    align-items: center;

    gap: 2rem;
    
    a {
        text-align: center;
        
        strong, img {
            display: block;
        }
    }

    button {
        background: none;
    }

    @media (max-width: 520px) {
        margin: 0 auto;
        gap: 4rem;
    }
`;

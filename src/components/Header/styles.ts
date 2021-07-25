import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    justify-content: space-around;
    padding: 5px;

    background-color: var(--primary);
    box-shadow: 1px 1px 10px 1px #1a1a1a;
    position: fixed;
    width: 100vw;
`;

export const InfoUser = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    h3 {
        font-weight: normal;
    }

    @media (max-width: 650px) {
        h3 {
            display: none;
        }
    }

    @media (max-width: 450px) {
        display: none;
    }
`;

export const ItemInput = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    input {
        width: 40vw;
        padding: 15px;
        border-radius: 10px;
        margin: 5px 0;
        color: black;
    }

    @media (max-width: 350px) {
        div {
            display: none;
        }
    }
`;

export const AreaIcons = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;

    button {
        background: none;
    }
`;

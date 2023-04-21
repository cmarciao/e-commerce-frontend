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

export const LeftArea = styled.div`
    display: flex;
    padding: 0 2%;

    @media (max-width: 720px) {
        button {
            display: none;
        }
    }
`;

export const RightArea = styled.div`
    form {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    a {
        display: block;
        margin-top: 1.5rem;

        @media (min-width: 720px) {
            display: none;
        }
    }
`;

export const AreaButton = styled.div`
    text-align: center;
    margin-top: 5.5rem;
`;

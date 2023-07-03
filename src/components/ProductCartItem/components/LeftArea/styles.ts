import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    h1 {
        max-width: 150px;
        width: 100%;
        font-size: 1.25rem;
        color: black;
    }

    @media (max-width: 520px) {
        flex-direction: column;
    }
`;
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
        height: 125px;
        width: 125px;

        object-fit: contain;
        border-radius: 8px;
        background: white;
        border: 3px solid black;
    }


    h1 {
        max-width: 150px;
        width: 100%;
        font-size: 1.25rem;
        color: black;
    }

    @media (max-width: 520px) {
        flex-direction: column;

        h1 {
            max-width: 100%;
        }
    }
`;
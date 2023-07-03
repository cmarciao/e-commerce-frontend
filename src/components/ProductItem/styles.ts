import styled from "styled-components";

export const ItemProduct = styled.div`
    max-width: 275px;
    width: 100%;

    border-radius: 8px;
    padding: .5rem;

    background-color: white;

    img {
        width: 100%;
        height: 250px;
        object-fit: contain;
        border-radius: 8px;
        background: white;
        border: 3px solid black;
    }

    h1 {
        max-width: 170px;
        width: 100%;

        font-size: 1.25rem;
        color: black;

        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        
        @media (max-width: 300px) {
            max-width: 100%;
            white-space: inherit;
        }
    }
`;

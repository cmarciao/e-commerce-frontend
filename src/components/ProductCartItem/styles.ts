import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 1rem;

    border-radius: 8px;
    padding: 8px 1rem;

    background-color: white;
    position: relative;

    & > span {
        display: inline-block;
        font-size: 1.25rem;
        color: black;
    }

    & > button{
        position: absolute;
        right: 1rem;
        top: 1rem;

        svg {
            fill: black;
        } 
    }

    img {
        height: 125px;
        width: 125px;

        object-fit: contain;
        border-radius: 8px;
        background: white;
        border: 3px solid black;
    }

    @media (max-width: 520px) {
        margin: 0 auto;
        flex-direction: column;
    }
`;
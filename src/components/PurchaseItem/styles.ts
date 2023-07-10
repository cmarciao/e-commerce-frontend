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

    & > span {
        display: inline-block;
        font-size: 1.25rem;
        color: black;
        
        strong {
            color: black;
        }
    }

    & > button{
        position: absolute;
        right: 1rem;
        top: 1rem;

        svg {
            fill: black;
        } 
    }

    @media (max-width: 520px) {
        margin: 0 auto;
        flex-direction: column;
    }
`;
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    border-radius: 8px;
    padding: 8px;

    background-color: white;
    position: relative;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;

    img {
        height: 125px;
        width: 125px;

        object-fit: contain;
        border-radius: 8px;
        background: white;
        border: 3px solid black;
    }
`;

export const AreaInfoProduct = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    margin-left: 1rem;
    
    gap: 3rem;

    & > span {
        display: inline-block;
        font-size: 1.2rem;
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

    @media (max-width: 970px) {
        gap: 1rem;
    }

    @media (max-width: 430px) {
        margin: 0 auto;
        flex-direction: column;
    }
`;

export const LeftArea = styled.div`
    h1 {
        max-width: 150px;
        width: 100%;
        font-size: 1.25rem;
        color: black;
    }
`;

export const RightArea = styled.div`
    display: flex;
    align-items: center;

    gap: 1rem;

    & > span {
        text-align: center;
        color: #1a1a1a;
        font-weight: 500;

        border: 1px solid #1a1a1a;
        border-radius: 4px;

        padding: 2px 1rem;
    }
`;

export const ActionButton = styled.button`
    font-size: 0;
        
    display: inline-block;
    background-color: #1a1a1a;
    border-radius: 4px;

    padding: 2px;

    & + button {
        margin-left: .5rem;
    }

    &:disabled {
        opacity: 0.5;
    }
`;
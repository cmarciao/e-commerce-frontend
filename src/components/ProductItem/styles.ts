import styled from "styled-components";

export const ItemProduct = styled.div`
    max-width: 300px;
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
    }
`;

export const AreaInfoProduct = styled.div`
    display: flex;
    justify-content: space-between;

    margin-top: 2rem;
    margin-bottom: 1rem;

    padding: 5px;
`;

export const LeftArea = styled.div`
    flex: 2;

    span {
        display: inline-block;
        margin-top: 10px;
        color: black;
        font-weight: 500;
    }
`;

export const RightArea = styled.div`
    flex: 1;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
        font-size: 1.25rem;
        text-align: center;
        color: #1a1a1a;
        font-weight: 500;

        border: 1px solid black;
        border-radius: 4px;

        padding: 2px .75rem;
    }
`;

export const ActionButton = styled.button`
    font-size: 0;
        
    display: inline-block;
    background-color: #1a1a1a;
    border-radius: 4px;

    margin-top: 0.5rem;

    & + button {
        margin-left: .5rem;
    }

    &:disabled {
        opacity: 0.5;
    }
`;
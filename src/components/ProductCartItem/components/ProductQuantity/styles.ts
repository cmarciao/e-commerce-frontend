import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    gap: 1rem;
`;

export const ItemQuantity = styled.div`
    height: 30px;
    
    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid #1a1a1a;
    border-radius: 4px;
    padding: 4px 2rem;
    
    & > span {
        font-weight: 500;
        color: #1a1a1a;
    }

    & > div {
        color: #1a1a1a;
    }
`;

export const ActionButton = styled.button`
    font-size: 0;
        
    display: inline-block;
    background-color: #1a1a1a;
    border-radius: 4px;

    padding: 4px;

    & + button {
        margin-left: .5rem;
    }

    &:disabled {
        opacity: 0.5;
    }
`;
import styled from "styled-components";

export const ButtonContainer = styled.button`
    width: 100%;
    display: flex;
    justify-content: center;

    padding: 0.875rem 2rem;
    border-radius: 6px;

    color: white;
    font-weight: bold;
    text-transform: uppercase;

    background: linear-gradient(
        90deg,
        rgba(180, 39, 184, 1) 5%,
        rgba(232, 154, 35, 1) 100%
    );

    transition: filter 0.2s;

    &:disabled {
        filter: brightness(0.5);
        cursor: not-allowed;
    }
`;

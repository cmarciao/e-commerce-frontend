import styled from "styled-components";

export const Container = styled.div`
    h1 {
        font-size: 3.5rem;
        white-space: nowrap;
        user-select: none;
    }

    p {
        font-size: 0.875rem;

        margin-top: 1rem;
        letter-spacing: 1px;
        line-height: 1.25rem;
        user-select: none;
    }
`;

export const AreaButton = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;

    margin-top: 2rem;
`;

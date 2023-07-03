import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    h3 {
        max-width: 200px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: 500;
    }

    @media (max-width: 920px) {
        h3 {
            display: none;
        }
    }

    @media (max-width: 520px) {
        display: none;
    }
`;
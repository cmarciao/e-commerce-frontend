import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    gap: 2rem;
    
    a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        gap: 6px;
    }

    button {
        background: none;
    }

    @media (max-width: 800px) {
        margin: 0 auto;
        gap: 4rem;
    }

    @media (max-width: 440px) {
        gap: 2rem;
    }

    @media (max-width: 360px) {
        p, strong {
            display: none !important;
        }
    }
`;

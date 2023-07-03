import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    gap: 2rem;
    
    a {
        text-align: center;
        
        strong, img {
            display: block;
        }
    }

    button {
        background: none;
    }

    @media (max-width: 520px) {
        margin: 0 auto;
        gap: 4rem;
    }
`;

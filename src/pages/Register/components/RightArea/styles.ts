import styled from "styled-components";

export const Container = styled.div`
    form {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    a {
        display: block;
        margin-top: 1.5rem;

        @media (min-width: 720px) {
            display: none;
        }
    }
`;

export const AreaButton = styled.div`
    text-align: center;
    margin-top: 2rem;

    @media (max-width: 720px) {
        margin-top: 5rem;
    }
`;

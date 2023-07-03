import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div > h1 {
        font-size: 3.5rem;
    }

    div > p {
        font-size: 0.875rem;

        margin-top: 1rem;
        letter-spacing: 1px;
        line-height: 1.25rem;
    }
`;

export const AreaButton = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;

    margin-top: 4.5rem;

    a {
        width: 100%;
    }

    @media (max-width: 420px) {
        flex-direction: column;
    }
`;
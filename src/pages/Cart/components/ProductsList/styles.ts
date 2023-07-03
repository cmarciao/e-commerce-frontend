import styled from "styled-components";

export const Container = styled.div`
    flex: 2.25;

    & > div {
        display: flex;
        flex-direction: column;
        margin-top: 3rem;
        gap: 1rem;
    }  

    & >  h1 {
        font-size: 2rem;
    }
`;
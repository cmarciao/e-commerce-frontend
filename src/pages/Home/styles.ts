import styled from "styled-components";

export const Container = styled.div`
    background: var(--primary);
`;

export const Content = styled.div`
    max-width: 1180px;
    width: 100%;
    
    margin: 0 auto;
    padding: 5rem 2% 2rem;
`;

export const ProductItemList = styled.div`
    display: flex;
    flex-wrap: wrap;
    
    margin-top: 3rem;
    
    justify-content: space-between;
    
    gap: 1rem;

    & > div {
        flex: 1 1 250px;
    }

    @media (max-width: 535px) {
        justify-content: space-around;
    }
`;
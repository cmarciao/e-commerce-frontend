import styled from "styled-components";

export const Container = styled.div`
    background: var(--primary);
`;

export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 2%;

    justify-content: space-around;
    gap: 1rem;
    padding: 80px 0;
`;

export const ItemProduct = styled.div`
    border-radius: 10px;
    padding: 5px;

    background-color: white;

    img {
        width: 15rem;
        border-radius: 10px;
        background: white;
        border: 4px solid black;
    }

    h3 {
        font-size: 1.5rem;
        font-family: "Times New Roman", Times, serif;
        color: black;
    }

    p {
        margin-top: 10px;
        color: black;
    }
`;

export const AreaInfoProduct = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 2rem;
    margin-bottom: 1rem;

    padding: 5px;
`;

export const LeftArea = styled.div`
    flex: 2;
`;

export const RightArea = styled.div`
    flex: 1;
    text-align: center;

    button {
        background: black;
        border-radius: 50%;
        padding: 8px;
    }
`;

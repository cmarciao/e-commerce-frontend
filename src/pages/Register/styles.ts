import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primary);

    padding: 0 2%;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 1080px;
    display: flex;
    align-items: center;
`;

export const LeftArea = styled.div`
    flex: 1;
    padding: 0 2%;
`;

export const RightArea = styled.div`
    flex: 1;
`;

export const ItemInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    input {
        width: 70%;
        padding: 15px;
        border-radius: 10px;
        margin: 5px 0;
        color: black;
    }
`;

export const AreaButton = styled.div`
    text-align: center;
    margin-top: 5px;
`;

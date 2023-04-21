import styled, { css } from "styled-components";

interface ContainerProps {
    error: boolean;
}

export const Container = styled.div<ContainerProps>`
    & + & {
        margin-top: 1rem;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        
        input {
            width: 100%;
            color: black;
            
            border: 2px solid white;
            border-radius: 6px;
            
            padding: 1rem;

            ${({ error }) => error && css `
                border: 2px solid rgb(255, 100, 100);
            `}
        }    
    }
    
    small {
        display: block;
        color: rgb(255, 100, 100);
        
        margin: 4px 0 0 2.25rem;
    }
`;
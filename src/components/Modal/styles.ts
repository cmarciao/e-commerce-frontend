import styled, { keyframes, css } from "styled-components";

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    
    to {
        opacity: 1;
    }
`;

const scaleIn = keyframes`
    from {
        transform: scale(0);
    }
    
    to {
        transform: scale(1);
    }
`;

const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    
    to {
        opacity: 0;
    }
`;

const scaleOut = keyframes`
    from {
        transform: scale(1);
    }
    
    to {
        transform: scale(0);
    }
`;

interface AnimationEndProps {
    isLeaving: boolean;
}

export const Overlay = styled.div<AnimationEndProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    inset: 0;

    backdrop-filter: blur(2px);
    background-color: rgba(0, 0, 0, 0.8);

    animation: ${fadeIn} 0.3s;

    z-index: 2;

    ${({ isLeaving }) => isLeaving && css`
        animation: ${fadeOut} 0.2s forwards;
    `};
`;

export const Container = styled.div<AnimationEndProps>`
    max-width: 520px;
    width: 100%;

    border-radius: 8px;
    background: #FAFAFA;

    padding: 1.5rem;

    animation: ${scaleIn} 0.3s;
    
    h1 {
        color: #1a1a1a;
        font-size: 1.75rem;
    }
    
    p, span, strong {
        color: #1a1a1a;
    }

    ${({ isLeaving }) => isLeaving && css`
        animation: ${scaleOut} 0.2s forwards;
    `};
    
    .modal-body {
        margin-top: 2rem;
    }

    footer {
        display: flex;
        justify-content: center;

        margin-top: 3rem;
        gap: 1.5rem;

        button {
            max-width: 200px;
        }
    }
`;
import { ReactNode } from "react";
import { Button } from "../Button";
import { Container, Overlay } from "./styles";
import { ReactPortal } from "../ReactPortal";
import { useAnimatedUmount } from "../../hooks/useAnimatedUmount";

interface ModalProps {
    title: string;
    isVisible: boolean;
    isLoading: boolean;
    children: ReactNode;
    confirmLabel: string;
    cancelLabel: string;
    onCancel: () => void;
    onConfirm: () => void;
}

export function Modal({
    title,
    isVisible,
    isLoading,
    children,
    confirmLabel,
    onCancel,
    cancelLabel,
    onConfirm
}: ModalProps) {
    const { shouldRender, animationRef } = useAnimatedUmount(isVisible);

    if(!shouldRender) {
        return null;
    }

    return (
        <ReactPortal containerId="modal-root">
            <Overlay isLeaving={!isVisible} ref={animationRef}>
                <Container isLeaving={!isVisible}>
                    <h1>{title}</h1>
                    
                    <div className="modal-body">
                        {children}
                    </div>

                    <footer>
                        <Button onClick={onCancel} disabled={isLoading}>
                            {cancelLabel}
                        </Button>
                        <Button
                            onClick={onConfirm}
                            isLoading={isLoading}
                        >
                            {confirmLabel}
                        </Button>
                    </footer>
                </Container>
            </Overlay>
        </ReactPortal>
    )
}
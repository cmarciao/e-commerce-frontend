import { useEffect, useRef, useState } from "react";

export function useAnimatedUmount(isVisible: boolean) {
    const [shouldRender, setShouldRender] = useState(isVisible);
    const animationRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(isVisible) {
            setShouldRender(true);
        }

        function handleAnimationEnd() {
            setShouldRender(false);
        }

        const elementRef = animationRef.current;
        if(elementRef) {
            elementRef.addEventListener('animationend', handleAnimationEnd);
        }

        return () => {
            if(elementRef) {
                elementRef.removeEventListener('animationend', handleAnimationEnd);
            }
        }
    }, [isVisible]);

    return {
        shouldRender,
        animationRef
    }
}
import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth"

export function useThanks() {
    const { loadMe, isNameLoading } = useAuth();

    useEffect(() => {
        loadMe();
    }, [loadMe]);
    
    return {
        isNameLoading
    };
}
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import { useAuth } from "../../hooks/useAuth";

export function useHeader() {
    const navigate = useNavigate();
    const { loadMe, formatedName, clearUser, isNameLoading } = useAuth();
    
    useEffect(() => {
        loadMe();
    }, [loadMe]);

    function handleLogOut() {
        clearUser();
        Cookies.remove('token')
        
        navigate("/login");
    }

    return {
        isNameLoading,
        formatedName,
        handleLogOut
    }
}
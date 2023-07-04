import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import { useAuth } from "../../hooks/useAuth";

export function useHeader() {
    const navigate = useNavigate();
    const { loadMe, formatedName, clearUser } = useAuth();
    const [isNameLoading, setIsNameLoading] = useState(true);
    
    useEffect(() => {
        async function load() {
            setIsNameLoading(true);
            await loadMe();
            setIsNameLoading(false);
        }

        load();
    }, [loadMe]);

    function handleLogOut() {
        clearUser();
        Cookies.remove('token')
        
        navigate("/");
    }

    return {
        isNameLoading,
        formatedName,
        handleLogOut
    }
}
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export function ProtectedRoutes() {
    const { pathname } = useLocation();
    const { isAuth } = useAuth();

    if(isAuth()) {
        if(pathname === '/register' || pathname === '/login' || pathname === '/') {
            return <Navigate to='/home' />
        }
    } else {
        if(pathname === '/cart' || pathname === '/home') {
            return <Navigate to='/' />
        }
    }

    return <Outlet />;
}
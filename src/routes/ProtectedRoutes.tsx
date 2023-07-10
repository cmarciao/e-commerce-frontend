import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";
import { CartProvider } from "../contexts/CartContext";

export function ProtectedRoutes() {
    const { pathname } = useLocation();
    const { isAuth } = useAuth();

    if(isAuth()) {
        const validPathList = ['/products', '/cart', '/purchases', '/thanks'];
        const isValidPath = validPathList.includes(pathname);
    
        return (
            <CartProvider>
                {isValidPath && <Outlet />}
                {!isValidPath && <Navigate to='/products' />}
            </CartProvider>
        );
    }

    const validPathList = ['/register', '/login', '/'];
    const isValidPath = validPathList.includes(pathname);

    return (
        <>
            {isValidPath && <Outlet />}
            {!isValidPath && <Navigate to='/' />}
        </>
    );
}
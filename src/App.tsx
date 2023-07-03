import React from "react";

import { ToastContainer } from "react-toastify";

import { CartProvider } from "./contexts/CartContext";
import { AuthProvider } from "./contexts/AuthContext";



import "./styles/globalcss.css";
import "react-toastify/ReactToastify.min.css";
import { Routes } from "./routes/Routes";

const App: React.FC = () => {
    return (
        <AuthProvider>
            <CartProvider>
                <Routes />

                <ToastContainer
                    theme="dark"
                    position="top-right"
                    autoClose={1000 * 2}
                    closeOnClick
                    pauseOnHover={false}
                    />
                </CartProvider>
        </AuthProvider>
    );
};

export default App;

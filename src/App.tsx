import React from "react";
import { ToastContainer } from "react-toastify";

import { Routes } from "./routes/Routes";
import { AuthProvider } from "./contexts/AuthContext";

import "./styles/globalcss.css";
import "react-toastify/ReactToastify.min.css";

const App: React.FC = () => {
    return (
        <AuthProvider>
                <Routes />

                <ToastContainer
                    theme="dark"
                    position="top-right"
                    autoClose={1000 * 2}
                    closeOnClick
                    pauseOnHover={false}
                    />
        </AuthProvider>
    );
};

export default App;

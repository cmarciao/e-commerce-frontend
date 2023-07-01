import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./pages/Home";
import Login from "./pages/Login";
import MyCarts from "./pages/MyCarts";
import PageInital from "./pages/PageInital/";
import Register from "./pages/Register";

import "./styles/globalcss.css";
import "react-toastify/ReactToastify.min.css";
import { CartProvider } from "./contexts/CartContext";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <CartProvider>
                <Routes>
                    <Route path="/" element={<PageInital />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/my-carts" element={<MyCarts />} />
                </Routes>

                <ToastContainer
                    theme="dark"
                    position="top-right"
                    autoClose={1000 * 2}
                    closeOnClick
                    pauseOnHover={false}
                />
            </CartProvider>
        </BrowserRouter>
    );
};

export default App;

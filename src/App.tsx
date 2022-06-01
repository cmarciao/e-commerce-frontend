import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import MyCarts from "./pages/MyCarts";
import PageInital from "./pages/PageInital/";
import Register from "./pages/Register";

import "./styles/globalcss.css";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageInital />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/my-cart" element={<MyCarts />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;

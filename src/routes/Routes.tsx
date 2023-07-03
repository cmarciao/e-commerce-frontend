import { BrowserRouter, Routes as ReactRoutes, Route } from "react-router-dom";

import { PageInital } from "../pages/PageInital";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { Cart } from "../pages/Cart";

import { ProtectedRoutes } from "./ProtectedRoutes";

export function Routes() {
    return (
        <BrowserRouter>
            <ReactRoutes>
                <Route element={<ProtectedRoutes />} >
                    <Route path="/" element={<PageInital />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                </Route>
            </ReactRoutes>
        </BrowserRouter>
    )
}
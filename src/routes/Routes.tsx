import { BrowserRouter, Routes as ReactRoutes, Route } from "react-router-dom";

import { PageInital } from "../pages/PageInital";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import { Products } from "../pages/Products";
import { Cart } from "../pages/Cart";
import { Thanks } from "../pages/Thanks";
import { Purchases } from "../pages/Purchases";

import { ProtectedRoutes } from "./ProtectedRoutes";

export function Routes() {
    return (
        <BrowserRouter>
            <ReactRoutes>
                <Route element={<ProtectedRoutes />} >
                    <Route path="/" element={<PageInital />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/purchases" element={<Purchases />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/thanks" element={<Thanks />} />
                </Route>
            </ReactRoutes>
        </BrowserRouter>
    )
}
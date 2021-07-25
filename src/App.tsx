import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import MyCarts from "./pages/MyCarts";
import PageInital from "./pages/PageInital/";
import Register from "./pages/Register";

import "./styles/globalcss.css";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={PageInital} exact />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/home" component={Home} />
                <Route path="/my-cart" component={MyCarts} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;

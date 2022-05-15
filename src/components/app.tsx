import * as React from "react";
import NavBar from "./navBar";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./content/home";
import Calculator from "./content/calculator";
import Login from "./content/login";
import Register from "./content/register";
import NotFound from "./content/notFound";

interface AppProps {}

const App: React.FunctionComponent<AppProps> = () => {
    return (
        <React.Fragment>
            <NavBar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/calculator" element={<Calculator />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/404" element={<NotFound />} />
                    <Route path="*" element={<Navigate replace to="/404" />} />
                </Routes>
            </div>
        </React.Fragment>
    );
};

export default App;
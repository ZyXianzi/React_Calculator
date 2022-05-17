import * as React from "react";
import NavBar from "./navBar";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./content/home";
import Calculator from "./content/calculator";
import Login from "./content/login";
import Register from "./content/register";
import NotFound from "./content/notFound";
import $ from "jquery";

interface AppProps {}

const App: React.FunctionComponent<AppProps> = () => {
    const [is_login, setIsLogin] = React.useState(false);
    const [username, setUsername] = React.useState("");

    React.useEffect(() => {
        $.ajax({
            url: "https://app1186.acapp.acwing.com.cn/calculator/get_status/",
            type: "get",
            success: (resp: any) => {
                if (resp.result === "login") {
                    setIsLogin(true);
                    setUsername(resp.username);
                } else {
                    setIsLogin(false);
                }
            }
        });
    }, []);

    return (
        <React.Fragment>
            <NavBar is_login={is_login} username={username} />
            <div className="container">
                <Routes>
                    <Route path="/calculator" element={<Home />} />
                    <Route path="/calculator/home" element={<Home />} />
                    <Route
                        path="/calculator/calculator"
                        element={
                            is_login ? (
                                <Calculator />
                            ) : (
                                <Navigate replace to="/calculator/login" />
                            )
                        }
                    />
                    <Route path="/calculator/login" element={is_login ? <Navigate replace to="/calculator/home" /> : <Login />} />
                    <Route path="/calculator/register" element={is_login ? <Navigate replace to="/calculator/home" /> : <Register />} />
                    <Route path="/calculator/404" element={<NotFound />} />
                    <Route
                        path="/calculator/*"
                        element={<Navigate replace to="/calculator/404" />}
                    />
                </Routes>
            </div>
        </React.Fragment>
    );
};

export default App;

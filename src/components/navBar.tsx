import * as React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

interface NavBarProps {
    is_login: boolean;
    username: string;
}

const NavBar: React.FunctionComponent<NavBarProps> = (props) => {
    let handleClick = () => {
        $.ajax({
            url: "https://app1186.acapp.acwing.com.cn/calculator/logout/",
            type: "get",
            success: (resp: any) => {
                if (resp.result === "success") {
                    window.location.href="/calculator/home";
                }
            }
        });
    }

    let render_calculator = () => {
        if (props.is_login) {
            return (
                <li className="nav-item">
                    <Link className="nav-link" to="/calculator/calculator">
                        计算器
                    </Link>
                </li>
            );
        } else {
            return "";
        }
    };

    let render_user = () => {
        if (props.is_login) {
            return (
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" style={{userSelect: "none"}}>{props.username}</a>
                    </li>
                    <li className="nav-item">
                        <a onClick={handleClick} className="nav-link" style={{cursor: "pointer"}}>退出</a>
                    </li>
                </ul>
            );
        } else {
            return (
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            aria-current="page"
                            to="/calculator/login"
                        >
                            登录
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/calculator/register">
                            注册
                        </Link>
                    </li>
                </ul>
            );
        }
    };
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/calculator">
                    Web
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarText"
                    aria-controls="navbarText"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                aria-current="page"
                                to="/calculator/home"
                            >
                                首页
                            </Link>
                        </li>
                        {render_calculator()}
                    </ul>
                    {render_user()}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;

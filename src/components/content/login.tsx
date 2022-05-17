import * as React from "react";
import Base from "./base";
import $ from 'jquery';

interface LoginProps {}

const Login: React.FunctionComponent<LoginProps> = () => {
    const [error_message, setErrorMessage] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    let handleClick = (e:React.MouseEvent) => {
        e.preventDefault();

        if (username === "") {
            setErrorMessage("用户名不能为空");
        } else if (password === "") {
            setErrorMessage("密码不能为空");
        } else {
            $.ajax({
                url: "https://app1186.acapp.acwing.com.cn/calculator/login/",
                type: "get",
                data: {
                    username: username,
                    password: password,
                },
                dataType: "json",
                success: (resp: any) => {
                    if (resp.result === "success") {
                        window.location.href="/calculator/home";
                    } else {
                        setErrorMessage(resp.result);
                    }
                }
            });
        }
    }
    return (
        <Base>
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col col-sm-3">
                        <form>
                            <div className="mb-3">
                                <label
                                    htmlFor="username"
                                    className="form-label"
                                >
                                    用户名
                                </label>
                                <input
                                    onChange={(e) => setUsername(e.target.value)}
                                    type="text"
                                    className="form-control"
                                    id="username"
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="password"
                                    className="form-label"
                                >
                                    密码
                                </label>
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    className="form-control"
                                    id="password"
                                />
                            </div>
                            <div style={{height: "2rem", color: "red"}}>
                                {error_message}
                            </div>
                            <button onClick={handleClick} style={{width: "100%"}} type="submit" className="btn btn-primary">
                                登录
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Base>
    );
};

export default Login;

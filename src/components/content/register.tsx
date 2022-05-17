import * as React from "react";
import Base from "./base";
import $ from 'jquery';

interface RegisterProps {}

const Register: React.FunctionComponent<RegisterProps> = () => {
    const [error_message, setErrorMessage] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [password_confirm, setPasswordConfirm] = React.useState("");

    let handleClick = (e:React.MouseEvent) => {
        e.preventDefault();

        if (username === "") {
            setErrorMessage("用户名不能为空");
        } else if (password === "") {
            setErrorMessage("密码不能为空");
        } else if (password_confirm === "") {
            setErrorMessage("确认密码不能为空");
        } else if (password !== password_confirm) {
            setErrorMessage("两次密码不一致");
        } else {
            $.ajax({
                url: "https://app1186.acapp.acwing.com.cn/calculator/register/",
                type: "get",
                data: {
                    username: username,
                    password: password,
                    password_confirm: password_confirm,
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
                            <div className="mb-3">
                                <label
                                    htmlFor="password_confirm"
                                    className="form-label"
                                >
                                    确认密码
                                </label>
                                <input
                                    onChange={(e) => setPasswordConfirm(e.target.value)}
                                    type="password"
                                    className="form-control"
                                    id="password_confirm"
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
    )
};

export default Register;
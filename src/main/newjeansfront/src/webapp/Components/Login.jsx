import React from 'react';
import "../assets/css/login.css";
import google from "../assets/img/google-icon.png";

const Login = () => {
    return (
        <div>
            <div className="background-image"></div>
            <section className="container forms">
                <div className="inner">
                    <div className="form login">
                        <div className="form-content">
                            <form action="#">
                                <div className="field input-field">
                                    <i className="fa-solid fa-user"></i>
                                    <input type="text" placeholder="아이디" className="input" aria-label="아이디"/>
                                </div>
                                <div className="field input-field">
                                    <i className="fa-solid fa-lock"></i>
                                    <input type="password" placeholder="비밀번호" className="input" aria-label="비밀번호"/>
                                </div>
                                <div className="form-link">
                                    <a href="#" className="forgot-pass">비밀번호를 잊으셨나요?</a>
                                </div>
                                <div className="field button-field">
                                    <button type="submit">로그인</button>
                                </div>
                            </form>
                        </div>
                        <div className="line"></div>
                        <div className="media-options">
                            <a href="#" className="field kakao" aria-label="Login with Kakao account">
                                <i className="fa-solid fa-comment kakao-icon"></i>
                                <span>카카오 계정으로 로그인</span>
                            </a>
                        </div>
                        <div className="media-options">
                            <a href="#" className="field google" aria-label="Login with Google account">
                                <img src={google} className="google-icon" alt="Google Icon"/>
                                <span>구글 계정으로 로그인</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;
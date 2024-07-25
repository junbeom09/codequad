import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../assets/css/login.css";
import google from "../assets/img/google-icon.png";
import axios from "axios";

const Login = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post('http://localhost:8081/api/userLogin', { userId, password });
            if (result.data.message === "로그인 성공") {
                sessionStorage.setItem("userInfo", JSON.stringify(result.data.user));
                setIsSuccess(true);
                setMessage("로그인 성공! 잠시 후 메인 페이지로 이동합니다.");
                setTimeout(() => {

                    navigate('/');
                    window.location.reload();
                }, 1000); // 2초 후 메인 페이지로 이동
            } else {
                setIsSuccess(false);
                setMessage("로그인 실패, 잘못된 아이디 또는 비밀번호입니다.");
            }
        } catch (error) {
            setIsSuccess(false);
            setMessage("로그인 실패: " + (error.response?.data || error.message));
        }
    };

    return (
        <div className="root">
            <section className="container forms">
                <div className="inner">
                    <div className="form login">
                        <h2 style={{ textAlign: "center" }}>로그인</h2>
                        <div className="form-content">
                            <form onSubmit={handleLogin}>
                                <div className="field input-field">
                                    <i className="fa-solid fa-user"></i>
                                    <input
                                        type="text"
                                        placeholder="아이디"
                                        className="input"
                                        aria-label="아이디"
                                        value={userId}
                                        onChange={(e) => setUserId(e.target.value)}
                                    />
                                </div>
                                <div className="field input-field">
                                    <i className="fa-solid fa-lock"></i>
                                    <input
                                        type="password"
                                        placeholder="비밀번호"
                                        className="input"
                                        aria-label="비밀번호"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="form-link">
                                    <a href="#" className="forgot-pass">비밀번호를 잊으셨나요?</a>
                                </div>
                                {message && (
                                    <div className={`message ${isSuccess ? 'success' : 'error'}`}>
                                        {message}
                                    </div>
                                )}
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
                                <img src={google} className="google-icon" alt="Google Icon" />
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

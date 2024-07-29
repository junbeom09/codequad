import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../assets/css/login.css";
import google from "../assets/img/google-icon.png";
import axios from "axios";

axios.defaults.withCredentials = true; // Axios 요청 시 쿠키를 포함

const Login = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post('http://localhost:8081/api/userLogin', { userId, password }, { withCredentials: true });
            if (result.data.message === "로그인 성공") {
                sessionStorage.setItem("userInfo", JSON.stringify(result.data.user));
                console.log("Stored user info:", result.data.user);
                setIsSuccess(true);
                setMessage("로그인 성공! 잠시 후 메인 페이지로 이동합니다.");
                setTimeout(() => {
                    navigate('/');
                    window.location.reload();
                }, 1000); // 1초 후 메인 페이지로 이동
            } else {
                setIsSuccess(false);
                setMessage("로그인 실패, 잘못된 아이디 또는 비밀번호입니다.");
            }
        } catch (error) {
            setIsSuccess(false);
            setMessage("로그인 실패: " + (error.response?.data || error.message));
            console.error("Login error:", error);
        }
    };

    const checkUserSession = async () => {
        try {
            const response = await axios.get('http://localhost:8081/api/getUserSession', { withCredentials: true });
            if (response.status === 200) {
                sessionStorage.setItem("userInfo", JSON.stringify(response.data));
                console.log("Session user info:", response.data);
                setIsSuccess(true);
            } else {
                setIsSuccess(false);
                setMessage("세션 정보가 없습니다.");
            }
        } catch (error) {
            setIsSuccess(false);
            console.error("Session fetch error:", error);
        }
    };

    useEffect(() => {
        checkUserSession();
    }, []);

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

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;

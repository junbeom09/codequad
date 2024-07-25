import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../assets/css/signUp.css";

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [emailDomain, setEmailDomain] = useState('naver.com');
    const [customDomain, setCustomDomain] = useState('');
    const [customDomainVisible, setCustomDomainVisible] = useState(false);
    const navigate = useNavigate();

    const handleNext = (e) => {
        e.preventDefault();
        const domain = customDomainVisible ? customDomain : emailDomain;
        const fullEmail = `${email}@${domain}`;
        const formData = {
            us_id: username,
            us_password: password,
            us_name: name,
            us_email: fullEmail,
            us_birthdate: birthdate,
        };
        navigate('/signUp2', { state: formData });
    };

    const checkDuplicateUsername = async () => {
        try {
            const response = await axios.get(`http://localhost:8081/api/isIdExists/${username}`);
            if (response.data) {
                alert("이미 존재하는 아이디입니다.");
            } else {
                alert("사용 가능한 아이디입니다.");
            }
        } catch (error) {
            console.error('Error checking username:', error);
            alert("아이디 중복 확인 중 오류가 발생했습니다.");
        }
    };

    return (
        <div className="signup-page-container">
            <div className="form-container">
                <form onSubmit={handleNext}>
                    <div className="form-step"><h2>회원가입</h2></div>
                    <div className="form-group fullname">
                        <label htmlFor="fullname">아이디</label>
                        <div style={{ display: "flex" }}>
                            <input
                                type="text"
                                id="fullname"
                                placeholder="3~15자 영문, 숫자 조합해서 입력해주세요."
                                style={{ flex: "1" }}
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <button
                                type="button"
                                id="check-duplicate"
                                style={{ marginLeft: "10px", padding: "10px 20px", borderRadius: "3px", border: "1px solid #bfbfbf", background: "#106EEA", color: "white", cursor: "pointer" }}
                                onClick={checkDuplicateUsername}
                            >
                                중복확인
                            </button>
                        </div>
                    </div>
                    <div className="form-group password">
                        <label htmlFor="password">비밀번호</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="8~32자의 영문,숫자 조합해서 입력해주세요."
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <i id="pass-toggle-btn" className="fa-solid fa-eye"></i>
                    </div>
                    <div className="form-group name">
                        <label htmlFor="name">이름</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="이름"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group email">
                        <label htmlFor="email">이메일</label>
                        <div style={{ display: "flex" }}>
                            <input
                                type="text"
                                id="email"
                                placeholder="이메일"
                                style={{ flex: "1" }}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <span style={{ margin: "10px 10px" }}>@</span>
                            <select
                                id="email-domain"
                                style={{ flex: "1" }}
                                value={emailDomain}
                                onChange={(e) => {
                                    if (e.target.value === 'custom') {
                                        setCustomDomainVisible(true);
                                    } else {
                                        setCustomDomainVisible(false);
                                        setEmailDomain(e.target.value);
                                    }
                                }}
                            >
                                <option value="naver.com">naver.com</option>
                                <option value="daum.net">daum.net</option>
                                <option value="google.com">google.com</option>
                                <option value="yahoo.com">yahoo.com</option>
                                <option value="outlook.com">outlook.com</option>
                                <option value="custom">직접입력</option>
                            </select>
                        </div>
                        {customDomainVisible && (
                            <input
                                type="text"
                                id="custom-domain"
                                placeholder="도메인 직접입력"
                                style={{ marginTop: "10px" }}
                                value={customDomain}
                                onChange={(e) => setCustomDomain(e.target.value)}
                            />
                        )}
                    </div>
                    <div className="form-group date">
                        <label htmlFor="date">생년월일</label>
                        <input
                            type="date"
                            id="date"
                            placeholder="생년월일 선택"
                            value={birthdate}
                            onChange={(e) => setBirthdate(e.target.value)}
                        />
                    </div>
                    <div className="form-group submit-btn">
                        <input type="submit" value="다음 (약관동의)" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;

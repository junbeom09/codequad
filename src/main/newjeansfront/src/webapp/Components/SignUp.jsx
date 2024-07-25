// SignUp.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../assets/css/signUp.css";

const SignUp = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        us_id: '',
        us_password: '',
        us_name: '',
        us_email: '',
        us_birthdate: ''
    });
    const [customDomain, setCustomDomain] = useState('');

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({ ...prevState, [id]: value }));
    };

    const handleDomainChange = (e) => {
        if (e.target.value === 'custom') {
            setCustomDomain('');
        } else {
            setFormData(prevState => ({ ...prevState, us_email: `${prevState.us_email.split('@')[0]}@${e.target.value}` }));
        }
    };

    const handleCustomDomainChange = (e) => {
        setCustomDomain(e.target.value);
        setFormData(prevState => ({ ...prevState, us_email: `${prevState.us_email.split('@')[0]}@${e.target.value}` }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/signUp2', { state: formData });
    };

    return (
        <div className="signup-page-container">
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-step"><h2>회원가입</h2></div>
                    <div className="form-group fullname">
                        <label htmlFor="us_id">아이디</label>
                        <div style={{display: "flex"}}>
                            <input type="text" id="us_id" value={formData.us_id} onChange={handleChange} placeholder="3~15자 영문, 숫자 조합해서 입력해주세요." style={{flex: "1"}}/>
                            <button type="button" id="check-duplicate"
                                    style={{marginLeft: "10px", padding: "10px 20px", borderRadius: "3px", border: "1px solid #bfbfbf" ,background: "#106EEA", color: "white", cursor: "pointer"}}>중복확인
                            </button>
                        </div>
                    </div>
                    <div className="form-group password">
                        <label htmlFor="us_password">비밀번호</label>
                        <input type="password" id="us_password" value={formData.us_password} onChange={handleChange} placeholder="8~32자의 영문,숫자 조합해서 입력해주세요."/>
                        <i id="pass-toggle-btn" className="fa-solid fa-eye"></i>
                    </div>
                    <div className="form-group name">
                        <label htmlFor="us_name">이름</label>
                        <input type="text" id="us_name" value={formData.us_name} onChange={handleChange} placeholder="이름"/>
                    </div>
                    <div className="form-group email">
                        <label htmlFor="us_email">이메일</label>
                        <div style={{display: "flex"}}>
                            <input type="text" id="us_email" value={formData.us_email.split('@')[0]} onChange={handleChange} placeholder="이메일" style={{flex: "1"}}/>
                            <span style={{margin: "10px 10px"}}>@</span>
                            <select id="email-domain" onChange={handleDomainChange} style={{flex: "1"}}>
                                <option value="naver.com">naver.com</option>
                                <option value="daum.net">daum.net</option>
                                <option value="google.com">google.com</option>
                                <option value="yahoo.com">yahoo.com</option>
                                <option value="outlook.com">outlook.com</option>
                                <option value="custom">직접입력</option>
                            </select>
                        </div>
                        {customDomain && (
                            <input type="text" id="custom-domain" value={customDomain} onChange={handleCustomDomainChange} placeholder="도메인 직접입력"
                                   style={{marginTop: "10px"}}/>
                        )}
                    </div>
                    <div className="form-group date">
                        <label htmlFor="us_birthdate">생년월일</label>
                        <input type="date" id="us_birthdate" value={formData.us_birthdate} onChange={handleChange} placeholder="생년월일 선택"/>
                    </div>
                    <div className="form-group submit-btn">
                        <input type="submit" value="다음 (약관동의)"/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;

import React from 'react';
import "../assets/css/signUp.css";
import {Link} from "react-router-dom";

const SignUp = () => {
    return (
        <div className="signup-page-container">
            <div className="form-container">
                <form action="thank-you.html">
                    <div className="form-step"><h2>회원가입</h2></div>
                    <div className="form-group fullname">
                        <label htmlFor="fullname">아이디</label>
                        <div style={{display: "flex"}}>
                            <input type="text" id="fullname" placeholder="3~15자 영문, 숫자 조합해서 입력해주세요." style={{flex: "1"}}/>
                            <button type="button" id="check-duplicate"
                                    style={{marginLeft: "10px", padding: "10px 20px", borderRadius: "3px", border: "1px solid #bfbfbf" ,background: "#106EEA", color: "white", cursor: "pointer"}}>중복확인
                            </button>
                        </div>
                    </div>
                    <div className="form-group password">
                        <label htmlFor="password">비밀번호</label>
                        <input type="password" id="password" placeholder="8~32자의 영문,숫자 조합해서 입력해주세요."/>
                        <i id="pass-toggle-btn" className="fa-solid fa-eye"></i>
                    </div>
                    <div className="form-group name">
                        <label htmlFor="name">이름</label>
                        <input type="text" id="name" placeholder="이름"/>
                    </div>
                    <div className="form-group email">
                        <label htmlFor="email">이메일</label>
                        <div style={{display: "flex"}}>
                            <input type="text" id="email" placeholder="이메일" style={{flex: "1"}}/>
                            <span style={{margin: "10px 10px"}}>@</span>
                            <select id="email-domain" style={{flex: "1"}}>
                                <option value="naver.com">naver.com</option>
                                <option value="daum.net">daum.net</option>
                                <option value="google.com">google.com</option>
                                <option value="yahoo.com">yahoo.com</option>
                                <option value="outlook.com">outlook.com</option>
                                <option value="custom">직접입력</option>
                            </select>
                        </div>
                        <input type="text" id="custom-domain" placeholder="도메인 직접입력"
                               style={{marginTop: "10px", display: "none"}}/>
                    </div>
                    <div className="form-group date">
                        <label htmlFor="date">생년월일</label>
                        <input type="date" id="date" placeholder="생년월일 선택"/>
                    </div>
                    <div className="form-group submit-btn">
                        <Link to="/signUp2">
                            <input type="submit" value="다음 (약관동의)"/>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
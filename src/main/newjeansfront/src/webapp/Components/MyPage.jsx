import React from 'react';
import "../assets/css/myPage.css";

const MyPage = () => {
    return (
        <div className="root">
            <div className="container">
                <h1>마이페이지</h1>
                <div className="info-group">
                    <label htmlFor="id">아이디</label>
                    <p id="id">newjins123</p>
                </div>
                <div className="info-group">
                    <label htmlFor="password">비밀번호</label>
                    <p id="password">********</p>
                </div>
                <div className="info-group">
                    <label htmlFor="name">이름</label>
                    <p id="name">조준범</p>
                </div>
                <div className="info-group">
                    <label htmlFor="email">이메일</label>
                    <p id="email">junbeom@google.com</p>
                </div>
                <div className="info-group">
                    <label htmlFor="dob">생년월일</label>
                    <p id="dob">2000-01-01</p>
                </div>
                <div className="subscriptions-title">내가 구독한 서비스</div>
                <div className="subscriptions">
                    <div>
                        <h2>언론사</h2>
                        <ul>
                            <li>중앙일보</li>
                            <li>제주일보</li>
                            <li>전자뉴스</li>
                            <li>OBS</li>
                        </ul>
                    </div>
                    <div>
                        <h2>카테고리</h2>
                        <ul>
                            <li>정치</li>
                            <li>경제</li>
                            <li>사회</li>
                            <li>문화</li>
                        </ul>
                    </div>
                </div>
                <a href="editpage.html" className="btn-edit-profile">프로필 수정</a>
            </div>
        </div>
    );
};

export default MyPage;
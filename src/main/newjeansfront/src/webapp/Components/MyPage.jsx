import React, { useContext, useState } from 'react';
import "../assets/css/myPage.css";
import { newjinsContext } from "../context/newjinsContext";

const MyPage = () => {
    const { userInfo, setUserInfo, subscribedAgencies, setSubscribedAgencies } = useContext(newjinsContext);
    const [editMode, setEditMode] = useState(false);
    const [editedUserInfo, setEditedUserInfo] = useState({...userInfo});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedUserInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleEditClick = () => {
        setEditMode(true);
    };

    const handleSaveClick = () => {
        setUserInfo(editedUserInfo);
        setEditMode(false);
    };

    const handleCancelSubscription = (publisherName) => {
        setSubscribedAgencies(subscribedAgencies.filter(item => item.publisherName !== publisherName));
    };

    return (
        <div className="root">
            <div className="container">
                <h1>마이페이지</h1>
                <div className="info-group">
                    <label htmlFor="id">아이디</label>
                    <p id="id">{userInfo.us_id}</p>
                </div>
                <div className="info-group">
                    <label htmlFor="password">비밀번호</label>
                    {editMode ? (
                        <input
                            type="password"
                            id="password"
                            name="us_password"
                            value={editedUserInfo.us_password}
                            onChange={handleInputChange}
                        />
                    ) : (
                        <p id="password">{userInfo.us_password}</p>
                    )}
                </div>
                <div className="info-group">
                    <label htmlFor="name">이름</label>
                    {editMode ? (
                        <input
                            type="text"
                            id="name"
                            name="us_name"
                            value={editedUserInfo.us_name}
                            onChange={handleInputChange}
                        />
                    ) : (
                        <p id="name">{userInfo.us_name}</p>
                    )}
                </div>
                <div className="info-group">
                    <label htmlFor="email">이메일</label>
                    {editMode ? (
                        <input
                            type="email"
                            id="email"
                            name="us_email"
                            value={editedUserInfo.us_email}
                            onChange={handleInputChange}
                        />
                    ) : (
                        <p id="email">{userInfo.us_email}</p>
                    )}
                </div>
                <div className="info-group">
                    <label htmlFor="dob">생년월일</label>
                    <p id="dob">{userInfo.us_birthdate}</p>
                </div>
                <div className="subscriptions-title">내가 구독한 서비스</div>
                <div className="subscriptions">
                    <div>
                        <h2>언론사</h2>
                        <ul>
                            {subscribedAgencies.map(item => (
                                <li key={item.publisherName}>
                                    {item.publisherName}
                                    <button onClick={() => handleCancelSubscription(item.publisherName)}>구독 취소</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                {editMode ? (
                    <button onClick={handleSaveClick} className="btn-edit-profile">수정 확정</button>
                ) : (
                    <button onClick={handleEditClick} className="btn-edit-profile">프로필 수정</button>
                )}
            </div>
        </div>
    );
};

export default MyPage;

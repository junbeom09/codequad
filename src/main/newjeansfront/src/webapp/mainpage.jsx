import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Routes, Route, NavLink, Link } from 'react-router-dom';
import "./assets/css/mainpage.css";
import "./assets/css/header.css";
import "./assets/css/footer.css";
import { newjinsContext } from "./context/newjinsContext";
import Home from "./Components/Home";
import Category from "./Components/Category";
import Recommend from "./Components/Recommend";
import Subscribe from "./Components/Subscribe";
import axios from "axios";
import newjins_row_logo from './assets/img/newjins_row_logo.jpg';
import Login from "./Components/Login.jsx";
import SignUp from "./Components/SignUp.jsx";
import SignUp2 from "./Components/SignUp2";
import MyPage from "./Components/MyPage";
import Company from "./Components/Company";
import Search from "./Components/Search";
import Logout from "./Components/Logout"; // 로그아웃 컴포넌트 추가


const Mainpage = () => {
    const [companyNews, setCompanyNews] = useState([]);
    const [isLogin, setIsLogin] = useState(false);
    const [cateNews, setCateNews] = useState([]);
    const [cateNum, setCateNum] = useState(0);
    const [userInfo, setUserInfo] = useState(null);
    const navigate = useNavigate();
    const searchInputRef = useRef(null);
    const [subscribedAgencies, setSubscribedAgencies] = useState([]);
    const pressAgencies = [
        { id: 1, name: "디지털타임스", logo: "https://www.bigkinds.or.kr/assets/v3/img/provider/nspIcon_07101201.png" },
        { id: 2, name: "데일리안", logo: "https://www.bigkinds.or.kr/assets/v3/img/provider/nspIcon_04100158.png" },
        { id: 3, name: "스포츠서울", logo: "https://www.bigkinds.or.kr/assets/v3/img/provider/nspIcon_10100101.png" },
        { id: 4, name: "전자신문", logo: "https://www.bigkinds.or.kr/assets/v3/img/provider/nspIcon_07100501.png" },
        { id: 5, name: "매일신문", logo: "https://www.bigkinds.or.kr/assets/v3/img/provider/nspIcon_01500601.png" },
        { id: 6, name: "파이낸셜뉴스", logo: "https://www.bigkinds.or.kr/assets/v3/img/provider/nspIcon_02100501.png" },
        { id: 7, name: "머니투데이", logo: "https://www.bigkinds.or.kr/assets/v3/img/provider/nspIcon_02100201.png" },
        { id: 8, name: "헤럴드경제", logo: "https://www.bigkinds.or.kr/assets/v3/img/provider/nspIcon_02100701.png" },
        { id: 9, name: "경향신문", logo: "https://www.bigkinds.or.kr/assets/v3/img/provider/nspIcon_01100101.png" },
        { id: 10, name: "동아일보", logo: "https://www.bigkinds.or.kr/assets/v3/img/provider/nspIcon_01100401.png" },
        { id: 11, name: "중앙일보", logo: "https://www.bigkinds.or.kr/assets/v3/img/provider/nspIcon_01100901.png" },
        { id: 12, name: "세계일보", logo: "https://www.bigkinds.or.kr/assets/v3/img/provider/nspIcon_01100701.png" },
        { id: 13, name: "한국일보", logo: "https://www.bigkinds.or.kr/assets/v3/img/provider/nspIcon_01101101.png" },
        { id: 14, name: "더팩트", logo: "https://img.tf.co.kr/index/2022/09/13/1663028192.gif" },
        { id: 15, name: "노컷뉴스", logo: "https://www.bigkinds.or.kr/assets/v3/img/provider/nspIcon_04100058.png" },
        { id: 16, name: "비즈워치", logo: "https://www.bigkinds.or.kr/assets/v3/img/provider/nspIcon_04101808.png" },
        { id: 17, name: "국민일보", logo: "https://www.bigkinds.or.kr/assets/v3/img/provider/nspIcon_01100201.png" },
        { id: 18, name: "디지털데일리", logo: "https://www.ddaily.co.kr/assets/images/common/logo.png" },
        { id: 19, name: "지디넷코리아", logo: "https://zdnet.co.kr/images/zdnet_logo.png" },
        { id: 20, name: "연합뉴스TV", logo: "https://www.yonhapnewstv.co.kr/asset/img/common/img_logo_yhntv_navy.png" },
        { id: 21, name: "조선비즈", logo: "data:image/jpeg;base64,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" },
        { id: 22, name: "한국경제TV", logo: "data:image/png;base64,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" },
        { id: 23, name: "머니S", logo: "https://menu.moneys.co.kr/moneys/assets/20240717163719/images/logo_moneys.svg" },
        { id: 24, name: "아이뉴스24", logo: "data:image/png;base64,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" }
    ];

    useEffect(() => {
        checkLoginStatus();

        // 세션 스토리지 변경 이벤트 리스너 추가
        window.addEventListener('storage', checkLoginStatus);

        return () => {
            window.removeEventListener('storage', checkLoginStatus);
        };
    }, []);

    const checkLoginStatus = () => {
        const userInfoString = sessionStorage.getItem("userInfo");
        console.log("User info from session storage:", userInfoString);
        if (userInfoString) {
            const user = JSON.parse(userInfoString);
            if (user && user.us_id) {
                setIsLogin(true);
                setUserInfo(user);
                fetchSubscribedAgencies(user.us_id);
            } else {
                console.error("Invalid user info in session storage");
                handleLogout();
            }
        } else {
            console.log("No user info found in session storage");
            handleLogout();
        }
    };

    const handleLogout = () => {
        sessionStorage.removeItem("userInfo");
        setIsLogin(false);
        setUserInfo(null);
        setSubscribedAgencies([]);
    };

    const getCompany = async  (e) =>{
        try {
            const company = e.target.innerText;
            const response = await fetchArticlesByCompany(company);
            setCompanyNews(response.data);
            console.log(companyNews);
        }catch (error){
            console.error('Error:',error.response ? error.response.data : error.message);
        }
    }

    const fetchArticlesByCompany = async (company) => {
        try {
            const response = await axios.get(`http://localhost:8081/api/publisher/${company}`);
            return response;
        } catch (error) {
            console.error('Error fetching articles by category:', error);
        }
    };

    const getCate = async (e) => {
        try {
            const cate = parseInt(e.target.getAttribute("alt"));
            const response = await fetchArticlesByCategory(cate);
            setCateNews(response.data);
            setCateNum(cate);
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
        }
    };

    const [showPressBox, setShowPressBox] = useState(false);

    const openPressBox = () => {
        setShowPressBox(true);
    };

    const closePressBox = () => {
        setShowPressBox(false);
    };

    const fetchArticlesByCategory = async (categoryId) => {
        try {
            const response = await axios.get(`http://localhost:8081/api/category/${categoryId}`);
            return response;
        } catch (error) {
            console.error('Error fetching articles by category:', error);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        const keyword = searchInputRef.current.value;
        navigate(`/search?keyword=${keyword}`);
    };

    const handleSubscriptionToggle = async (agencyName) => {
        if (!userInfo || !userInfo.us_id) {
            alert("로그인이 필요합니다.");
            navigate('/login');
            return;
        }

        try {
            const isCurrentlySubscribed = subscribedAgencies.includes(agencyName);
            const endpoint = isCurrentlySubscribed ? '/api/unsubscribe' : '/api/subscribe';

            const response = await axios.post(`http://localhost:8081${endpoint}`, {
                user_id: userInfo.us_id,
                uc_publisher: agencyName
            });

            if (response.status === 200) {
                setSubscribedAgencies(prev =>
                    isCurrentlySubscribed ? prev.filter(name => name !== agencyName) : [...prev, agencyName]
                );
                alert(isCurrentlySubscribed ? '구독이 취소되었습니다.' : '구독되었습니다.');
            }
        } catch (error) {
            console.error('Error toggling subscription:', error.response?.data || error.message);
            alert('구독 상태 변경 중 오류가 발생했습니다.');
        }
    };

    const fetchSubscribedAgencies = async (userId) => {
        if (!userId) {
            console.error("UserId is undefined");
            return;
        }
        try {
            const response = await axios.get(`http://localhost:8081/api/user-subscribed-news/${userId}`);
            console.log("Subscriptions response:", response.data);
            setSubscribedAgencies(response.data);
        } catch (error) {
            console.error('Error fetching subscriptions:', error.response?.data || error.message);
        }
    };

    return (
        <newjinsContext.Provider value={{ cateNews, setCateNews, cateNum, setCateNum, userInfo, setUserInfo, subscribedAgencies, setSubscribedAgencies }}>
            <div className="container-doc">
                <header id="header" className="header">
                    <div className="hd-top">
                        <div className="inner">
                            <div>
                                <h1>
                                    <Link to="/">
                                        <img src={newjins_row_logo} />
                                    </Link>
                                </h1>
                            </div>
                            <div>
                                <div className="srch-group input-group" style={{ display: "flex" }}>
                                    <input
                                        ref={searchInputRef}
                                        type="text"
                                        className="search-key"
                                        placeholder="검색어를 입력해주세요"
                                        autoComplete="off"
                                    />
                                    <div>
                                        <button type="button" className="btn-search" onClick={handleSearch}>
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </button>
                                    </div>
                                </div>
                                <div style={{ textAlign: "center", marginTop: "15px", display: "block" }}
                                     className="search-info">
                                    <span style={{ color: "#007bff" }}>기사 제목을 클릭하면 원문 링크로 이동됩니다.</span>
                                </div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                {isLogin ? (
                                    <div className="login-area">
                                        <Link to="/logout">
                                            <button type="button" className="btn-login" onClick={handleLogout}>
                                                로그아웃
                                            </button>
                                        </Link>
                                    </div>
                                ) : (
                                    <div className="login-area">
                                        <Link to="/login">
                                            <button type="button" className="btn-login">
                                                로그인
                                            </button>
                                        </Link>
                                    </div>
                                )}
                                <div className="login-area2">
                                    {!isLogin ? (
                                        <Link to="/signUp">
                                            <button type="button" className="btn-login">
                                                회원가입
                                            </button>
                                        </Link>
                                    ) : (
                                        <Link to="/myPage">
                                            <button type="button" className="btn-login">
                                                마이페이지
                                            </button>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* // <!-- 네비게이션 시작--> */}
                    <nav id="gnbContent" className="doc-gnb">
                        <div className="inner_gnb">
                            <h2 className="screen_out">뉴스 메인메뉴</h2>
                            <ul className="gnb_comm" data-tiara-layer="GNB tab" style={{display: "flex"}}>
                                <li>
                                    <NavLink to="/" className="link_gnb" activeClassName="active">
                                        <span className="txt_gnb">홈</span></NavLink>
                                </li>
                                <li>
                                    <NavLink to="/recommend" className="link_gnb" activeClassName="active">
                                        <span className="txt_gnb">추천</span></NavLink>
                                </li>
                                <li>
                                    <NavLink to="/subscribe" className="link_gnb" activeClassName="active">
                                        <span className="txt_gnb">구독</span></NavLink>
                                </li>
                                <div className="sep-line">
                                    <div className="sep-line-br"></div>
                                    {/* // <!-- 구분선 --> */}
                                </div>
                                <li>
                                    <NavLink to="/category" className="link_gnb" activeClassName="active">
                                        <span className="txt_gnb" onClick={getCate} alt="1">사회</span></NavLink>
                                </li>
                                <li>
                                    <NavLink to="/category" className="link_gnb" activeClassName="active">
                                        <span className="txt_gnb" onClick={getCate} alt="2">정치</span></NavLink>
                                </li>
                                <li>
                                    <NavLink to="/category" className="link_gnb" activeClassName="active">
                                        <span className="txt_gnb" onClick={getCate} alt="3">경제</span></NavLink>
                                </li>
                                <li>
                                    <NavLink to="/category" className="link_gnb" activeClassName="active">
                                        <span className="txt_gnb" onClick={getCate} alt="4">국제</span></NavLink>
                                </li>
                                <li>
                                    <NavLink to="/category" className="link_gnb" activeClassName="active">
                                        <span className="txt_gnb" onClick={getCate} alt="5">문화</span></NavLink>
                                </li>
                                <li>
                                    <NavLink to="/category" className="link_gnb" activeClassName="active">
                                        <span className="txt_gnb" onClick={getCate} alt="6">IT</span></NavLink>
                                </li>
                                <div className="sep-line">
                                    <div className="sep-line-br"></div>
                                    {/* // <!-- 구분선 --> */}
                                </div>
                                <li><NavLink to="/company" className="link_gnb" activeClassName="active">
                                    <span className="txt_gnb" onClick={getCompany}>뉴스1</span></NavLink></li>
                                <li><NavLink to="/company" className="link_gnb">
                                    <span className="txt_gnb" onClick={getCompany}>한국경제</span></NavLink></li>
                                <li><NavLink to="/company" className="link_gnb">
                                    <span className="txt_gnb" onClick={getCompany}>아시아경제</span></NavLink></li>
                                <li><NavLink to="/company" className="link_gnb">
                                    <span className="txt_gnb" onClick={getCompany}>머니투데이</span></NavLink></li>
                                <li><NavLink to="/company" className="link_gnb">
                                    <span className="txt_gnb" onClick={getCompany}>연합뉴스</span></NavLink></li>
                                <li><NavLink to="/company" className="link_gnb">
                                    <span className="txt_gnb" onClick={getCompany}>이데일리</span></NavLink></li>
                                <li><a href="#" className="link_gnb">
                                    <span className="txt_gnb"></span></a></li>
                                <li><a href="#" className="link_gnb">
                                    <span className="txt_gnb"></span></a></li>
                                <li><a href="#" className="link_gnb">
                                    <span className="txt_gnb"></span></a></li>
                                <li><a href="#" className="link_gnb">
                                    <span className="txt_gnb"></span></a></li>
                                <li><a href="#" className="btn-press">
                                    <span
                                        onClick={openPressBox}
                                        role="button"
                                        tabIndex="0"
                                        style={{cursor: 'pointer'}}
                                    >
                    더보기 >
                </span>
                                </a>
                                    {showPressBox && (
                                        <div id="modal-press2" className="press-set-layer">
                                            <div className="press-list-wrap">
                                                <button type="button" onClick={closePressBox} className="btn-close">X
                                                </button>
                                                <ul className="press-list">
                                                    {pressAgencies.map(agency => (
                                                        <li key={agency.id}>
                                                            <a href="#" className="providerClick2">
                                                                <img loading="lazy" style={{float: "left"}}
                                                                     src={agency.logo} alt={agency.name}/>
                                                            </a>
                                                            <label className="checkbox-label">
                                                                <input
                                                                    type="checkbox"
                                                                    checked={subscribedAgencies.includes(agency.name)}
                                                                    onChange={() => handleSubscriptionToggle(agency.name)}
                                                                />
                                                                <span className="sr-only">구독</span>
                                                            </label>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    )}

                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
                {/* // <!-- 헤더 끝 --> */}

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/search' element={<Search />} />
                    <Route path='/category' element={<Category />} />
                    <Route path='/recommend' element={<Recommend />} />
                    <Route path='/Subscribe' element={<Subscribe />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signUp' element={<SignUp />} />
                    <Route path='/signUp2' element={<SignUp2 />} />
                    <Route path='/myPage' element={<MyPage />} />
                    <Route path='/company' element={<Company />} />
                    <Route path='/logout' element={<Logout />} /> {/* 로그아웃 경로 추가 */}
                </Routes>

                {/* // <!-- footer --> */}
                <footer id="kakaoFoot" className="doc-footer">
                    <div className="inner_foot #FOOTER">
                        <div className="ft-cont">
                            <ul className="ft-link">
                                <li>
                                    <a href="" data-toggle="modal" className="btn-primary footer-link">이용약관</a>
                                </li>
                                <li>
                                    <a href="" className="privacy">개인정보처리방침</a>
                                </li>
                                <li>
                                    <a href="" data-toggle="modal" className="btn-primary footer-link">이메일무단수집거부</a>
                                </li>
                            </ul>
                            <ul className="ft-info">
                                <li>광주광역시 동구 금남로3가 1-1</li>
                                <li>대표 조준범</li>
                                <li>0507-1477-8852</li>
                                <li>newjins.co.kr</li>
                            </ul>
                            <p className="ft-copy">
                                COPYRIGHTⓒ 2024 KOREA PRESS FOUNDATION. ALL RIGHTS RESERVED.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </newjinsContext.Provider>
    );
};

export default Mainpage;

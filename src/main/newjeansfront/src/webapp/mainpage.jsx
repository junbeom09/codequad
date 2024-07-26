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
    const [isLogin, setIsLogin] = useState(false);
    const [cateNews, setCateNews] = useState([]);
    const [cateNum, setCateNum] = useState(0);
    const [userInfo, setUserInfo] = useState(null);
    const navigate = useNavigate();
    const searchInputRef = useRef(null);

    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem("userInfo"));
        if (user) {
            setIsLogin(true);
            setUserInfo(user);
        }
    }, []);

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

    const handleSubscribeClick = (e) => {
        e.preventDefault(); // 기본 네비게이션 동작 방지
        if (isLogin) {
            navigate('/subscribe', { state: { userInfo } });
        } else {
            alert("구독 기능을 사용하려면 로그인이 필요합니다.");
            navigate('/login');
        }
    };

    return (
        <newjinsContext.Provider value={{ cateNews, setCateNews, cateNum, setCateNum }}>
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
                                {!isLogin ? (
                                    <div className="login-area">
                                        <Link to="/login">
                                            <button type="button" className="btn-login">
                                                로그인
                                            </button>
                                        </Link>
                                    </div>
                                ) : (
                                    <div className="login-area">
                                        <Link to="/logout">
                                            <button type="button" className="btn-login">
                                                로그아웃
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
                            <ul className="gnb_comm" data-tiara-layer="GNB tab" style={{ display: "flex" }}>
                                <li>
                                    <NavLink to="/" className="link_gnb" activeClassName="active">
                                        <span className="txt_gnb">홈</span></NavLink>
                                </li>
                                <li>
                                    <NavLink to="/recommend" className="link_gnb" activeClassName="active">
                                        <span className="txt_gnb">추천</span></NavLink>
                                </li>
                                <li>
                                    <NavLink to="/subscribe" className="link_gnb" activeClassName="active"
                                             onClick={handleSubscribeClick}>
                                        <span className="txt_gnb">구독</span>
                                    </NavLink>
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
                                    <span className="txt_gnb">MBC</span></NavLink></li>
                                <li><a href="" className="link_gnb">
                                    <span className="txt_gnb">머니투데이</span></a></li>
                                <li><a href="" className="link_gnb">
                                    <span className="txt_gnb">한겨레</span></a></li>
                                <li><a href="" className="link_gnb">
                                    <span className="txt_gnb">뉴스1</span></a></li>
                                <li><a href="" className="link_gnb">
                                    <span className="txt_gnb">문화일보</span></a></li>
                                <li><a href="" className="link_gnb">
                                    <span className="txt_gnb">중앙일보</span></a></li>
                                <li><a href="" className="link_gnb">
                                    <span className="txt_gnb">JTBC</span></a></li>
                                <li><a href="" className="link_gnb">
                                    <span className="txt_gnb">YTN</span></a></li>
                                <li><NavLink to="/myPage" className="link_gnb" activeClassName="active">
                                    <span className="txt_gnb">조선일보</span></NavLink></li>
                                <li><a href="#" className="btn-press">
                                    <span
                                        onClick={openPressBox}
                                        role="button"
                                        tabIndex="0"
                                        style={{ cursor: 'pointer' }}
                                    >
                    더보기 >
                </span>
                                </a>
                                    {/* // <!-- 더보기 버튼 클릭하면 나타나는 내용 --> */}
                                    {/* // <!-- 언론사 리스트 시작 --> */}
                                    {showPressBox && (
                                        <div id="modal-press2" class="press-set-layer">
                                            <div class="press-list-wrap">
                                                <button type="button" onClick={closePressBox} className="btn-close">X</button>
                                                <ul class="press-list">
                                                    <li>
                                                        <a href="" class="providerClick2">
                                                            <img loading="lazy" src="https://www.bigkinds.or.kr/assets/v3/img/provider/nspIcon_07101201.png" alt="디지털타임스" />
                                                        </a>
                                                        <button type="button" class="btn-press-sel">
                                                            <span class="sr-only">선택</span>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <a href="" class="providerClick2">
                                                            <img loading="lazy" src="https://www.bigkinds.or.kr/assets/v3/img/provider/nspIcon_04100158.png" alt="데일리안" />
                                                        </a>
                                                        <button type="button" class="btn-press-sel">
                                                            <span class="sr-only">선택</span>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <Link to="/company" class="providerClick2">
                                                            <img loading="lazy" src="https://www.bigkinds.or.kr/assets/v3/img/provider/nspIcon_10100101.png" alt="스포츠서울" />
                                                        </Link>
                                                        <button type="button" class="btn-press-sel">
                                                            <span class="sr-only">선택</span>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <Link to="/company" class="providerClick2">
                                                            <img loading="lazy" src="https://www.bigkinds.or.kr/assets/v3/img/provider/nspIcon_07100501.png" alt="전자신문" />
                                                        </Link>
                                                        <button type="button" class="btn-press-sel">
                                                            <span class="sr-only">선택</span>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <Link to="/company" class="providerClick2">
                                                            <img loading="lazy" src="https://www.bigkinds.or.kr/assets/v3/img/provider/nspIcon_01500601.png" alt="매일신문" />
                                                        </Link>
                                                        <button type="button" class="btn-press-sel">
                                                            <span class="sr-only">선택</span>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <Link to="/company" class="providerClick2">
                                                            <img loading="lazy" src="https://www.bigkinds.or.kr/assets/v3/img/provider/nspIcon_02100501.png" alt="파이낸셜뉴스" />
                                                        </Link>
                                                        <button type="button" class="btn-press-sel">
                                                            <span class="sr-only">선택</span>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <Link to="/company" class="providerClick2">
                                                            <img loading="lazy" src="https://www.bigkinds.or.kr/assets/v3/img/provider/nspIcon_02100201.png" alt="머니투데이" />
                                                        </Link>
                                                        <button type="button" class="btn-press-sel">
                                                            <span class="sr-only">선택</span>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <Link to="/company" class="providerClick2">
                                                            <img loading="lazy" src="https://www.bigkinds.or.kr/assets/v3/img/provider/nspIcon_02100701.png" alt="헤럴드경제" />
                                                        </Link>
                                                        <button type="button" class="btn-press-sel">
                                                            <span class="sr-only">선택</span>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <Link to="/company" class="providerClick2">
                                                            <img loading="lazy" src="https://www.bigkinds.or.kr/assets/v3/img/provider/nspIcon_01100101.png" alt="경향신문" />
                                                        </Link>
                                                        <button type="button" class="btn-press-sel">
                                                            <span class="sr-only">선택</span>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <Link to="/company" class="providerClick2">
                                                            <img loading="lazy" src="https://www.bigkinds.or.kr/assets/v3/img/provider/nspIcon_01100401.png" alt="동아일보" />
                                                        </Link>
                                                        <button type="button" class="btn-press-sel">
                                                            <span class="sr-only">선택</span>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <Link to="/company" class="providerClick2">
                                                            <img loading="lazy" src="https://www.bigkinds.or.kr/assets/v3/img/provider/nspIcon_01100901.png" alt="중앙일보" />
                                                        </Link>
                                                        <button type="button" class="btn-press-sel">
                                                            <span class="sr-only">선택</span>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <Link to="/company" class="providerClick2">
                                                            <img loading="lazy" src="https://www.bigkinds.or.kr/assets/v3/img/provider/nspIcon_01100701.png" alt="세계일보" />
                                                        </Link>
                                                        <button type="button" class="btn-press-sel">
                                                            <span class="sr-only">선택</span>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <Link to="/company" class="providerClick2">
                                                            <img loading="lazy" src="https://www.bigkinds.or.kr/assets/v3/img/provider/nspIcon_01101101.png" alt="한국일보" />
                                                        </Link>
                                                        <button type="button" class="btn-press-sel">
                                                            <span class="sr-only">선택</span>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <Link to="/company" class="providerClick2">
                                                            <img loading="lazy" src="https://img.tf.co.kr/index/2022/09/13/1663028192.gif" alt="더팩트" />
                                                        </Link>
                                                        <button type="button" class="btn-press-sel">
                                                            <span class="sr-only">선택</span>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <Link to="/company" class="providerClick2">
                                                            <img loading="lazy" src="https://www.bigkinds.or.kr/assets/v3/img/provider/nspIcon_04100058.png" alt="노컷뉴스" />
                                                        </Link>
                                                        <button type="button" class="btn-press-sel">
                                                            <span class="sr-only">선택</span>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <Link to="/company" class="providerClick2">
                                                            <img loading="lazy" src="https://www.bigkinds.or.kr/assets/v3/img/provider/nspIcon_04101808.png" alt="비즈워치" />
                                                        </Link>
                                                        <button type="button" class="btn-press-sel">
                                                            <span class="sr-only">선택</span>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <Link to="/company" class="providerClick2">
                                                            <img loading="lazy" src="https://www.bigkinds.or.kr/assets/v3/img/provider/nspIcon_01100201.png" alt="국민일보" />
                                                        </Link>
                                                        <button type="button" class="btn-press-sel">
                                                            <span class="sr-only">선택</span>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <Link to="/company" class="providerClick2">
                                                            <img loading="lazy" src="https://www.ddaily.co.kr/assets/images/common/logo.png" style={{ width: "110px", height: "20px" }} alt="디지털데일리" />
                                                        </Link>
                                                        <button type="button" class="btn-press-sel">
                                                            <span class="sr-only">선택</span>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <a href="" class="providerClick2">
                                                            <img loading="lazy" src="https://zdnet.co.kr/images/zdnet_logo.png?ver=20220830" style={{ width: "110px", height: "20px" }} alt="지디넷코리아" />
                                                        </a>
                                                        <button type="button" class="btn-press-sel">
                                                            <span class="sr-only">선택</span>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <a href="" class="providerClick2">
                                                            <img loading="lazy" src="https://www.yonhapnewstv.co.kr/asset/img/common/img_logo_yhntv_navy.png" style={{ width: "110px", height: "20px" }} alt="연합뉴스tv" />
                                                        </a>
                                                        <button type="button" class="btn-press-sel">
                                                            <span class="sr-only">선택</span>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <a href="" class="providerClick2">
                                                            <img loading="lazy" src="./img/chosunBiz.png" alt="조선비즈" />
                                                        </a>
                                                        <button type="button" class="btn-press-sel">
                                                            <span class="sr-only">선택</span>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <a href="" class="providerClick2">
                                                            <img loading="lazy" src="./img/koreaEconomic.png" alt="한국경제tv" />
                                                        </a>
                                                        <button type="button" class="btn-press-sel">
                                                            <span class="sr-only">선택</span>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <a href="" class="providerClick2">
                                                            <img loading="lazy" src="https://menu.moneys.co.kr/moneys/assets/20240717163719/images/logo_moneys.svg" alt="머니s" />
                                                        </a>
                                                        <button type="button" class="btn-press-sel">
                                                            <span class="sr-only">선택</span>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <a href="" class="providerClick2">
                                                            <img loading="lazy" src="./img/eyeNews.png" alt="아이뉴스24" />
                                                        </a>
                                                        <button type="button" class="btn-press-sel">
                                                            <span class="sr-only">선택</span>
                                                        </button>
                                                    </li>
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

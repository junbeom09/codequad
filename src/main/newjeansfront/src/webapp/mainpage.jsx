import React from 'react';
import "./assets/css/mainpage.css";
import "./assets/css/header.css";
import "./assets/css/footer.css";
import {newjinsContext} from "./context/newjinsContext";
import {Routes, Route, Link} from "react-router-dom";
import Home from "./Components/Home";
import Category from "./Components/Category";
import Recommend from "./Components/Recommend";
import Subscribe from "./Components/Subscribe";
import axios from "axios";
import newjins_row_logo from './assets/img/newjins_row_logo.jpg';
import Login from "./Components/Login.jsx";

const Mainpage = () => {
    const getCate = async (e) => {
        try {
            const text = e.target.innerText;
            const response = await axios.post('http://localhost:8081/api/endpoint', text, {
                headers: {
                    'Content-Type': 'text/plain'
                }
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
        }
    };
    return (
        <newjinsContext.Provider value={{}}>
            <div className="container-doc">
                <header id="header" className="header">
                    <div className="hd-top">
                        <div className="inner">
                            <div>
                                <h1>
                                    <Link to="/">
                                        <img src={newjins_row_logo}/>
                                    </Link>
                                </h1>
                            </div>
                            <div>
                                <div className="srch-group input-group" style={{display: "flex"}}>
                                    <input id="total-search-key" type="text" className="search-key"
                                           placeholder="검색어를 입력해주세요"
                                           autoComplete="off"/>
                                    <div>
                                        <button type="button" className="btn-search">
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div style={{display: "flex", justifyContent: "space-between"}}>
                                <div className="login-area">
                                    <button type="button" className="btn-login">
                                        <Link to="/login">로그인</Link>
                                    </button>
                                </div>
                                <div className="login-area2">
                                    <button type="button" className="btn-login">
                                        <a href="">회원가입</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*// <!-- 네비게이션 시작-->*/}
                    <nav id="gnbContent" className="doc-gnb">
                        <div className="inner_gnb">
                            <h2 className="screen_out">뉴스 메인메뉴</h2>
                            <ul className="gnb_comm" data-tiara-layer="GNB tab" style={{display: "flex"}}>
                                <li className="on">
                                    <Link to="/" className="link_gnb">
                                        <span className="txt_gnb">홈</span></Link>
                                </li>
                                <li>
                                    <Link to="/recommend" className="link_gnb">
                                        <span className="txt_gnb">추천</span></Link>
                                </li>
                                <li>
                                    <Link to="/subscribe" className="link_gnb">
                                        <span className="txt_gnb">구독</span></Link>
                                </li>
                                <div className="sep-line">
                                    <div className="sep-line-br"></div>
                                    {/*// <!-- 구분선 -->*/}
                                </div>


                                    <li>
                                        <Link to="/category" className="link_gnb">
                                            <span className="txt_gnb" onClick={getCate}>사회</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/category" className="link_gnb">
                                            <span className="txt_gnb" onClick={getCate}>정치</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/category" className="link_gnb">
                                            <span className="txt_gnb" onClick={getCate}>경제</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/category" className="link_gnb">
                                            <span className="txt_gnb" onClick={getCate}>국제</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/category" className="link_gnb">
                                            <span className="txt_gnb" onClick={getCate}>문화</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/category" className="link_gnb">
                                            <span className="txt_gnb" onClick={getCate}>IT</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/category" className="link_gnb">
                                            <span className="txt_gnb" onClick={getCate}>스포츠</span></Link>
                                    </li>

                                <div className="sep-line">
                                    <div className="sep-line-br"></div>
                                    {/*// <!-- 구분선 -->*/}
                                </div>
                                <li><a href="" className="link_gnb">
                                    <span className="txt_gnb">MBC</span></a></li>
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
                                <li><a href="" className="link_gnb">
                                    <span className="txt_gnb">조선일보</span></a></li>
                            </ul>
                        </div>
                    </nav>
                </header>
                {/*// <!-- 헤더 끝 -->*/}


                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/category' element={<Category/>}/>
                    <Route path='/recommend' element={<Recommend/>}/>
                    <Route path='/Subscribe' element={<Subscribe/>}/>
                    <Route path='login' element={<Login/>}/>
                </Routes>

                {/*// <!-- footer -->*/}
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
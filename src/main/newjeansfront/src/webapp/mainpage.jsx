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
import SignUp from "./Components/SignUp.jsx";
import SignUp2 from "./Components/SignUp2";
import MyPage from "./Components/MyPage";
import Company from "./Components/Company";
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
                                        <Link to="/signUp">회원가입</Link>
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
                                <li><Link to="/company" className="link_gnb">
                                    <span className="txt_gnb">MBC</span></Link></li>
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
                                <li><Link to="/myPage" className="link_gnb">
                                    <span className="txt_gnb">조선일보</span></Link></li>
                                <li><a href="" className="btn-press">
                                    <span>더보기 ></span>
                                </a>
                                    {/*// <!-- 더보기 버튼 클릭하면 나타나는 내용 -->*/}
                                    {/*// <!-- 언론사 리스트 시작 -->*/}
                                    <div id="modal-press2" class="press-set-layer">
                                        <div class="press-list-wrap">
                                            <button type="button" class="btn-close">X</button>
                                            <ul class="press-list">
                                                <li>
                                                    <a href="" class="providerClick2">
                                                        <img loading="lazy" src="https://www.bigkinds.or.kr/assets/v3/img/provider/nspIcon_07101201.png" alt="디지털타임스"/>
                                                    </a>
                                                    <button type="button" class="btn-press-sel">
                                                        <span class="sr-only">선택</span>
                                                    </button>
                                                </li>
                                                <li>
                                                    <a href="" class="providerClick2">
                                                        <img loading="lazy" src="https://www.bigkinds.or.kr/assets/v3/img/provider/nspIcon_04100158.png" alt="데일리안"/>
                                                    </a>
                                                    <button type="button" class="btn-press-sel">
                                                        <span class="sr-only">선택</span>
                                                    </button>
                                                </li>
                                                <li>
                                                    <a href="" class="providerClick2">
                                                        <img loading="lazy" src="https://www.bigkinds.or.kr/assets/v3/img/provider/nspIcon_10100101.png" alt="스포츠서울"/>
                                                    </a>
                                                    <button type="button" class="btn-press-sel">
                                                        <span class="sr-only">선택</span>
                                                    </button>
                                                </li>
                                                <li>
                                                    <a href="" class="providerClick2">
                                                        <img loading="lazy" src="https://www.bigkinds.or.kr/assets/v3/img/provider/nspIcon_07100501.png" alt="전자신문"/>
                                                    </a>
                                                    <button type="button" class="btn-press-sel">
                                                        <span class="sr-only">선택</span>
                                                    </button>
                                                </li>
                                                <li>
                                                    <a href="" class="providerClick2">
                                                        <img loading="lazy" src="https://www.bigkinds.or.kr/assets/v3/img/provider/nspIcon_01500601.png" alt="매일신문"/>
                                                    </a>
                                                    <button type="button" class="btn-press-sel">
                                                        <span class="sr-only">선택</span>
                                                    </button>
                                                </li>
                                                <li>
                                                    <a href="" class="providerClick2">
                                                        <img loading="lazy" src="https://www.bigkinds.or.kr/assets/v3/img/provider/nspIcon_02100501.png" alt="파이낸셜뉴스"/>
                                                    </a>
                                                    <button type="button" class="btn-press-sel">
                                                        <span class="sr-only">선택</span>
                                                    </button>
                                                </li>
                                                <li>
                                                    <a href="" class="providerClick2">
                                                        <img loading="lazy" src="https://www.bigkinds.or.kr/assets/v3/img/provider/nspIcon_02100201.png" alt="머니투데이"/>
                                                    </a>
                                                    <button type="button" class="btn-press-sel">
                                                        <span class="sr-only">선택</span>
                                                    </button>
                                                </li>
                                                <li>
                                                    <a href="" class="providerClick2">
                                                        <img loading="lazy" src="https://www.bigkinds.or.kr/assets/v3/img/provider/nspIcon_02100701.png" alt="헤럴드경제"/>
                                                    </a>
                                                    <button type="button" class="btn-press-sel">
                                                        <span class="sr-only">선택</span>
                                                    </button>
                                                </li>
                                                <li>
                                                    <a href="" class="providerClick2">
                                                        <img loading="lazy" src="https://www.bigkinds.or.kr/assets/v3/img/provider/nspIcon_01100101.png" alt="경향신문"/>
                                                    </a>
                                                    <button type="button" class="btn-press-sel">
                                                        <span class="sr-only">선택</span>
                                                    </button>
                                                </li>
                                                <li>
                                                    <a href="" class="providerClick2">
                                                        <img loading="lazy" src="https://www.bigkinds.or.kr/assets/v3/img/provider/nspIcon_01100401.png" alt="동아일보"/>
                                                    </a>
                                                    <button type="button" class="btn-press-sel">
                                                        <span class="sr-only">선택</span>
                                                    </button>
                                                </li>
                                                <li>
                                                    <a href="" class="providerClick2">
                                                        <img loading="lazy" src="https://www.bigkinds.or.kr/assets/v3/img/provider/nspIcon_01100901.png" alt="중앙일보"/>
                                                    </a>
                                                    <button type="button" class="btn-press-sel">
                                                        <span class="sr-only">선택</span>
                                                    </button>
                                                </li>
                                                <li>
                                                    <a href="" class="providerClick2">
                                                        <img loading="lazy" src="https://www.bigkinds.or.kr/assets/v3/img/provider/nspIcon_01100701.png" alt="세계일보"/>
                                                    </a>
                                                    <button type="button" class="btn-press-sel">
                                                        <span class="sr-only">선택</span>
                                                    </button>
                                                </li>
                                                <li>
                                                    <a href="" class="providerClick2">
                                                        <img loading="lazy" src="https://www.bigkinds.or.kr/assets/v3/img/provider/nspIcon_01101101.png" alt="한국일보"/>
                                                    </a>
                                                    <button type="button" class="btn-press-sel">
                                                        <span class="sr-only">선택</span>
                                                    </button>
                                                </li>
                                                <li>
                                                    <a href="" class="providerClick2">
                                                        <img loading="lazy" src="https://img.tf.co.kr/index/2022/09/13/1663028192.gif" alt="더팩트"/>
                                                    </a>
                                                    <button type="button" class="btn-press-sel">
                                                        <span class="sr-only">선택</span>
                                                    </button>
                                                </li>
                                                <li>
                                                    <a href="" class="providerClick2">
                                                        <img loading="lazy" src="https://www.bigkinds.or.kr/assets/v3/img/provider/nspIcon_04100058.png" alt="노컷뉴스"/>
                                                    </a>
                                                    <button type="button" class="btn-press-sel">
                                                        <span class="sr-only">선택</span>
                                                    </button>
                                                </li>
                                                <li>
                                                    <a href="" class="providerClick2">
                                                        <img loading="lazy" src="https://www.bigkinds.or.kr/assets/v3/img/provider/nspIcon_04101808.png" alt="비즈워치"/>
                                                    </a>
                                                    <button type="button" class="btn-press-sel">
                                                        <span class="sr-only">선택</span>
                                                    </button>
                                                </li>
                                                <li>
                                                    <a href="" class="providerClick2">
                                                        <img loading="lazy" src="https://www.bigkinds.or.kr/assets/v3/img/provider/nspIcon_01100201.png" alt="국민일보"/>
                                                    </a>
                                                    <button type="button" class="btn-press-sel">
                                                        <span class="sr-only">선택</span>
                                                    </button>
                                                </li>
                                                <li>
                                                    <a href="" class="providerClick2">
                                                        <img loading="lazy" src="https://www.ddaily.co.kr/assets/images/common/logo.png" style={{width: "110px", height: "20px"}} alt="디지털데일리"/>
                                                    </a>
                                                    <button type="button" class="btn-press-sel">
                                                        <span class="sr-only">선택</span>
                                                    </button>
                                                </li>
                                                <li>
                                                    <a href="" class="providerClick2">
                                                        <img loading="lazy" src="https://zdnet.co.kr/images/zdnet_logo.png?ver=20220830" style={{width: "110px", height: "20px"}} alt="지디넷코리아"/>
                                                    </a>
                                                    <button type="button" class="btn-press-sel">
                                                        <span class="sr-only">선택</span>
                                                    </button>
                                                </li>
                                                <li>
                                                    <a href="" class="providerClick2">
                                                        <img loading="lazy" src="https://www.yonhapnewstv.co.kr/asset/img/common/img_logo_yhntv_navy.png" style={{width: "110px", height: "20px"}} alt="연합뉴스tv"/>
                                                    </a>
                                                    <button type="button" class="btn-press-sel">
                                                        <span class="sr-only">선택</span>
                                                    </button>
                                                </li>
                                                <li>
                                                    <a href="" class="providerClick2">
                                                        <img loading="lazy" src="./img/chosunBiz.png" alt="조선비즈"/>
                                                    </a>
                                                    <button type="button" class="btn-press-sel">
                                                        <span class="sr-only">선택</span>
                                                    </button>
                                                </li>
                                                <li>
                                                    <a href="" class="providerClick2">
                                                        <img loading="lazy" src="./img/koreaEconomic.png" alt="한국경제tv"/>
                                                    </a>
                                                    <button type="button" class="btn-press-sel">
                                                        <span class="sr-only">선택</span>
                                                    </button>
                                                </li>
                                                <li>
                                                    <a href="" class="providerClick2">
                                                        <img loading="lazy" src="https://menu.moneys.co.kr/moneys/assets/20240717163719/images/logo_moneys.svg" alt="머니s"/>
                                                    </a>
                                                    <button type="button" class="btn-press-sel">
                                                        <span class="sr-only">선택</span>
                                                    </button>
                                                </li>
                                                <li>
                                                    <a href="" class="providerClick2">
                                                        <img loading="lazy" src="./img/eyeNews.png" alt="아이뉴스24"/>
                                                    </a>
                                                    <button type="button" class="btn-press-sel">
                                                        <span class="sr-only">선택</span>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
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
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/signUp' element={<SignUp/>}/>
                    <Route path='/signUp2' element={<SignUp2/>}/>
                    <Route path='/myPage' element={<MyPage/>}/>
                    <Route path='/company' element={<Company/>}/>
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
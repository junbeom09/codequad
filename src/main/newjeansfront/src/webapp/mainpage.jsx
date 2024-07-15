import React from 'react';
import "./assets/css/mainpage.css";
import "./assets/css/header.css";
import "./assets/css/footer.css";

const Mainpage = () => {
    return (

        <div className="container-doc">
            <header id="header" className="header">
                <div className="hd-top">
                    <div className="inner">
                        <div>
                            <h1>
                                <a href="./mainpage.jsx">
                                    <img src="/assets/img/newjins_row_logo.png" alt="뉴진스로고"/>
                                </a>
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
                                    <a href="">로그인</a>
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
                                <a href="./mainpage.jsx" className="link_gnb" data-tiara-layer="home">
                                    <span className="txt_gnb">홈</span></a>
                            </li>
                            <li>
                                <a href="./recommend.jsx" className="link_gnb" data-tiara-layer="recommend">
                                    <span className="txt_gnb">추천</span></a>
                            </li>
                            <li>
                                <a href="./subscribe.jsx" className="link_gnb" data-tiara-layer="subscribe">
                                    <span className="txt_gnb">구독</span></a>
                            </li>
                            <div className="sep-line">
                                <div className="sep-line-br"></div>
                                {/*// <!-- 구분선 -->*/}
                            </div>
                            <li>
                                <a href="./social.jsx" className="link_gnb" data-tiara-layer="society">
                                    <span className="txt_gnb">사회</span></a>
                            </li>
                            <li>
                                <a href="./politics.jsx" className="link_gnb" data-tiara-layer="politics">
                                    <span className="txt_gnb">정치</span></a>
                            </li>
                            <li>
                                <a href="./economic.jsx" className="link_gnb" data-tiara-layer="economic">
                                    <span className="txt_gnb">경제</span></a>
                            </li>
                            <li>
                                <a href="./foreign.jsx" className="link_gnb" data-tiara-layer="foreign">
                                    <span className="txt_gnb">국제</span></a>
                            </li>
                            <li>
                                <a href="./culture.jsx" className="link_gnb" data-tiara-layer="culture">
                                    <span className="txt_gnb">문화</span></a>
                            </li>
                            <li>
                                <a href="./digital.jsx" className="link_gnb" data-tiara-layer="digital">
                                    <span className="txt_gnb">IT</span></a>
                            </li>
                            <li>
                                <a href="#" className="link_gnb" data-tiara-layer="sports">
                                    <span className="txt_gnb">스포츠</span></a>
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

            {/*// <!-- 메인 시작 -->*/}
            <main className="doc-main">
                <section className="inner-main">
                    <h2 id="mainContent" className="screen_out">홈</h2>
                    <div className="main-content">
                        <div className="content-article">
                            <div className="box_g box_news_issue" data-tiara-layer="headline">
                                <h3 className="screen_out">오늘의 이슈</h3>
                                <ul className="list_newsissue">
                                    {/*// <!-- 15개의 li 요소 반복-->*/}
                                    <li>
                                        <div className="item_issue" data-tiara-layer="headline1"><a
                                            className="wrap_thumb" data-tiara-layer="article_main" href=""><img
                                            className="thumb_g" src=""/></a>
                                            <div className="cont_thumb"><span className="info_thumb"><span
                                                className="logo_cp"><img className="thumb_g" src=""
                                                                         alt="전자신문"/></span><span
                                                className="txt_category">IT/과학</span></span><strong className="tit_g"><a
                                                className="link_txt" data-tiara-layer="article_main" href="">'韓
                                                경고등'…차세대 패키징 선점 위해 日·美 소부장 뭉쳤다</a></strong><span
                                                style={{
                                                    fontSize: "x-small",
                                                    color: "rgb(121, 119, 119)"
                                                }}>뉴스 요약 내용</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item_issue" data-tiara-layer="headline1"><a
                                            className="wrap_thumb" data-tiara-layer="article_main" href=""><img
                                            className="thumb_g" src=""/></a>
                                            <div className="cont_thumb"><span className="info_thumb"><span
                                                className="logo_cp"><img className="thumb_g" src=""
                                                                         alt="전자신문"/></span><span
                                                className="txt_category">IT/과학</span></span><strong className="tit_g"><a
                                                className="link_txt" data-tiara-layer="article_main" href="">'韓
                                                경고등'…차세대 패키징 선점 위해 日·美 소부장 뭉쳤다</a></strong><span
                                                style={{
                                                    fontSize: "x-small",
                                                    color: "rgb(121, 119, 119)"
                                                }}>뉴스 요약 내용</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item_issue" data-tiara-layer="headline1"><a
                                            className="wrap_thumb" data-tiara-layer="article_main" href=""><img
                                            className="thumb_g" src=""/></a>
                                            <div className="cont_thumb"><span className="info_thumb"><span
                                                className="logo_cp"><img className="thumb_g" src=""
                                                                         alt="전자신문"/></span><span
                                                className="txt_category">IT/과학</span></span><strong className="tit_g"><a
                                                className="link_txt" data-tiara-layer="article_main" href="">'韓
                                                경고등'…차세대 패키징 선점 위해 日·美 소부장 뭉쳤다</a></strong><span
                                                style={{
                                                    fontSize: "x-small",
                                                    color: "rgb(121, 119, 119)"
                                                }}>뉴스 요약 내용</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item_issue" data-tiara-layer="headline1"><a
                                            className="wrap_thumb" data-tiara-layer="article_main" href=""><img
                                            className="thumb_g" src=""/></a>
                                            <div className="cont_thumb"><span className="info_thumb"><span
                                                className="logo_cp"><img className="thumb_g" src=""
                                                                         alt="전자신문"/></span><span
                                                className="txt_category">IT/과학</span></span><strong className="tit_g"><a
                                                className="link_txt" data-tiara-layer="article_main" href="">'韓
                                                경고등'…차세대 패키징 선점 위해 日·美 소부장 뭉쳤다</a></strong><span
                                                style={{
                                                    fontSize: "x-small",
                                                    color: "rgb(121, 119, 119)"
                                                }}>뉴스 요약 내용</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item_issue" data-tiara-layer="headline1"><a
                                            className="wrap_thumb" data-tiara-layer="article_main" href=""><img
                                            className="thumb_g" src=""/></a>
                                            <div className="cont_thumb"><span className="info_thumb"><span
                                                className="logo_cp"><img className="thumb_g" src=""
                                                                         alt="전자신문"/></span><span
                                                className="txt_category">IT/과학</span></span><strong className="tit_g"><a
                                                className="link_txt" data-tiara-layer="article_main" href="">'韓
                                                경고등'…차세대 패키징 선점 위해 日·美 소부장 뭉쳤다</a></strong><span
                                                style={{
                                                    fontSize: "x-small",
                                                    color: "rgb(121, 119, 119)"
                                                }}>뉴스 요약 내용</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item_issue" data-tiara-layer="headline1"><a
                                            className="wrap_thumb" data-tiara-layer="article_main" href=""><img
                                            className="thumb_g" src=""/></a>
                                            <div className="cont_thumb"><span className="info_thumb"><span
                                                className="logo_cp"><img className="thumb_g" src=""
                                                                         alt="전자신문"/></span><span
                                                className="txt_category">IT/과학</span></span><strong className="tit_g"><a
                                                className="link_txt" data-tiara-layer="article_main" href="">'韓
                                                경고등'…차세대 패키징 선점 위해 日·美 소부장 뭉쳤다</a></strong><span
                                                style={{
                                                    fontSize: "x-small",
                                                    color: "rgb(121, 119, 119)"
                                                }}>뉴스 요약 내용</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item_issue" data-tiara-layer="headline1"><a
                                            className="wrap_thumb" data-tiara-layer="article_main" href=""><img
                                            className="thumb_g" src=""/></a>
                                            <div className="cont_thumb"><span className="info_thumb"><span
                                                className="logo_cp"><img className="thumb_g" src=""
                                                                         alt="전자신문"/></span><span
                                                className="txt_category">IT/과학</span></span><strong className="tit_g"><a
                                                className="link_txt" data-tiara-layer="article_main" href="">'韓
                                                경고등'…차세대 패키징 선점 위해 日·美 소부장 뭉쳤다</a></strong><span
                                                style={{
                                                    fontSize: "x-small",
                                                    color: "rgb(121, 119, 119)"
                                                }}>뉴스 요약 내용</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item_issue" data-tiara-layer="headline1"><a
                                            className="wrap_thumb" data-tiara-layer="article_main" href=""><img
                                            className="thumb_g" src=""/></a>
                                            <div className="cont_thumb"><span className="info_thumb"><span
                                                className="logo_cp"><img className="thumb_g" src=""
                                                                         alt="전자신문"/></span><span
                                                className="txt_category">IT/과학</span></span><strong className="tit_g"><a
                                                className="link_txt" data-tiara-layer="article_main" href="">'韓
                                                경고등'…차세대 패키징 선점 위해 日·美 소부장 뭉쳤다</a></strong><span
                                                style={{
                                                    fontSize: "x-small",
                                                    color: "rgb(121, 119, 119)"
                                                }}>뉴스 요약 내용</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item_issue" data-tiara-layer="headline1"><a
                                            className="wrap_thumb" data-tiara-layer="article_main" href=""><img
                                            className="thumb_g" src=""/></a>
                                            <div className="cont_thumb"><span className="info_thumb"><span
                                                className="logo_cp"><img className="thumb_g" src=""
                                                                         alt="전자신문"/></span><span
                                                className="txt_category">IT/과학</span></span><strong className="tit_g"><a
                                                className="link_txt" data-tiara-layer="article_main" href="">'韓
                                                경고등'…차세대 패키징 선점 위해 日·美 소부장 뭉쳤다</a></strong><span
                                                style={{
                                                    fontSize: "x-small",
                                                    color: "rgb(121, 119, 119)"
                                                }}>뉴스 요약 내용</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item_issue" data-tiara-layer="headline1"><a
                                            className="wrap_thumb" data-tiara-layer="article_main" href=""><img
                                            className="thumb_g" src=""/></a>
                                            <div className="cont_thumb"><span className="info_thumb"><span
                                                className="logo_cp"><img className="thumb_g" src=""
                                                                         alt="전자신문"/></span><span
                                                className="txt_category">IT/과학</span></span><strong className="tit_g"><a
                                                className="link_txt" data-tiara-layer="article_main" href="">'韓
                                                경고등'…차세대 패키징 선점 위해 日·美 소부장 뭉쳤다</a></strong><span
                                                style={{
                                                    fontSize: "x-small",
                                                    color: "rgb(121, 119, 119)"
                                                }}>뉴스 요약 내용</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item_issue" data-tiara-layer="headline1"><a
                                            className="wrap_thumb" data-tiara-layer="article_main" href=""><img
                                            className="thumb_g" src=""/></a>
                                            <div className="cont_thumb"><span className="info_thumb"><span
                                                className="logo_cp"><img className="thumb_g" src=""
                                                                         alt="전자신문"/></span><span
                                                className="txt_category">IT/과학</span></span><strong className="tit_g"><a
                                                className="link_txt" data-tiara-layer="article_main" href="">'韓
                                                경고등'…차세대 패키징 선점 위해 日·美 소부장 뭉쳤다</a></strong><span
                                                style={{
                                                    fontSize: "x-small",
                                                    color: "rgb(121, 119, 119)"
                                                }}>뉴스 요약 내용</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item_issue" data-tiara-layer="headline1"><a
                                            className="wrap_thumb" data-tiara-layer="article_main" href=""><img
                                            className="thumb_g" src=""/></a>
                                            <div className="cont_thumb"><span className="info_thumb"><span
                                                className="logo_cp"><img className="thumb_g" src=""
                                                                         alt="전자신문"/></span><span
                                                className="txt_category">IT/과학</span></span><strong className="tit_g"><a
                                                className="link_txt" data-tiara-layer="article_main" href="">'韓
                                                경고등'…차세대 패키징 선점 위해 日·美 소부장 뭉쳤다</a></strong><span
                                                style={{
                                                    fontSize: "x-small",
                                                    color: "rgb(121, 119, 119)"
                                                }}>뉴스 요약 내용</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item_issue" data-tiara-layer="headline1"><a
                                            className="wrap_thumb" data-tiara-layer="article_main" href=""><img
                                            className="thumb_g" src=""/></a>
                                            <div className="cont_thumb"><span className="info_thumb"><span
                                                className="logo_cp"><img className="thumb_g" src=""
                                                                         alt="전자신문"/></span><span
                                                className="txt_category">IT/과학</span></span><strong className="tit_g"><a
                                                className="link_txt" data-tiara-layer="article_main" href="">'韓
                                                경고등'…차세대 패키징 선점 위해 日·美 소부장 뭉쳤다</a></strong><span
                                                style={{
                                                    fontSize: "x-small",
                                                    color: "rgb(121, 119, 119)"
                                                }}>뉴스 요약 내용</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item_issue" data-tiara-layer="headline1"><a
                                            className="wrap_thumb" data-tiara-layer="article_main" href=""><img
                                            className="thumb_g" src=""/></a>
                                            <div className="cont_thumb"><span className="info_thumb"><span
                                                className="logo_cp"><img className="thumb_g" src=""
                                                                         alt="전자신문"/></span><span
                                                className="txt_category">IT/과학</span></span><strong className="tit_g"><a
                                                className="link_txt" data-tiara-layer="article_main" href="">'韓
                                                경고등'…차세대 패키징 선점 위해 日·美 소부장 뭉쳤다</a></strong><span
                                                style={{
                                                    fontSize: "x-small",
                                                    color: "rgb(121, 119, 119)"
                                                }}>뉴스 요약 내용</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item_issue" data-tiara-layer="headline1"><a
                                            className="wrap_thumb" data-tiara-layer="article_main" href=""><img
                                            className="thumb_g" src=""/></a>
                                            <div className="cont_thumb"><span className="info_thumb"><span
                                                className="logo_cp"><img className="thumb_g" src=""
                                                                         alt="전자신문"/></span><span
                                                className="txt_category">IT/과학</span></span><strong className="tit_g"><a
                                                className="link_txt" data-tiara-layer="article_main" href="">'韓
                                                경고등'…차세대 패키징 선점 위해 日·美 소부장 뭉쳤다</a></strong><span
                                                style={{
                                                    fontSize: "x-small",
                                                    color: "rgb(121, 119, 119)"
                                                }}>뉴스 요약 내용</span>
                                            </div>
                                        </div>
                                    </li>


                                </ul>
                            </div>
                            {/*// <!-- 추천 뉴스 -->*/}
                            <div className="box_g" data-tiara-layer="today_series">
                                <h3 className="tit_box">추천 뉴스</h3>
                                <ul style={{display: "flex"}}>
                                    {/*// <!-- 8개의 li 요소 반복 -->*/}
                                    <li style={{paddingRight: "40px", paddingBottom: "20px"}}>
                                        <div className="item_todayseries">
                                            <div className="subtxt_thumb">
                                                <a href="" className="info_cp" data-tiara-layer="series">
                                                    <span className="screen_out">출처 </span>
                                                    뉴스퀘어10
                                                </a>
                                            </div>
                                            <a href="" className="wrap_thumb" data-tiara-layer="article_thumb">
                                                <img src="" alt=""/>
                                            </a>
                                            <div className="cont_thumb">
                                                <strong className="tit_g">
                                                    <a href="https://v.daum.net/v/20240710102728284"
                                                       className="link_txt" data-tiara-layer="article">

                                                        [뉴스퀘어10] 밤사이 충청·남부 '물 폭탄'...장마 끝나면 곧바로 찜통더위?

                                                    </a>
                                                </strong>
                                                <span className="info_thumb">
                                                <span className="txt_info">YTN</span>
                                            </span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item_todayseries">
                                            <div className="subtxt_thumb">
                                                <a href="" className="info_cp" data-tiara-layer="series">
                                                    <span className="screen_out">출처 </span>
                                                    뉴스퀘어10
                                                </a>
                                            </div>
                                            <a href="" className="wrap_thumb" data-tiara-layer="article_thumb">
                                                <img src="" alt=""/>
                                            </a>
                                            <div className="cont_thumb">
                                                <strong className="tit_g">
                                                    <a href="https://v.daum.net/v/20240710102728284"
                                                       className="link_txt" data-tiara-layer="article">

                                                        [뉴스퀘어10] 밤사이 충청·남부 '물 폭탄'...장마 끝나면 곧바로 찜통더위?

                                                    </a>
                                                </strong>
                                                <span className="info_thumb">
                                                <span className="txt_info">YTN</span>
                                            </span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <ul style={{display: "flex"}}>
                                    <li style={{paddingRight: "40px", paddingBottom: "20px"}}>
                                        <div className="item_todayseries">
                                            <div className="subtxt_thumb">
                                                <a href="" className="info_cp" data-tiara-layer="series">
                                                    <span className="screen_out">출처 </span>
                                                    뉴스퀘어10
                                                </a>
                                            </div>
                                            <a href="" className="wrap_thumb" data-tiara-layer="article_thumb">
                                                <img src="" alt=""/>
                                            </a>
                                            <div className="cont_thumb">
                                                <strong className="tit_g">
                                                    <a href="https://v.daum.net/v/20240710102728284"
                                                       className="link_txt" data-tiara-layer="article">

                                                        [뉴스퀘어10] 밤사이 충청·남부 '물 폭탄'...장마 끝나면 곧바로 찜통더위?

                                                    </a>
                                                </strong>
                                                <span className="info_thumb">
                                                <span className="txt_info">YTN</span>
                                            </span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item_todayseries">
                                            <div className="subtxt_thumb">
                                                <a href="" className="info_cp" data-tiara-layer="series">
                                                    <span className="screen_out">출처 </span>
                                                    뉴스퀘어10
                                                </a>
                                            </div>
                                            <a href="" className="wrap_thumb" data-tiara-layer="article_thumb">
                                                <img src="" alt=""/>
                                            </a>
                                            <div className="cont_thumb">
                                                <strong className="tit_g">
                                                    <a href="https://v.daum.net/v/20240710102728284"
                                                       className="link_txt" data-tiara-layer="article">

                                                        [뉴스퀘어10] 밤사이 충청·남부 '물 폭탄'...장마 끝나면 곧바로 찜통더위?

                                                    </a>
                                                </strong>
                                                <span className="info_thumb">
                                                <span className="txt_info">YTN</span>
                                            </span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <a href="./recommend.jsx" className="link_more"
                                   data-tiara-layer="today_series more">전체보기</a>
                            </div>
                        </div>
                        {/*// <!-- side menu 시작 -->*/}
                        <div className="content-aside">
                            <div className="box_side" data-tiara-layer="RIGHT today">
                                <h3 className="screen_out">코스피/코스닥 지수</h3>
                                <div className="stock_wrap">
                                    <div className="price_stock">
                                        <a href="https://finance.daum.net/domestic/kosdaq">
                                            <div className="item_kosdaq">
                                                <strong className="tit_stock">코스닥</strong>
                                                <span className="rate_stock rate_down">
                                                <span className="num_stock">856.25</span>
                                                <span className="num_change">
                                                    <span className="num_prev">
                                                        <span className="screen_out">전일비</span>
                                                        <span className="ico_down">하락</span>
                                                        4.17
                                                    </span>
                                                    <span className="num_rate">
                                                        <span className="screen_out">등락률</span>
                                                        (-0.48%)
                                                    </span>
                                                </span>
                                            </span>
                                            </div>
                                        </a>
                                        <a href="https://finance.daum.net/domestic/kospi">
                                            <div className="item_kospi">
                                                <strong className="tit_stock">코스피</strong>
                                                <span className="rate_stock rate_down">
                                                <span className="num_stock">2,859.97</span>
                                                <span className="num_change">
                                                    <span className="num_prev">
                                                        <span className="screen_out">전일비</span>
                                                        <span className="ico_down">상승</span>
                                                        7.41
                                                    </span>
                                                    <span className="num_rate">
                                                        <span className="screen_out">등락률</span>
                                                        (-0.26%)
                                                    </span>
                                                </span>
                                            </span>
                                            </div>
                                        </a>
                                    </div>
                                    <span className="time_stock">
                                    <span className="screen_out">기준시간</span>
                                    10:32 장중
                                </span>
                                </div>
                            </div>
                            {/*// <!-- 언론사 구독 -->*/}
                            <div className="box_side box_photonews" data-tiara-layer="photonews">
                                <h3 className="tit_box">관심있는 언론사를 더 구독해보세요.</h3>
                                <ul className="list_photonews">
                                    <li className="cjs_age_item">
                                        <a href="" className="cjs_link_age _item" role="checkbox" aria-checked="false"
                                           data-office_id="640">
                                            <div className="cjs_age_mw">
                                                <img loading="lazy"
                                                     src="https://mimgnews.pstatic.net/image/upload/office_logo/640/2020/05/06/logo_640_56_20200506111106.png"
                                                     width="54" height="54" onError="showNoImage(this)"/>
                                            </div>
                                            <div className="cjs_age_name">코리아중앙데일리</div>
                                        </a>
                                    </li>
                                    <li className="cjs_age_item">
                                        <a href="" className="cjs_link_age _item" role="checkbox" aria-checked="false"
                                           data-office_id="662">
                                            <div className="cjs_age_mw">
                                                <img loading="lazy"
                                                     src="https://mimgnews.pstatic.net/image/upload/office_logo/662/2024/03/06/logo_662_56_20240306140536.png"
                                                     width="54" height="54" onError="showNoImage(this)"/>
                                            </div>
                                            <div className="cjs_age_name">농민신문</div>
                                        </a>
                                    </li>
                                    <li className="cjs_age_item">
                                        <a href="" className="cjs_link_age _item" role="checkbox" aria-checked="false"
                                           data-office_id="346">
                                            <div className="cjs_age_mw">
                                                <img loading="lazy"
                                                     src="https://mimgnews.pstatic.net/image/upload/office_logo/346/2023/02/24/logo_346_56_20230224143254.jpg"
                                                     width="54" height="54" onError="showNoImage(this)"/>
                                            </div>
                                            <div className="cjs_age_name">헬스조선</div>
                                        </a>
                                    </li>
                                    <li className="cjs_age_item">
                                        <a href="" className="cjs_link_age _item" role="checkbox" aria-checked="false"
                                           data-office_id="296">
                                            <div className="cjs_age_mw">
                                                <img loading="lazy"
                                                     src="https://mimgnews.pstatic.net/image/upload/office_logo/296/2021/08/31/logo_296_56_20210831152430.png"
                                                     width="54" height="54" onError="showNoImage(this)"/>
                                            </div>
                                            <div className="cjs_age_name">코메디닷컴</div>
                                        </a>
                                    </li>
                                    <li className="cjs_age_item">
                                        <a href="" className="cjs_link_age _item" role="checkbox" aria-checked="false"
                                           data-office_id="584">
                                            <div className="cjs_age_mw">
                                                <img loading="lazy"
                                                     src="https://mimgnews.pstatic.net/image/upload/office_logo/584/2018/09/20/logo_584_56_20180920154720.png"
                                                     width="54" height="54" onError="showNoImage(this)"/>
                                            </div>
                                            <div className="cjs_age_name">동아사이언스</div>
                                        </a>
                                    </li>
                                    <li className="cjs_age_item">
                                        <a href="" className="cjs_link_age _item" role="checkbox" aria-checked="false"
                                           data-office_id="007">
                                            <div className="cjs_age_mw">
                                                <img loading="lazy"
                                                     src="https://mimgnews.pstatic.net/image/upload/office_logo/007/2020/04/02/logo_007_56_20200402163602.png"
                                                     width="54" height="54" onError="showNoImage(this)"/>
                                            </div>
                                            <div className="cjs_age_name">일다</div>
                                        </a>
                                    </li>
                                    <li className="cjs_age_item">
                                        <a href="" className="cjs_link_age _item" role="checkbox" aria-checked="false"
                                           data-office_id="310">
                                            <div className="cjs_age_mw">
                                                <img loading="lazy"
                                                     src="https://mimgnews.pstatic.net/image/upload/office_logo/310/2020/08/11/logo_310_56_20200811154942.png"
                                                     width="54" height="54" onError="showNoImage(this)"/>
                                            </div>
                                            <div className="cjs_age_name">여성신문</div>
                                        </a>
                                    </li>
                                    <li className="cjs_age_item">
                                        <a href="" className="cjs_link_age _item" role="checkbox" aria-checked="false"
                                           data-office_id="607">
                                            <div className="cjs_age_mw">
                                                <img loading="lazy"
                                                     src="https://mimgnews.pstatic.net/image/upload/office_logo/607/2018/10/02/logo_607_56_20181002184602.png"
                                                     width="54" height="54" onError="showNoImage(this)"/>
                                            </div>
                                            <div className="cjs_age_name">뉴스타파</div>
                                        </a>
                                    </li>
                                    <li className="cjs_age_item">
                                        <a href="" className="cjs_link_age _item" role="checkbox" aria-checked="false"
                                           data-office_id="044">
                                            <div className="cjs_age_mw">
                                                <img loading="lazy"
                                                     src="https://mimgnews.pstatic.net/image/upload/office_logo/044/2018/10/02/logo_044_56_20181002183002.png"
                                                     width="54" height="54" onError="showNoImage(this)"/>
                                            </div>
                                            <div className="cjs_age_name">코리아헤럴드</div>
                                        </a>
                                    </li>
                                    <li className="cjs_age_item">
                                        <a href="" className="cjs_link_age _item" role="checkbox" aria-checked="false"
                                           data-office_id="127">
                                            <div className="cjs_age_mw">
                                                <img loading="lazy"
                                                     src="https://mimgnews.pstatic.net/image/upload/office_logo/127/2020/04/02/logo_127_56_20200402162102.png"
                                                     width="54" height="54" onError="showNoImage(this)"/>
                                            </div>
                                            <div className="cjs_age_name">기자협회보</div>
                                        </a>
                                    </li>
                                    <li className="cjs_age_item">
                                        <a href="" className="cjs_link_age _item" role="checkbox" aria-checked="false">
                                            <div className="cjs_age_mw">
                                                <img loading="lazy"
                                                     src="https://mimgnews.pstatic.net/image/upload/office_logo/009/2018/07/20/logo_009_56_20180720194820.png"
                                                     width="54" height="54" onError="showNoImage(this)"/>
                                            </div>
                                            <div className="cjs_age_name">매일경제</div>
                                        </a>
                                    </li>
                                    <li className="cjs_age_item">
                                        <a href="" className="cjs_link_age _item" role="checkbox" aria-checked="false">
                                            <div className="cjs_age_mw">
                                                <img loading="lazy"
                                                     src="https://mimgnews.pstatic.net/image/upload/office_logo/018/2018/07/18/logo_018_56_20180718152418.png"
                                                     width="54" height="54" onError="showNoImage(this)"/>
                                            </div>
                                            <div className="cjs_age_name">이데일리</div>
                                        </a>
                                    </li>
                                    <li className="cjs_age_item">
                                        <a href="" className="cjs_link_age _item" role="checkbox" aria-checked="false">
                                            <div className="cjs_age_mw">
                                                <img loading="lazy"
                                                     src="https://mimgnews.pstatic.net/image/upload/office_logo/277/2018/07/18/logo_277_56_20180718153218.png"
                                                     width="54" height="54" onError="showNoImage(this)"/>
                                            </div>
                                            <div className="cjs_age_name">아시아경제</div>
                                        </a>
                                    </li>
                                    <li className="cjs_age_item">
                                        <a href="" className="cjs_link_age _item" role="checkbox" aria-checked="false">
                                            <div className="cjs_age_mw">
                                                <img loading="lazy"
                                                     src="https://mimgnews.pstatic.net/image/upload/office_logo/008/2018/09/13/logo_008_56_20180913140213.png"
                                                     width="54" height="54" onError="showNoImage(this)"/>
                                            </div>
                                            <div className="cjs_age_name">머니투데이</div>
                                        </a>
                                    </li>
                                    <li className="cjs_age_item">
                                        <a href="" className="cjs_link_age _item" role="checkbox" aria-checked="false">
                                            <div className="cjs_age_mw">
                                                <img loading="lazy"
                                                     src="https://mimgnews.pstatic.net/image/upload/office_logo/014/2020/12/23/logo_014_56_20201223183322.png"
                                                     width="54" height="54" onError="showNoImage(this)"/>
                                            </div>
                                            <div className="cjs_age_name">파이낸셜뉴스</div>
                                        </a>
                                    </li>
                                    <li className="cjs_age_item">
                                        <a href="" className="cjs_link_age _item" role="checkbox" aria-checked="false">
                                            <div className="cjs_age_mw">
                                                <img loading="lazy"
                                                     src="https://mimgnews.pstatic.net/image/upload/office_logo/648/2023/02/13/logo_648_56_20230213170647.png"
                                                     width="54" height="54" onError="showNoImage(this)"/>
                                            </div>
                                            <div className="cjs_age_name">비즈워치</div>
                                        </a>
                                    </li>
                                    <li className="cjs_age_item">
                                        <a href="" className="cjs_link_age _item" role="checkbox" aria-checked="false">
                                            <div className="cjs_age_mw">
                                                <img loading="lazy"
                                                     src="https://mimgnews.pstatic.net/image/upload/office_logo/021/2022/08/04/logo_021_56_20220804125306.png"
                                                     width="54" height="54" onError="showNoImage(this)"/>
                                            </div>
                                            <div className="cjs_age_name">문화일보</div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/*// <!-- 광고 -->*/}
                            <div className="box_side box_ad">
                                <ins className="kakao_ad_area">
                                    <div data-ad-creative-wrap="outer"
                                         style={{position: "absolute", maxHeight: "inherit", inset: "0px"}}>
                                        광고
                                    </div>
                                </ins>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
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
    );
};

export default Mainpage;
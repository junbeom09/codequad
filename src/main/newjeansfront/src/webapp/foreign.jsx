import React from 'react';
import "./assets/css/mainpage.css";
import "./assets/css/header.css";
import "./assets/css/footer.css"
import "./assets/css/category.css"

const Foreign = () => {
    return (
        <div className="container-doc">
            {/*// <!-- 헤더 시작 -->*/}
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
                            <div className="srch-group input-group" style="display: flex;">
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
                        <div style="display: flex; justify-content: space-between;">
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
                        <ul className="gnb_comm" data-tiara-layer="GNB tab" style="display: flex;">
                            <li>
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
                            <li className="on">
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

            <div id="ct_wrap" className="ct_wrap">
                <div className="ct_lnb">
                    <div className="ct_lnb_inner">
                        <strong className="ct_lnb_date">07.11(목)</strong>
                    </div>
                </div>
                <section className="inner-main">
                    <h2 id="mainContent" className="screen_out">사회</h2>
                    <div className="main-sub">
                        {/*// <!-- 메인뉴스 리스트 -->*/}
                        <div className="box_g">
                            <h3 className="screen_out">메인 뉴스</h3>
                            <ul className="list_mainnews">
                                <li>
                                    <div className="item_column">
                                        <a href="" className="wrap_thumb">
                                            <img
                                                src="https://img1.daumcdn.net/thumb/S224x140ht.u/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fnews%2F202407%2F11%2FNEWS1%2F20240711143351513wksq.jpg&scode=media2"
                                                className="thumb_g"/>
                                        </a>
                                        <div className="cont_thumb">
                                            <strong className="tit_g">
                                                <a href="https://v.daum.net/v/20240711143348311" className="link_txt">
                                                    절도 전과 5범 또 절도…차털이 일삼은 30대 실형
                                                </a>
                                            </strong>
                                            <span className="info_thumb">
                                            <span className="txt_info">뉴스1</span>
                                        </span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="item_column">
                                        <a href="" className="wrap_thumb">
                                            <img
                                                src="https://img1.daumcdn.net/thumb/S224x140ht.u/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fnews%2F202407%2F11%2FNEWS1%2F20240711143351513wksq.jpg&scode=media2"
                                                className="thumb_g"/>
                                        </a>
                                        <div className="cont_thumb">
                                            <strong className="tit_g">
                                                <a href="https://v.daum.net/v/20240711143348311" className="link_txt">
                                                    절도 전과 5범 또 절도…차털이 일삼은 30대 실형
                                                </a>
                                            </strong>
                                            <span className="info_thumb">
                                            <span className="txt_info">뉴스1</span>
                                        </span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="item_column">
                                        <a href="" className="wrap_thumb">
                                            <img
                                                src="https://img1.daumcdn.net/thumb/S224x140ht.u/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fnews%2F202407%2F11%2FNEWS1%2F20240711143351513wksq.jpg&scode=media2"
                                                className="thumb_g"/>
                                        </a>
                                        <div className="cont_thumb">
                                            <strong className="tit_g">
                                                <a href="https://v.daum.net/v/20240711143348311" className="link_txt">
                                                    절도 전과 5범 또 절도…차털이 일삼은 30대 실형
                                                </a>
                                            </strong>
                                            <span className="info_thumb">
                                            <span className="txt_info">뉴스1</span>
                                        </span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="item_column">
                                        <a href="" className="wrap_thumb">
                                            <img
                                                src="https://img1.daumcdn.net/thumb/S224x140ht.u/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fnews%2F202407%2F11%2FNEWS1%2F20240711143351513wksq.jpg&scode=media2"
                                                className="thumb_g"/>
                                        </a>
                                        <div className="cont_thumb">
                                            <strong className="tit_g">
                                                <a href="https://v.daum.net/v/20240711143348311" className="link_txt">
                                                    절도 전과 5범 또 절도…차털이 일삼은 30대 실형
                                                </a>
                                            </strong>
                                            <span className="info_thumb">
                                            <span className="txt_info">뉴스1</span>
                                        </span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="item_column">
                                        <a href="" className="wrap_thumb">
                                            <img
                                                src="https://img1.daumcdn.net/thumb/S224x140ht.u/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fnews%2F202407%2F11%2FNEWS1%2F20240711143351513wksq.jpg&scode=media2"
                                                className="thumb_g"/>
                                        </a>
                                        <div className="cont_thumb">
                                            <strong className="tit_g">
                                                <a href="https://v.daum.net/v/20240711143348311" className="link_txt">
                                                    절도 전과 5범 또 절도…차털이 일삼은 30대 실형
                                                </a>
                                            </strong>
                                            <span className="info_thumb">
                                            <span className="txt_info">뉴스1</span>
                                        </span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="item_column">
                                        <a href="" className="wrap_thumb">
                                            <img
                                                src="https://img1.daumcdn.net/thumb/S224x140ht.u/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fnews%2F202407%2F11%2FNEWS1%2F20240711143351513wksq.jpg&scode=media2"
                                                className="thumb_g"/>
                                        </a>
                                        <div className="cont_thumb">
                                            <strong className="tit_g">
                                                <a href="https://v.daum.net/v/20240711143348311" className="link_txt">
                                                    절도 전과 5범 또 절도…차털이 일삼은 30대 실형
                                                </a>
                                            </strong>
                                            <span className="info_thumb">
                                            <span className="txt_info">뉴스1</span>
                                        </span>
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>

                        {/*// <!--사회뉴스 리스트-->*/}
                        <div className="box_g box_news_major">
                            <h3 className="tit_box">국제 뉴스</h3>
                            <ul className="list_newsmajor">
                                <li>
                                    <strong className="tit_g">
                                        <span className="info_cp">연합뉴스</span>
                                        <a href="https://v.daum.net/v/20240711143225229" className="link_txt">
                                            [광주소식] 무등산국립공원 여름철 불법행위 집중 단속
                                        </a>
                                    </strong>
                                </li>
                                <li>
                                    <strong className="tit_g">
                                        <span className="info_cp">연합뉴스</span>
                                        <a href="https://v.daum.net/v/20240711143221217" className="link_txt">
                                            [모멘트] 대법 "해고된 아사히글라스 하청근로자들, 직접 고용해야"
                                        </a>
                                    </strong>
                                </li>
                                <li>
                                    <strong className="tit_g">
                                        <span className="info_cp">뉴스1</span>
                                        <a href="https://v.daum.net/v/20240711143250265" className="link_txt">
                                            '美 코스트코 연회비 인상, 국내 연회비는?'
                                        </a>
                                    </strong>
                                </li>
                                <li>
                                    <strong className="tit_g">
                                        <span className="info_cp">뉴스1</span>
                                        <a href="https://v.daum.net/v/20240711143240253" className="link_txt">
                                            은평구, 저소득층 '스포츠강좌 이용권' 대상자 추가 모집
                                        </a>
                                    </strong>
                                </li>
                                <li>
                                    <strong className="tit_g">
                                        <span className="info_cp">뉴스1</span>
                                        <a href="https://v.daum.net/v/20240711143243260">
                                            과거 유흥가 밤고개, 청주 최대 문화 부흥가로 탈바꿈
                                        </a>
                                    </strong>
                                </li>
                                <li>
                                    <strong className="tit_g">
                                        <span className="info_cp">뉴스1</span>
                                        <a href="https://v.daum.net/v/20240711143242257">
                                            [속보] 박성재 장관, 野 검찰청 폐지 추진 "의도 의심스러워"
                                        </a>
                                    </strong>
                                </li>
                                <li>
                                    <strong className="tit_g">
                                        <span className="info_cp">연합뉴스</span>
                                        <a href="https://v.daum.net/v/20240711143217207">
                                            광주경찰, 집중 호우 재난 발생시 '코드1' 대응
                                        </a>
                                    </strong>
                                </li>
                                <li>
                                    <strong className="tit_g">
                                        <span className="info_cp">이데일리</span>
                                        <a href="https://v.daum.net/v/20240711143334299">
                                            임상섭 산림청장 “산림재난으로부터 국민안전 지킬 것”
                                        </a>
                                    </strong>
                                </li>
                                <li>
                                    <strong className="tit_g">
                                        <span className="info_cp">뉴시스</span>
                                        <a href="https://v.daum.net/v/20240711143337305">
                                            검찰, '김만배 돈거래' 전직 언론인 2명 구속영장 청구
                                        </a>
                                    </strong>
                                </li>
                                <li>
                                    <strong className="tit_g">
                                        <span className="info_cp">뉴시스</span>
                                        <a href="https://v.daum.net/v/20240711143241255">
                                            "끝까지 찾습니다" 육군31사단, 6·25전사자 발굴유해 합동영결식
                                        </a>
                                    </strong>
                                </li>
                            </ul>
                        </div>

                        {/*// <!-- 코스피 코스닥 -->*/}
                        <div className="box_side" data-tiara-layer="RIGHT today">
                            <h3 className="screen_out">코스피/코스닥 지수</h3>
                            <div className="stock_wrap">
                                <div className="price_stock">
                                    <a href="">
                                        <div className="item_kosdaq">
                                            <strong className="tit_stock">코스닥</strong>
                                            <span className="rate_stock rate_down">
                                            <span className="num_stock">854.18</span>
                                            <span className="num_change">
                                                <span className="num_prev">
                                                    <span className="screen_out">전일비</span>
                                                    <span className="ico_down">하락</span>
                                                    4.37
                                                </span>
                                                <span className="num_rate">
                                                    <span className="screen_out">등락률</span>
                                                    (-0.51%)
                                                </span>
                                            </span>
                                        </span>
                                        </div>
                                    </a>
                                    <a href="">
                                        <div className="item_kospi">
                                            <strong className="tit_stock">코스피</strong>
                                            <span className="rate_stock rate_up">
                                            <span className="num_stock">2,886.33</span>
                                            <span className="num_change">
                                                <span className="num_prev">
                                                    <span className="screen_out">전일비</span>
                                                    <span className="ico_up">상승</span>
                                                    18.34
                                                </span>
                                                <span className="num_rate">
                                                    <span className="screen_out">등락률</span>
                                                    (0.64%)
                                                </span>
                                            </span>
                                        </span>
                                        </div>
                                    </a>
                                </div>
                                <span className="time_stock">
                                <span className="screen_out">기준시간</span>
                                14:39 장중
                            </span>
                            </div>
                        </div>

                        {/*// <!-- 광고 -->*/}
                        <div className="box_side box_ad">
                            <ins className="kakao_ad_area aside_ad"
                                 style={{
                                     display: "block",
                                     position: "relative",
                                     textDecoration: "none", minWidth: "250px", minHeight: "250px"
                                 }}>
                                <div data-ad-creative-wrap="outer"
                                     style={{position: "absolute", maxHeight: "inherit", inset: "0px"}}>
                                    {/*// <!-- 광고 코드 -->*/}
                                    광고
                                </div>
                            </ins>
                        </div>
                    </div>
                </section>
            </div>
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

export default Foreign;
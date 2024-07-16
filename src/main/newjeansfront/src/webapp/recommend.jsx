import React from 'react';
import "./assets/css/mainpage.css";
import "./assets/css/header.css";
import "./assets/css/footer.css"
import "./assets/css/recommend.css"

const Recommend = () => {
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
                            <li>
                                <a href="./mainpage.jsx" className="link_gnb" data-tiara-layer="home">
                                    <span className="txt_gnb">홈</span></a>
                            </li>
                            <li className="on">
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

            {/*// <!-- 메인 시작-->*/}
            <div id="ct" role="main" className="main_wrap as_opinion as_opinion_serialization">
                <div className="main_container">
                    <section className="main_content _series_more_view">
                        <h2 className="blind">콘텐츠</h2>
                        <div className="opinion_section">
                            <header className="opinion_header">
                                <h2 className="title">추천 뉴스</h2>
                            </header>
                            <div className="opinion_filter_area _series_filter">
                                <div className="opinion_filter_select">
                                    <div className="opinion_select_wrap as_type_category _category_button">
                                        <button type="button" className="opinion_select_btn _category_label">분류</button>
                                        <div aria-hidden="true"
                                             className="list_panel_modal as_type_category _opinion_category_layer is_opened">
                                            <div className="lpm_dimmed"></div>
                                            <div className="lpm_content _whole_content_layer">
                                                <button type="button" className="lpm_touch_btn _whole_slide_handler"
                                                        aria-hidden="true"></button>
                                                <strong className="lpm_head_title">분류 선택하기</strong>
                                                <div className="lpm_children">
                                                    <div className="opinion_category_layer">
                                                        <a href="" role="tab" aria-selected="true"
                                                           className="select_link _all_section">전체</a>
                                                        <a href="" role="tab" aria-selected="false"
                                                           className="select_link"
                                                           data-sid="NORMAL">일반</a>
                                                        <a href="" role="tab" aria-selected="false"
                                                           className="select_link"
                                                           data-sid="POLITICS">정치</a>
                                                        <a href="" role="tab" aria-selected="false"
                                                           className="select_link"
                                                           data-sid="ECONOMY">경제</a>
                                                        <a href="" role="tab" aria-selected="false"
                                                           className="select_link"
                                                           data-sid="SOCIETY">사회</a>
                                                        <a href="" role="tab" aria-selected="false"
                                                           className="select_link">생활</a>
                                                        <a href="" role="tab" aria-selected="false"
                                                           className="select_link"
                                                           data-sid="WORLD">세계</a>
                                                        <a href="" role="tab" aria-selected="false"
                                                           className="select_link">IT</a>
                                                    </div>
                                                </div>
                                                <button type="button" className="lpm_close_btn"
                                                        aria-label="닫기"></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="opinion_select_wrap as_type_category _category_button">
                                        <button type="button" className="opinion_select_btn _category_label"
                                                onClick="nclk(event, 'ser.sort','','')">
                                            언론사 전체
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <ul className="opinion_serialization_list _persist_wrap _subscribe_list _more_series"
                                persist-key="opinion_whole_series_dummy">
                                <li className="opinion_serialization_item">
                                    <div className="item_header">
                                        <a href="" className="link">
                                            <div className="image">
                                                <img
                                                    src="https://mimgnews.pstatic.net/image/upload/office_logo/032/2018/10/11/logo_032_18_20181011174611.png"
                                                    width="22" height="22"/>
                                            </div>
                                            <strong className="header_name">서울25</strong>
                                        </a>
                                        <div className="opinion_subscribe_wrap _my_feed_wrapper"
                                             data-use-follow-layer="1">
                                            <a href="" className="opinion_subscribe _my_feed_btn">
                                                <span className="opinion_subscribe_text _txt">+ 구독</span>
                                            </a>
                                        </div>
                                    </div>
                                    <ul className="article_list">
                                        <li className="article_item as_type_main">
                                            <a href="" className="link">
                                                <div className="content">
                                                    <p className="article_text">주민 누구나 무료 성(性) 상담받는다…노원구, 자치구 첫 전담 체계
                                                        구축</p>
                                                    <div className="sub_info">
                                                        <span className="press_name">경향신문</span>
                                                        <span className="timestamp">2024.07.11</span>
                                                    </div>
                                                </div>
                                                <div className="image">
                                                    <img className="article-img" loading="lazy" width="64" height="64"
                                                         onError="showNoImage(this);"
                                                         src="https://imgnews.pstatic.net/image/032/2024/07/11/0003307846_001_20240711102707961.jpg?type=nf130_130"/>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="article_item as_type_sub">
                                            <a href="https://n.news.naver.com/mnews/hotissue/article/032/0003307288?type=series&cid=2001166"
                                               className="link">
                                                <p className="article_text">내년 1만가구 입주 동대문구, 준공·입주 대비 총력</p>
                                            </a>
                                        </li>
                                        <li className="articel_item as_type_sub">
                                            <a href="https://n.news.naver.com/mnews/hotissue/article/032/0003307824?type=series&cid=2001166"
                                               className="link">
                                                <p className="article_text">강남구, 70세 이상 운전면허 반납시 20만원 지급</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                {/*// <!-- 반복 -->*/}
                                <li className="opinion_serialization_item">
                                    <div className="item_header">
                                        <a href="" className="link">
                                            <div className="image">
                                                <img
                                                    src="https://imgnews.pstatic.net/image/upload/spubs/oeG0000016/profile/2023/04/19/profile_143627175.jpg?type=nf44_44"
                                                    width="22" height="22"/>
                                            </div>
                                            <strong className="header_name">투자360</strong>
                                        </a>
                                        <div className="opinion_subscribe_wrap _my_feed_wrapper"
                                             data-use-follow-layer="1">
                                            <a href="" className="opinion_subscribe _my_feed_btn">
                                                <span className="opinion_subscribe_text _txt">+ 구독</span>
                                            </a>
                                        </div>
                                    </div>
                                    <ul className="article_list">
                                        <li className="article_item as_type_main">
                                            <a href="https://n.news.naver.com/mnews/hotissue/article/016/0002334114?type=series&cid=2000323"
                                               className="link">
                                                <div className="content">
                                                    <p className="article_text">코루파마, ‘IMCAS ASIA 2024’ 박람회서 스킨부스터
                                                        라인업</p>
                                                    <div className="sub_info">
                                                        <span className="press_name">헤럴드경제</span>
                                                        <span className="timestamp">2024.07.11</span>
                                                    </div>
                                                </div>
                                                <div className="image">
                                                    <img className="article-img" loading="lazy" width="64" height="64"
                                                         onError="showNoImage(this);"
                                                         src="https://imgnews.pstatic.net/image/016/2024/07/11/20240711050220_0_20240711102707327.jpg?type=nf130_130"/>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="article_item as_type_sub">
                                            <a href="https://n.news.naver.com/mnews/hotissue/article/016/0002334110?type=series&cid=2000323"
                                               className="link">
                                                <p className="article_text">“IPO만 하면 대박”…비상장사 투자 ‘선(先)학개미’ 상반기 최애종목
                                                    봤더니</p>
                                            </a>
                                        </li>
                                        <li className="articel_item as_type_sub">
                                            <a href="https://n.news.naver.com/mnews/hotissue/article/016/0002334084?type=series&cid=2000323"
                                               className="link">
                                                <p className="article_text">“땡큐, 파월!” 코스피, 美훈풍에 장 초반 2890선까지 올라…코스닥도
                                                    상승세</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                {/*// <!-- 반복 -->*/}
                                {/*// <!-- 반복 -->*/}
                                <li className="opinion_serialization_item">
                                    <div className="item_header">
                                        <a href="" className="link">
                                            <div className="image">
                                                <img
                                                    src="https://imgnews.pstatic.net/image/upload/spubs/oeG0000016/profile/2023/04/19/profile_143627175.jpg?type=nf44_44"
                                                    width="22" height="22"/>
                                            </div>
                                            <strong className="header_name">투자360</strong>
                                        </a>
                                        <div className="opinion_subscribe_wrap _my_feed_wrapper"
                                             data-use-follow-layer="1">
                                            <a href="" className="opinion_subscribe _my_feed_btn">
                                                <span className="opinion_subscribe_text _txt">+ 구독</span>
                                            </a>
                                        </div>
                                    </div>
                                    <ul className="article_list">
                                        <li className="article_item as_type_main">
                                            <a href="https://n.news.naver.com/mnews/hotissue/article/016/0002334114?type=series&cid=2000323"
                                               className="link">
                                                <div className="content">
                                                    <p className="article_text">코루파마, ‘IMCAS ASIA 2024’ 박람회서 스킨부스터
                                                        라인업</p>
                                                    <div className="sub_info">
                                                        <span className="press_name">헤럴드경제</span>
                                                        <span className="timestamp">2024.07.11</span>
                                                    </div>
                                                </div>
                                                <div className="image">
                                                    <img className="article-img" loading="lazy" width="64" height="64"
                                                         onError="showNoImage(this);"
                                                         src="https://imgnews.pstatic.net/image/016/2024/07/11/20240711050220_0_20240711102707327.jpg?type=nf130_130"/>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="article_item as_type_sub">
                                            <a href="https://n.news.naver.com/mnews/hotissue/article/016/0002334110?type=series&cid=2000323"
                                               className="link">
                                                <p className="article_text">“IPO만 하면 대박”…비상장사 투자 ‘선(先)학개미’ 상반기 최애종목
                                                    봤더니</p>
                                            </a>
                                        </li>
                                        <li className="articel_item as_type_sub">
                                            <a href="https://n.news.naver.com/mnews/hotissue/article/016/0002334084?type=series&cid=2000323"
                                               className="link">
                                                <p className="article_text">“땡큐, 파월!” 코스피, 美훈풍에 장 초반 2890선까지 올라…코스닥도
                                                    상승세</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                {/*// <!-- 반복 -->*/}
                                {/*// <!-- 반복 -->*/}
                                <li className="opinion_serialization_item">
                                    <div className="item_header">
                                        <a href="" className="link">
                                            <div className="image">
                                                <img
                                                    src="https://imgnews.pstatic.net/image/upload/spubs/oeG0000016/profile/2023/04/19/profile_143627175.jpg?type=nf44_44"
                                                    width="22" height="22"/>
                                            </div>
                                            <strong className="header_name">투자360</strong>
                                        </a>
                                        <div className="opinion_subscribe_wrap _my_feed_wrapper"
                                             data-use-follow-layer="1">
                                            <a href="" className="opinion_subscribe _my_feed_btn">
                                                <span className="opinion_subscribe_text _txt">+ 구독</span>
                                            </a>
                                        </div>
                                    </div>
                                    <ul className="article_list">
                                        <li className="article_item as_type_main">
                                            <a href="https://n.news.naver.com/mnews/hotissue/article/016/0002334114?type=series&cid=2000323"
                                               className="link">
                                                <div className="content">
                                                    <p className="article_text">코루파마, ‘IMCAS ASIA 2024’ 박람회서 스킨부스터
                                                        라인업</p>
                                                    <div className="sub_info">
                                                        <span className="press_name">헤럴드경제</span>
                                                        <span className="timestamp">2024.07.11</span>
                                                    </div>
                                                </div>
                                                <div className="image">
                                                    <img className="article-img" loading="lazy" width="64" height="64"
                                                         onError="showNoImage(this);"
                                                         src="https://imgnews.pstatic.net/image/016/2024/07/11/20240711050220_0_20240711102707327.jpg?type=nf130_130"/>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="article_item as_type_sub">
                                            <a href="https://n.news.naver.com/mnews/hotissue/article/016/0002334110?type=series&cid=2000323"
                                               className="link">
                                                <p className="article_text">“IPO만 하면 대박”…비상장사 투자 ‘선(先)학개미’ 상반기 최애종목
                                                    봤더니</p>
                                            </a>
                                        </li>
                                        <li className="articel_item as_type_sub">
                                            <a href="https://n.news.naver.com/mnews/hotissue/article/016/0002334084?type=series&cid=2000323"
                                               className="link">
                                                <p className="article_text">“땡큐, 파월!” 코스피, 美훈풍에 장 초반 2890선까지 올라…코스닥도
                                                    상승세</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                {/*// <!-- 반복 -->*/}
                                {/*// <!-- 반복 -->*/}
                                <li className="opinion_serialization_item">
                                    <div className="item_header">
                                        <a href="" className="link">
                                            <div className="image">
                                                <img
                                                    src="https://imgnews.pstatic.net/image/upload/spubs/oeG0000016/profile/2023/04/19/profile_143627175.jpg?type=nf44_44"
                                                    width="22" height="22"/>
                                            </div>
                                            <strong className="header_name">투자360</strong>
                                        </a>
                                        <div className="opinion_subscribe_wrap _my_feed_wrapper"
                                             data-use-follow-layer="1">
                                            <a href="" className="opinion_subscribe _my_feed_btn">
                                                <span className="opinion_subscribe_text _txt">+ 구독</span>
                                            </a>
                                        </div>
                                    </div>
                                    <ul className="article_list">
                                        <li className="article_item as_type_main">
                                            <a href="https://n.news.naver.com/mnews/hotissue/article/016/0002334114?type=series&cid=2000323"
                                               className="link">
                                                <div className="content">
                                                    <p className="article_text">코루파마, ‘IMCAS ASIA 2024’ 박람회서 스킨부스터
                                                        라인업</p>
                                                    <div className="sub_info">
                                                        <span className="press_name">헤럴드경제</span>
                                                        <span className="timestamp">2024.07.11</span>
                                                    </div>
                                                </div>
                                                <div className="image">
                                                    <img className="article-img" loading="lazy" width="64" height="64"
                                                         onError="showNoImage(this);"
                                                         src="https://imgnews.pstatic.net/image/016/2024/07/11/20240711050220_0_20240711102707327.jpg?type=nf130_130"/>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="article_item as_type_sub">
                                            <a href="https://n.news.naver.com/mnews/hotissue/article/016/0002334110?type=series&cid=2000323"
                                               className="link">
                                                <p className="article_text">“IPO만 하면 대박”…비상장사 투자 ‘선(先)학개미’ 상반기 최애종목
                                                    봤더니</p>
                                            </a>
                                        </li>
                                        <li className="articel_item as_type_sub">
                                            <a href="https://n.news.naver.com/mnews/hotissue/article/016/0002334084?type=series&cid=2000323"
                                               className="link">
                                                <p className="article_text">“땡큐, 파월!” 코스피, 美훈풍에 장 초반 2890선까지 올라…코스닥도
                                                    상승세</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                {/*// <!-- 반복 -->*/}
                                {/*// <!-- 반복 -->*/}
                                <li className="opinion_serialization_item">
                                    <div className="item_header">
                                        <a href="" className="link">
                                            <div className="image">
                                                <img
                                                    src="https://imgnews.pstatic.net/image/upload/spubs/oeG0000016/profile/2023/04/19/profile_143627175.jpg?type=nf44_44"
                                                    width="22" height="22"/>
                                            </div>
                                            <strong className="header_name">투자360</strong>
                                        </a>
                                        <div className="opinion_subscribe_wrap _my_feed_wrapper"
                                             data-use-follow-layer="1">
                                            <a href="" className="opinion_subscribe _my_feed_btn">
                                                <span className="opinion_subscribe_text _txt">+ 구독</span>
                                            </a>
                                        </div>
                                    </div>
                                    <ul className="article_list">
                                        <li className="article_item as_type_main">
                                            <a href="https://n.news.naver.com/mnews/hotissue/article/016/0002334114?type=series&cid=2000323"
                                               className="link">
                                                <div className="content">
                                                    <p className="article_text">코루파마, ‘IMCAS ASIA 2024’ 박람회서 스킨부스터
                                                        라인업</p>
                                                    <div className="sub_info">
                                                        <span className="press_name">헤럴드경제</span>
                                                        <span className="timestamp">2024.07.11</span>
                                                    </div>
                                                </div>
                                                <div className="image">
                                                    <img className="article-img" loading="lazy" width="64" height="64"
                                                         onError="showNoImage(this);"
                                                         src="https://imgnews.pstatic.net/image/016/2024/07/11/20240711050220_0_20240711102707327.jpg?type=nf130_130"/>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="article_item as_type_sub">
                                            <a href="https://n.news.naver.com/mnews/hotissue/article/016/0002334110?type=series&cid=2000323"
                                               className="link">
                                                <p className="article_text">“IPO만 하면 대박”…비상장사 투자 ‘선(先)학개미’ 상반기 최애종목
                                                    봤더니</p>
                                            </a>
                                        </li>
                                        <li className="articel_item as_type_sub">
                                            <a href="https://n.news.naver.com/mnews/hotissue/article/016/0002334084?type=series&cid=2000323"
                                               className="link">
                                                <p className="article_text">“땡큐, 파월!” 코스피, 美훈풍에 장 초반 2890선까지 올라…코스닥도
                                                    상승세</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                {/*// <!-- 반복 -->*/}
                            </ul>
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
        </div>
    );
};

export default Recommend;
import React from 'react';
import "../assets/css/mainpage.css";
import "../assets/css/header.css";
import "../assets/css/footer.css"
import "../assets/css/recommend.css"

const Subscribe = () => {
    return (
        <div>

            {/*// <!-- 메인 시작-->*/}
            <div id="ct" role="main" className="main_wrap as_opinion as_opinion_serialization">
                <div className="main_container">
                    <section className="main_content _series_more_view">
                        <h2 className="blind">콘텐츠</h2>
                        <div className="opinion_section">
                            <header className="opinion_header">
                                <h2 className="title">내가 구독한 뉴스</h2>
                            </header>
                            <div className="opinion_filter_area _series_filter">
                                <div className="opinion_filter_select">
                                    <div className="opinion_select_wrap as_type_category _category_button">
                                        <button type="button" className="opinion_select_btn _category_label">
                                            분류
                                        </button>
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
                                        <button type="button" className="opinion_select_btn _category_label">
                                            언론사 전체
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <ul className="opinion_serialization_list _persist_wrap _subscribe_list _more_series">
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
            </div>

        </div>
    );
};

export default Subscribe;
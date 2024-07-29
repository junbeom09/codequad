import React, { useContext, useState } from 'react';
import "../assets/css/mainpage.css";
import "../assets/css/header.css";
import "../assets/css/footer.css";
import "../assets/css/category.css";
import { newjinsContext } from "../context/newjinsContext";

const Category = () => {
    const { cateNews, setCateNews, cateNum, setCateNum } = useContext(newjinsContext);
    const [visibleNews, setVisibleNews] = useState(16);
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    const getCharacter = (cateNum) => {
        switch (cateNum) {
            case 1:
                return '사회';
            case 2:
                return '정치';
            case 3:
                return '경제';
            case 4:
                return '국제';
            case 5:
                return '문화';
            case 6:
                return 'IT';
            case 7:
                return '스포츠';
            default:
                return '';
        }
    };

    const handleLoadMore = () => {
        setVisibleNews((prevVisibleNews) => prevVisibleNews + 5);
    };

    return (
        <div className="container-doc">
            <div id="ct_wrap" className="ct_wrap">
                <div className="ct_lnb">
                    <div className="ct_lnb_inner">
                        <strong className="ct_lnb_date">{formattedDate}</strong>
                        <h2 id="mainContent" style={{ textAlign: "center" }}>{getCharacter(cateNum)}</h2>
                    </div>
                </div>
                <section className="inner-main">
                    <div className="main-sub">
                        {/* 메인뉴스 리스트 */}
                        <div className="box_g">
                            <h3 style={{ textAlign: "center", marginBottom: "30px" }}>최신 뉴스</h3>
                            <ul className="list_mainnews">
                                {cateNews.slice(0, 6).map(item => (
                                    <li key={item.arti_id}>
                                        <div className="item_column">
                                            <a href="" className="wrap_thumb">
                                                <img
                                                    src={item.arti_pic}
                                                    className="thumb_g" />
                                            </a>
                                            <div className="cont_thumb">
                                                <strong className="tit_g">
                                                    <a href={item.arti_url} className="link_txt">
                                                        {item.arti_title}
                                                    </a>
                                                </strong>
                                                <span className="info_thumb">
                                                    <span className="txt_info">{item.publisher}</span>
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* 사회뉴스 리스트 */}
                        <div className="box_g box_news_major">
                            <h3 className="tit_box">{getCharacter(cateNum)} 뉴스</h3>
                            <ul className="list_newsmajor">
                                {cateNews.slice(6, visibleNews).map(item => (
                                    <li key={item.arti_id}>
                                        <strong className="tit_g">
                                            <span className="info_cp">{item.publisher}</span>
                                            <a href={item.arti_url} className="link_txt">
                                                {item.arti_title}
                                            </a>
                                        </strong>
                                    </li>
                                ))}
                            </ul>
                            {visibleNews < cateNews.length && (
                                <button className="btn-more" onClick={handleLoadMore}>더보기</button>
                            )}
                        </div>

                        {/* 코스피 코스닥 */}
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

                        {/* 광고 */}
                        <div className="box_side box_ad">
                            <ins className="kakao_ad_area aside_ad"
                                 style={{
                                     display: "block",
                                     position: "relative",
                                     textDecoration: "none", minWidth: "250px", minHeight: "250px"
                                 }}>
                                <div data-ad-creative-wrap="outer"
                                     style={{ position: "absolute", maxHeight: "inherit", inset: "0px" }}>
                                    {/* 광고 코드 */}
                                    광고
                                </div>
                            </ins>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Category;

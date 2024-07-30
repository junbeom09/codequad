import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../assets/css/company.css";
import { newjinsContext } from "../context/newjinsContext";

const Company = () => {
    const navigate = useNavigate();
    const [articles, setArticles] = useState([]);
    const [visibleArticles, setVisibleArticles] = useState([]);
    const [visibleCount, setVisibleCount] = useState(20);
    const { companyNews, companyName, pressAgencies} = useContext(newjinsContext);

    useEffect(() => {
        // 전체 기사를 상태에 설정
        setArticles(companyNews);
        // 처음 20개의 기사만 표시
        setVisibleArticles(companyNews.slice(0, 20));
    }, [companyNews]);

    const loadMoreArticles = () => {
        const nextCount = visibleCount + 10;
        setVisibleCount(nextCount);
        setVisibleArticles(articles.slice(0, nextCount));
    };

    return (
        <div>
            <div className="press_wrap">
                <div className="press_container">
                    <section className="press_content">
                        <h2 className="u_skip">언론사 개별 홈</h2>
                        <header className="press_hd as_type_a _press_header">
                            <div className="press_hd_bg">
                                <div className="press_hd_bg_inner">
                                    <img
                                        src={pressAgencies.map(item => (item.name === companyName && item.logo))}
                                        alt=""
                                        className="press_hd_bg_img"
                                    />
                                    <i className="press_hd_bg_gradient_left"></i>
                                    <i className="press_hd_bg_gradient_right"></i>
                                </div>
                            </div>
                            <div className="press_hd_main">
                                <div className="press_hd_main_inner">
                                    <div className="press_hd_ci">
                                        <a href="./press6.html" className="hd_ci_image">
                                            <img
                                                src={pressAgencies.map(item => (item.name === companyName && item.logo))}
                                                alt={companyName}
                                            />
                                        </a>
                                        <a href="https://www.asiae.co.kr/" className="press_hd_ci_home">홈페이지</a>
                                    </div>
                                    <div className="press_hd_info">
                                        <div className="press_hd_main_info">
                                            <div className="press_hd_top">
                                                <h3 className="press_hd_name">
                                                    <a href="#" className="press_hd_name_link">
                                                        {companyName}
                                                        <i className="press_hd_name_link_home"></i>
                                                    </a>
                                                </h3>
                                                <div className="press_hd_btns_area">
                                                    <div className="press_hd_subscribe_btnwrap _press_hd_subscribe_btnwrap">
                                                        <button type="button" className="press_hd_subscribe_btn _channel_add">
                                                            <span>구독</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </header>
                        <div id="ct" role="main" className="press _start_floating">
                            <div className="r_group_comp" id="ad"></div>
                            <div className="press_edit_news _nudge_wrap _CURATION_CARD">
                                <ul className="press_edit_news_list">
                                    {visibleArticles.map(item => (
                                        <li key={item.arti_id} className="press_edit_news_item as_thumb">
                                            <a href={item.arti_url} className="press_edit_news_link _es_pc_link">
                                                <span className="press_edit_news_thumb">
                                                    <img src={item.arti_pic} alt="" />
                                                </span>
                                                <span className="press_edit_news_text">
                                                    <span className="press_edit_news_title">{item.arti_title}</span>
                                                    <span className="r_ico_b r_modify">
                                                        <div style={{ height: "60px", display: "flex" }}>
                                                            {item.arti_content.length > 70 ? item.arti_content.slice(0, 70) : item.arti_content}
                                                        </div>
                                                    </span>
                                                </span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                                {visibleArticles.length < articles.length && (
                                    <button onClick={loadMoreArticles} className="load-more-btn">더보기</button>
                                )}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Company;
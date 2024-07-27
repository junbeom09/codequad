import React, { useState, useEffect } from 'react';
import "../assets/css/mainpage.css";
import "../assets/css/header.css";
import "../assets/css/footer.css";
import "../assets/css/recommend.css";
import { getUserSubscribedNews, subscribeToNewsAgency, unsubscribeFromNewsAgency } from '../service/api';

const Subscribe = () => {
    const [subscribedNews, setSubscribedNews] = useState([]);
    const userId = JSON.parse(sessionStorage.getItem("userInfo"))?.user_id || "";

    useEffect(() => {
        if (userId) {
            fetchSubscribedNews();
        }
    }, [userId]);

    const fetchSubscribedNews = async () => {
        try {
            const news = await getUserSubscribedNews(userId);
            setSubscribedNews(news);
        } catch (error) {
            console.error('Failed to fetch subscribed news:', error);
        }
    };

    const handleSubscribe = async (agencyId) => {
        try {
            await subscribeToNewsAgency(userId, agencyId);
            fetchSubscribedNews();
        } catch (error) {
            console.error('Failed to subscribe:', error);
        }
    };

    const handleUnsubscribe = async (agencyId) => {
        try {
            await unsubscribeFromNewsAgency(userId, agencyId);
            fetchSubscribedNews();
        } catch (error) {
            console.error('Failed to unsubscribe:', error);
        }
    };

    return (
        <div>
            <div id="ct" role="main" className="main_wrap as_opinion as_opinion_serialization">
                <div className="main_container">
                    <section className="main_content _series_more_view">
                        <h2 className="blind">콘텐츠</h2>
                        <div className="opinion_section">
                            <header className="opinion_header">
                                <h2 className="title">내가 구독한 뉴스</h2>
                            </header>
                            <div className="opinion_filter_area _series_filter">
                            </div>
                            <ul className="opinion_serialization_list _persist_wrap _subscribe_list _more_series">
                                {subscribedNews.map((newsGroup, index) => (
                                    <li key={index} className="opinion_serialization_item">
                                        <div className="item_header">
                                            <a href="" className="link">
                                                <div className="image">
                                                    <img src={newsGroup.publisherLogo} width="22" height="22" alt={newsGroup.publisherName} />
                                                </div>
                                                <strong className="header_name">{newsGroup.publisherName}</strong>
                                            </a>
                                            <div className="opinion_subscribe_wrap _my_feed_wrapper" data-use-follow-layer="1">
                                                <a href="" className="opinion_subscribe _my_feed_btn" onClick={(e) => {
                                                    e.preventDefault();
                                                    handleUnsubscribe(newsGroup.publisherName);
                                                }}>
                                                    <span className="opinion_subscribe_text _txt">구독 취소</span>
                                                </a>
                                            </div>
                                        </div>
                                        <ul className="article_list">
                                            {newsGroup.articles.map((article, articleIndex) => (
                                                <li key={articleIndex} className={`article_item ${articleIndex === 0 ? 'as_type_main' : 'as_type_sub'}`}>
                                                    <a href={article.link} className="link">
                                                        {articleIndex === 0 ? (
                                                            <>
                                                                <div className="content">
                                                                    <p className="article_text">{article.title}</p>
                                                                    <div className="sub_info">
                                                                        <span className="press_name">{newsGroup.publisherName}</span>
                                                                        <span className="timestamp">{article.publishDate}</span>
                                                                    </div>
                                                                </div>
                                                                {article.imageUrl && (
                                                                    <div className="image">
                                                                        <img className="article-img" loading="lazy" width="64" height="64" src={article.imageUrl} alt={article.title} onError={(e) => e.target.style.display = 'none'} />
                                                                    </div>
                                                                )}
                                                            </>
                                                        ) : (
                                                            <p className="article_text">{article.title}</p>
                                                        )}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;

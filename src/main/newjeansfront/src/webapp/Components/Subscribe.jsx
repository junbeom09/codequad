import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserSubscribedNews, getArticlesByPublisher } from '../service/api';
import "../assets/css/mainpage.css";
import "../assets/css/header.css";
import "../assets/css/footer.css";
import "../assets/css/recommend.css";

const Subscribe = () => {
    const [subscribedNews, setSubscribedNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const fetchSubscribedNewsWithArticles = useCallback(async (userId) => {
        try {
            setLoading(true);
            const subscribedPublishers = await getUserSubscribedNews(userId);
            console.log("구독한 출판사:", subscribedPublishers);

            const newsWithArticles = await Promise.all(
                subscribedPublishers.map(async (publisher) => {
                    const articles = await getArticlesByPublisher(publisher);
                    return {
                        publisherName: publisher,
                        articles: articles
                    };
                })
            );

            console.log("가져온 구독 뉴스:", newsWithArticles);
            setSubscribedNews(newsWithArticles);
        } catch (error) {
            console.error('구독 뉴스 가져오기 실패:', error);
            setError("뉴스를 불러오는데 실패했습니다: " + error.message);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
        if (!userInfo || !userInfo.us_id) {
            navigate('/login');
        } else {
            fetchSubscribedNewsWithArticles(userInfo.us_id);
        }
    }, [navigate, fetchSubscribedNewsWithArticles]);

    if (loading) return <div>로딩 중...</div>;
    if (error) return <div className="error-message">{error}</div>;

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
                            {subscribedNews.length === 0 ? (
                                <p>구독한 뉴스가 없습니다.</p>
                            ) : (
                                <ul className="opinion_serialization_list _persist_wrap _subscribe_list _more_series">
                                    {subscribedNews.map((newsGroup, index) => (
                                        <li key={index} className="opinion_serialization_item">
                                            <div className="item_header">
                                                <a href="#" className="link">
                                                    <div className="image">
                                                        <img src={newsGroup.publisherLogo} width="22" height="22" alt={newsGroup.publisherName} />
                                                    </div>
                                                    <strong className="header_name">{newsGroup.publisherName}</strong>
                                                </a>
                                                <div className="opinion_subscribe_wrap _my_feed_wrapper">
                                                    {newsGroup.articles.map((article, articleIndex) => (
                                                        <div key={articleIndex} className="article">
                                                            <h3>{article.title}</h3>
                                                            <p>{article.content}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;

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

    const fetchArticlesForPublisher = async (publisher) => {
        if (!publisher) {
            console.error('Publisher is undefined');
            return null;
        }
        try {
            let publisherName;
            if (typeof publisher === 'object') {
                publisherName = publisher.name || publisher.publisherName || Object.values(publisher)[0];
            } else {
                publisherName = publisher;
            }

            if (!publisherName) {
                console.error('Publisher name is undefined', publisher);
                return null;
            }

            const articles = await getArticlesByPublisher(publisherName);
            return {
                publisherName: publisherName,
                articles: articles.slice(0, 5) // 최대 5개의 기사만 표시
            };
        } catch (error) {
            console.error(`Error fetching articles for publisher:`, publisher, error);
            return {
                publisherName: typeof publisher === 'object' ?
                    (publisher.name || publisher.publisherName || '알 수 없는 출판사') :
                    publisher || '알 수 없는 출판사',
                articles: [] // 오류 발생 시 빈 배열 반환
            };
        }
    };

    const fetchSubscribedNewsWithArticles = useCallback(async (userId) => {
        try {
            setLoading(true);
            setError(null);
            const subscribedPublishers = await getUserSubscribedNews(userId);
            console.log("구독한 출판사:", subscribedPublishers);

            if (!Array.isArray(subscribedPublishers)) {
                throw new Error('Subscribed publishers is not an array');
            }

            const newsWithArticles = await Promise.all(
                subscribedPublishers.map(fetchArticlesForPublisher)
            );

            const validNewsWithArticles = newsWithArticles.filter(news => news !== null);
            console.log("가져온 구독 뉴스:", validNewsWithArticles);
            setSubscribedNews(validNewsWithArticles);
        } catch (error) {
            console.error('구독 뉴스 가져오기 실패:', error);
            setError("뉴스를 불러오는데 실패했습니다. 잠시 후 다시 시도해주세요.");
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

    const handleRetry = () => {
        const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
        if (userInfo && userInfo.us_id) {
            fetchSubscribedNewsWithArticles(userInfo.us_id);
        } else {
            navigate('/login');
        }
    };

    if (loading) return <div>로딩 중...</div>;
    if (error) return (
        <div className="error-message">
            {error}
            <button onClick={handleRetry}>다시 시도</button>
        </div>
    );

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
                                                <strong className="header_name">{newsGroup.publisherName}</strong>
                                            </div>
                                            <div className="opinion_subscribe_wrap _my_feed_wrapper">
                                                {newsGroup.articles.length > 0 ? (
                                                    newsGroup.articles.map((article, articleIndex) => (
                                                        <div key={articleIndex} className="article">
                                                            <h3>{article.arti_title || '제목 없음'}</h3>
                                                            <p>{(article.arti_content && article.arti_content.substring(0, 100)) || '내용 없음'}...</p>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <p>이 출판사의 기사를 불러오지 못했습니다.</p>
                                                )}
                                                {newsGroup.articles.length === 5 && (
                                                    <button className="more-articles-btn">더 보기</button>
                                                )}
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

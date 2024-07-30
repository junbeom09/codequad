import React, {useEffect, useState} from 'react';
import "../assets/css/mainpage.css";
import axios from "axios";


const Home = () => {
    const [newsList,setNewsList] = useState([]);
    const [visibleCount, setVisibleCount] = useState(10);
    const [allArticles, setAllArticles] = useState([]);

    useEffect(() => {
        fetchArticles();
    }, []);

    const fetchArticles = async () => {


        try {
            const response = await axios.get('http://localhost:8081/api/newsArticles');
            console.log('Fetched articles:', response.data);
            setAllArticles(response.data); // 모든 기사 저장
            setNewsList(response.data.slice(0, visibleCount)); // 초기 15개 기사 표시
        } catch (error) {
            console.error('Error fetching articles:', error);
        }
    };
    const loadMoreArticles = () => {
        const newVisibleCount = visibleCount + 10; // 더보기 버튼 클릭 시 10개씩 추가
        setNewsList(allArticles.slice(0, newVisibleCount));
        setVisibleCount(newVisibleCount);
    };

    return (
        <div>
            {/*// <!-- 메인 시작 -->*/}
            <main className="doc-main">
                <section className="inner-main">
                    <h2 id="mainContent" className="screen_out">홈</h2>
                    <div className="main-content">
                        <div className="content-article">
                            <div className="box_g box_news_issue" data-tiara-layer="headline">
                                <h3 className="screen_out">오늘의 이슈</h3>
                                <ul className="list_newsissue">
                                    {/*// <!--li 요소 반복-->*/}
                                    {newsList.map(item=>(<li key={item.arti_id}>
                                        <div className="item_issue" data-tiara-layer="headline1"><a
                                            className="wrap_thumb" target="_blank" href={item.arti_url}><img
                                            className="thumb_g" src={item.arti_pic}/></a>
                                            <div className="cont_thumb"><span className="info_thumb"><span
                                                className="logo_cp">{item.publisher}</span></span><strong
                                                className="tit_g"><a
                                                className="link_txt" className="link_txt_title" data-tiara-layer="article_main" target="_blank" href={item.arti_url}>{item.arti_title}</a></strong><a href={item.arti_url} target="_blank"> <span
                                                style={{
                                                    fontSize: "x-small",
                                                    color: "rgb(121, 119, 119)"
                                                }}>{item.arti_content}</span></a>
                                            </div>
                                        </div>
                                    </li>))}
                                </ul>
                                {visibleCount < allArticles.length && ( // 더보기 버튼 조건부 렌더링
                                    <div className="load-more-container">
                                        <button onClick={loadMoreArticles} className="load-more-button">기사 더보기</button>
                                    </div>
                                )}
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
                                <a href="Components/recommend.jsx" className="link_more"
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
                            <div className="box_side box_photonews" style={{height:"500px"}} data-tiara-layer="photonews">
                                <h3 style={{textAlign:"center"}} className="tit_box">카카오톡 채널을 추가해,<br></br> 다영한 뉴스를 만나보세요.</h3>
                                <a href="https://pf.kakao.com/_xdxhGyG" target="_blank">
                                    <img style={{width: "300px", maxHeight: "1050px", marginBottom:"15px"}}
                                         src="https://k.kakaocdn.net/dn/blvGat/btsIQo4xz5F/2XOjDpoL1k9pKunqjj6yG1/img_xl.jpg"/>
                                    <p style={{textAlign:"center", color:"#007BFF"}} ><b>사진을 클릭하면 채널을 추가할 수 있습니다.</b></p>
                                </a>
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
        </div>
    );
};

export default Home;
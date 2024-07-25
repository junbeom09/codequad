// src/webapp/Components/Search.jsx
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { searchArticles } from '../service/api';
import "../assets/css/search.css";

const Search = () => {
    const location = useLocation();
    const keyword = new URLSearchParams(location.search).get('keyword');
    const [searchResults, setSearchResults] = useState([]);


    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                const results = await searchArticles(keyword);
                setSearchResults(results);
            } catch (error) {
                console.error('Error fetching search results:', error);
            }
        };

        fetchSearchResults();
    }, [keyword]);

    return (
        <div>
            <main>
                <section className="search-results" id="search-results">
                    <div className="left-column">
                        {searchResults.length > 0 ? (
                            searchResults.map((article) => (
                                <div className="box-container" key={article.arti_id}>
                                    <div className="article-container">
                                        <div className="content">
                                            <h2>{article.arti_title}</h2>
                                            <p>{article.arti_content}</p>
                                            <span className="source"><strong>{article.publisher}</strong></span>
                                            <span className="date">{article.arti_created}</span>
                                        </div>
                                        <img src={article.arti_pic} alt="기사 이미지" />
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>검색 결과가 없습니다.</p>
                        )}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Search;

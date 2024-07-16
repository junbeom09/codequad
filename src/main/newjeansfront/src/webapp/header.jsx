import React, {Component} from 'react';
import "./assets/css/mainpage.css";
import "./assets/css/header.css";

class Header extends Component {
    render() {
        return (
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
                            <input id="total-search-key" type="text" className="search-key" placeholder="검색어를 입력해주세요"
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
        );
    }
}

export default Header;
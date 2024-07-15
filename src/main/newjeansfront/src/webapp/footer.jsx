import React from 'react';
import "./assets/css/footer.css"

const Footer = () => {
    return (
        <div className="ft-cont">
            <ul className="ft-link">
                <li>
                    <a href="" data-toggle="modal" className="btn-primary footer-link">이용약관</a>
                </li>
                <li>
                    <a href="" className="privacy">개인정보처리방침</a>
                </li>
                <li>
                    <a href="" data-toggle="modal"
                       className="btn-primary footer-link">이메일무단수집거부</a>
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
    );
};

export default Footer;
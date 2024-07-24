import React, { useState } from 'react';
import "../assets/css/signUp2.css";
import {Link,useNavigate} from "react-router-dom";

const SignUp2 = () => {
    const navigate = useNavigate();
    const [checkboxes, setCheckboxes] = useState({
        all: false,
        policy: false,
        privacy: false
    });

    const toggleAllCheckboxes = (event) => {
        const isChecked = event.target.checked;
        setCheckboxes({
            all: isChecked,
            policy: isChecked,
            privacy: isChecked
        });
    };

    const handleSingleCheckbox = (name) => (event) => {
        const isChecked = event.target.checked;
        setCheckboxes(prev => {
            const newState = { ...prev, [name]: isChecked };
            const allChecked = newState.policy && newState.privacy;
            return { ...newState, all: allChecked };
        });
    };
    const handleJoin = (event) => {
        event.preventDefault(); // 기본 동작 방지
        if (!checkboxes.policy || !checkboxes.privacy) {
            alert("모든 약관에 동의해주세요.");
            return; // 함수 실행 중단
        }
        // 여기에 가입 처리 로직 추가
        console.log("가입 처리 진행");
        navigate('/login');
    };
    return (
        <div>
            <div id="cocoaModal" className="modal in modal_site_join_policy">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <article className="modal_article login term p_lr_space pb24">
                            <button className="close hidden-md hidden-lg" onClick={() => {}}>
                                <i aria-hidden="true" className="btl bt-times"></i>
                            </button>
                            <h2>약관동의</h2>
                            <input type="hidden" id="type_code" name="type_code" value="" />
                            <div className="input-block all-check">
                                <div className="check">
                                    <div className="checkbox checkbox-styled">
                                        <label className="form-label">
                                            <input
                                                type="checkbox"
                                                className="_check_all ie"
                                                checked={checkboxes.all}
                                                onChange={toggleAllCheckboxes}
                                            />
                                            <span className="agree_tit">
                                                이용약관, 개인정보 수집 및 이용에 모두 동의합니다.
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="input-block term-block">
                                <div className="check">
                                    <div className="checkbox checkbox-styled">
                                        <label className="form-label">
                                            <input
                                                type="checkbox"
                                                value="ok"
                                                id="policy_agree"
                                                className="_join_agree _policy_agree ie require_agreement"
                                                checked={checkboxes.policy}
                                                onChange={handleSingleCheckbox('policy')}
                                            />
                                            <span className="agree_tit">
                                                이용약관 동의
                                                <em className="alert">(필수)</em>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group privacy">
                                    <div tabIndex="0" className="must-privacy-content">
                                        제1조 목적
                                        <br/><br/>
                                        본 이용약관은 "NEWjinS"(이하 "뉴진스")의 서비스의 이용조건과 운영에 관한 제반 사항 규정을 목적으로 합니다.
                                        <br/><br/>
                                        제2조 용어의 정의
                                        <br/><br/>
                                        본 약관에서 사용되는 주요한 용어의 정의는 다음과 같습니다.
                                        <br/><br/>
                                        ① 회원 : 사이트의 약관에 동의하고 개인정보를 제공하여 회원등록을 한 자로서, 사이트와의 이용계약을 체결하고 사이트를 이용하는 이용자를 말합니다.
                                        <br/>
                                        ② 이용계약 : 사이트 이용과 관련하여 사이트와 회원간에 체결 하는 계약을 말합니다.
                                        <br/>
                                        ③ 회원 아이디(이하 "ID") : 회원의 식별과 회원의 서비스 이용을 위하여 회원별로 부여하는 고유한 문자와 숫자의 조합을 말합니다.
                                        <br/>
                                        ④ 비밀번호 : 회원이 부여받은 ID와 일치된 회원임을 확인하고 회원의 권익 보호를 위하여 회원이 선정한 문자와 숫자의 조합을 말합니다.
                                        <br/>
                                        ⑤ 운영자 : 서비스에 홈페이지를 개설하여 운영하는 운영자를 말합니다.
                                        <br/>
                                        ⑥ 해지 : 회원이 이용계약을 해약하는 것을 말합니다.
                                        <br/><br/>
                                        부칙
                                        <br/><br/>
                                        이 약관은 "사이트 개설일"부터 시행합니다.
                                    </div>
                                </div>
                            </div>
                            <div className="input-block">
                                <div className="check">
                                    <div className="checkbox checkbox-styled">
                                        <label className="form-label">
                                            <input
                                                type="checkbox"
                                                value="ok"
                                                id="privacy_agree"
                                                className="_join_agree _privacy_agree ie require_agreement"
                                                checked={checkboxes.privacy}
                                                onChange={handleSingleCheckbox('privacy')}
                                            />
                                            <span className="agree_tit">
                                                개인정보 수집 및 이용 동의
                                                <em className="alert">(필수)</em>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group privacy">
                                    <div tabIndex="0" className="must-privacy-content">
                                        <strong>1. 개인정보 수집목적 및 이용목적</strong>
                                        <br/><br/>
                                        (1) 홈페이지 회원 가입 및 관리
                                        <br/>
                                        회원 가입 의사 확인, 회원제 서비스 제공에 따른 본인 식별․인증, 회원자격 유지․관리, 제한적 본인확인제 시행에 따른 본인확인, 서비스 부정 이용 방지, 만 14세 미만 아동의 개인정보 처리시 법정대리인의 동의 여부 확인, 각종 고지․통지, 고충 처리 등의 목적
                                        <br/><br/>
                                        (2) 재화 또는 서비스 제공
                                        <br/>
                                        물품 배송, 서비스 제공, 계약서․청구서 발송, 콘텐츠 제공, 맞춤 서비스 제공, 본인인증, 연령인증, 요금 결제 및 정산, 채권추심 등의 목적
                                        <br/><br/>
                                        (3) 고충 처리
                                        <br/>
                                        민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락․통지, 처리 결과 통보 등
                                        <br/><br/>
                                        <strong>2. 수집하는 개인정보 항목</strong>
                                        <br/>
                                        ID, 성명, 비밀번호, 주소, 휴대폰 번호, 이메일, 14세 미만 가입자의 경우 법정대리인 정보
                                        <br/><br/>
                                        <strong>3. 개인정보 보유 및 이용기간</strong>
                                        <br/>
                                        <strong>회원탈퇴 시까지</strong>
                                        (단, 관계 법령에 보존 근거가 있는 경우 해당 기간 시까지 보유, 개인정보처리방침에서 확인 가능)
                                    </div>
                                </div>
                            </div>

                            <div className="btn-block clearfix">
                                <Link to="/login" className="btn btn-primary-custom _join_btn float_l" onClick={handleJoin}>가입하기</Link>
                                <Link to="/" className="btn btn-default-custom float_l">취소</Link>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp2;
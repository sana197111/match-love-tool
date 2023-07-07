import React, { useState } from 'react';
import styles from './popupForm.module.css';
import { Link } from 'react-router-dom';

const PopupForm = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [Recommend, setRecommend] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  // handleSubmit 함수 선언이 누락되어 있었습니다.
  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 이벤트를 방지합니다.

    if (!name || !phoneNumber || !email || !Recommend) {
      alert('모든 정보를 입력해주세요.');
      return;
    }

    if (!validateEmail(email)) {
      alert('올바른 이메일 주소를 입력해주세요.');
      return;
    }

    if (!validatePhoneNumber(phoneNumber)) {
      alert('올바른 핸드폰 번호를 입력해주세요.');
      return;
    }
  };

  const validateEmail = (email) => {
    const re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const re = /^\d{10,11}$/;
    return re.test(phoneNumber);
  };

  return (
    <div className={styles.container}>
    <img className={styles.logo} src="img/favicon.png" alt="로고"/>
      <div className={styles.title}>
      팝업스토어 신청
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputbox}>
          <p className={styles.label}>아이디</p>
          <input className={styles.button} type="text" placeholder="실명을 입력해주세요." value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className={styles.inputbox}>
          <p className={styles.label}>연락처</p>
          <input className={styles.button} type="text" placeholder="숫자로 입력해주세요." value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </div>
        <div className={styles.inputbox}>
          <p className={styles.label}>이메일</p>
          <input className={styles.button} type="text" placeholder="이메일 주소를 입력해 주세요." value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className={styles.inputbox}>
          <p className={styles.label}>추천인</p>
          <input className={styles.button} type="text" placeholder="실명을 입력해주세요." value={name} onChange={(e) => setRecommend(e.target.value)} />
        </div>
        <div className="checkbox-container">
          <label htmlFor="marketing-consent" className={styles.checkbox} onClick={handleCheck}>
          <input type="checkbox" style={{ display: 'none' }}/>
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor"
            >
              <path d="M12.25 18.7372L7.875 14.3614L9.11138 13.125L12.25 16.2628L18.8869 9.625L20.125 10.8631L12.25 18.7372Z" 
                fill={isChecked ? '#fff' : 'none'}
                stroke={isChecked ? 'none' : '#D3D3D3'}                
              />
              <path
                d="M14 1.75C11.5772 1.75 9.20877 2.46845 7.19427 3.8145C5.17977 5.16054 3.60965 7.07373 2.68248 9.31213C1.75531 11.5505 1.51272 14.0136 1.98539 16.3899C2.45805 18.7661 3.62475 20.9489 5.33795 22.6621C7.05114 24.3753 9.23388 25.542 11.6101 26.0146C13.9864 26.4873 16.4495 26.2447 18.6879 25.3175C20.9263 24.3904 22.8395 22.8202 24.1855 20.8057C25.5316 18.7912 26.25 16.4228 26.25 14C26.25 10.7511 24.9594 7.63526 22.6621 5.33794C20.3647 3.04062 17.2489 1.75 14 1.75V1.75ZM12.25 18.8919L7.87501 14.5169L9.26678 13.125L12.25 16.1081L18.7338 9.625L20.13 11.0127L12.25 18.8919Z"
                fill={isChecked ? '#f688a5' : 'none'}
                stroke={isChecked ? 'none' : '#D3D3D3'}
              />
            </svg>
          </label>
          <label htmlFor="marketing-consent">
            <span className="text">
              마케팅 목적의 <a href="/personal-info">개인정보 수집 및 이용 동의</a> (필수)
            </span>
          </label>
          <Link to="/" className={styles.invitation__Button}>
                          초대장 받기
          </Link>
        </div>
        
      </form>
    </div>
  );
};

export default PopupForm;

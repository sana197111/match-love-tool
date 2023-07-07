import React, { useState } from 'react';
import styles from './popupForm.module.css';

const PopupForm = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [recommend, setRecommend] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('name-input');
    const nameWarning = document.getElementById('name-warning');
    const phoneInput = document.getElementById('phone-input');
    const phoneWarning = document.getElementById('phone-warning');
    const emailInput = document.getElementById('email-input');
    const emailWarning = document.getElementById('email-warning');
    const recommendInput = document.getElementById('recommend-input');
    const recommendWarning = document.getElementById('recommend-warning');
    const checkboxWarning = document.getElementById('checkbox-warning');

    nameInput.classList[name ? 'remove' : 'add'](styles.warningInput);
    nameWarning.style.display = name ? 'none' : 'block';

    const isValidPhone = /^\d{10,11}$/.test(phoneNumber);
    phoneInput.classList[isValidPhone ? 'remove' : 'add'](styles.warningInput);
    phoneWarning.style.display = isValidPhone ? 'none' : 'block';

    const isValidEmail = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,}$/.test(email);
    emailInput.classList[isValidEmail ? 'remove' : 'add'](styles.warningInput);
    emailWarning.style.display = isValidEmail ? 'none' : 'block';

    recommendInput.classList[recommend ? 'remove' : 'add'](styles.warningInput);
    recommendWarning.style.display = recommend ? 'none' : 'block';

    checkboxWarning.style.display = isChecked ? 'none' : 'block';

    if (name && isValidPhone && isValidEmail && recommend && isChecked) {
      window.location.href = '/invitation';
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.circleout}></div>
        <div className={styles.circlein}></div>
        <img className={styles.logo} src="img/favicon.png" alt="로고"/>
      </div>
      <div className={styles.body}>
        <div className={styles.section}>
          <h2 className={styles.title}>팝업스토어 신청</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.group__title}>이름*</div>
            <input
              id="name-input"
              className={styles.inputtext}
              placeholder="이름을 입력해주세요."
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <div id="name-warning" className={styles.warning} style={{ display: 'none' }}>
              이름을 입력해주세요.
            </div>

            <div className={styles.group__title}>전화번호*</div>
            <input
              id="phone-input"
              className={styles.inputtext}
              placeholder="숫자만 입력해주세요. ( - 제외)"
              type="tel"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
            <div id="phone-warning" className={styles.warning} style={{ display: 'none' }}>
              올바른 전화번호를 입력해주세요. ( - 제외)
            </div>

            <div className={styles.group__title}>이메일 주소*</div>
            <input
              id="email-input"
              className={styles.inputtext}
              placeholder="예) example@example.com"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <div id="email-warning" className={styles.warning} style={{ display: 'none' }}>
              올바른 이메일 주소를 입력해주세요.
            </div>

            <div className={styles.group__title}>추천인 이름</div>
            <input
              id="recommend-input"
              className={`${styles.inputtext} ${styles.optional}`}
              placeholder="추천인이 있는 경우 입력"
              value={recommend}
              onChange={(e) => {
                setRecommend(e.target.value);
              }}
            />
            <div id="recommend-warning" className={styles.warning} style={{ display: 'none' }}>
              추천인 성함을 입력해주세요.
            </div>
          </form>
        </div>
      </div>
      <div className={styles.footer}>
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
        <span className="checktext">
        마케팅 목적의 <a href="https://match-love.notion.site/03ccd0f98ab74e9c81771a411ef63f28?pvs=4">개인정보 수집 및 이용 동의</a> (필수)
        </span>
        </label>
      </div>
        <button
          type="button"
          className={styles.invitation__Button}
          onClick={handleSubmit}
        >
          초대장 받기
        </button>
      </div>
    </div>
  );
};

export default PopupForm;

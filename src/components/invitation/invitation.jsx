import React from 'react';
import styles from './invitation.module.css';

const Invitation = () => {
  return (
    <div className={styles.invitationWrapper}>
      <h1 className={styles.greeting}>안녕하세요. 고윤찬님!</h1>
      <p className={styles.message}>당신을 매치러브 팝업스토어에 초대합니다.</p>
      <p className={styles.dates}>매치러브 팝업스토어는 7월 10일(월)부터 7월 16일(일)까지 진행합니다</p>

      <img src="img/matchlove_invitation_final.jpg" alt="Invitation" className={styles.invitationImage} />
      
      <p className={styles.instruction}>초대장을 현장 스태프에게 보여주세요! :)</p>
      
      <p className={styles.location}>장소 : 서울 서대문구 명물길 54 3층 (신촌 카페 Centuple Place)</p>
      <p className={styles.link}><a href="https://map.naver.com/v5/search/%EC%8B%A0%EC%B4%8C%EC%B9%B4%ED%8E%98%20Centuple%20Place" target="_blank">네이버 지도 바로가기</a></p>

      <p className={styles.hoursTitle}>운영시간을 꼭 확인해주세요!</p>
      <ul>
        <li className={styles.hours}>- 평일 18:00~21:00</li>
        <li className={styles.hours}>- 토요일 14:00~18:00</li>
        <li className={styles.hours}>- 일요일 14:00~20:00</li>
      </ul>

      <h2 className={styles.companyTitle}>매치러브 회사소개</h2>
      <p className={styles.companyDescription}>
        매치러브는 빅데이터 기반으로 성향에 맞는 이성을 추천해 주는 "러브 테크" 플랫폼입니다.
        왜 사람들은 점점 더 연애와 결혼을 망설이고 이에 회의적인 걸까요? 이제는 우리가 “나”라는 사람의
        진정한 내면이 표출되는 연애를 추구하고 있기 때문인데요. 점점 더 자아의 발견 자기 성장,
        자아실현과 같은 이상향을 연애에서 이루고 싶어 합니다. 매치러브를 통해 새로운 인연을 만나 사랑의
        자아실현을 이뤄보는 것 어떨까요?
      </p>
      <p className={styles.link}><a href="https://www.matchlove.co.kr/" target="_blank">회사소개 사이트</a></p>
    </div>
  );
};

export default Invitation;

import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../home/home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCopy,
    faArrowAltCircleRight,
} from '@fortawesome/free-solid-svg-icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Home = () => {
    const url = window.location.href; // url 복사
    const copyAlert = () => {
        alert('링크가 복사되었습니다!');
    };
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.top}>
                        <img
                            className={styles.logo}
                            src="img/FelizLogo.png"
                            alt="로고"
                        />
                    </div>
                    <div className={styles.middle}>
                        <h2 className={styles.header}>나의 연애 가치관 테스트</h2>
                        <p>나의 연애 가치관 유형과</p>
                        <p>나와 가장 잘 어울리는 사람은?</p>
                    </div>
                    <div className={styles.bottom}>
                        <Link to="/matchMBTI" className={styles.start__button}>
                            테스트 하기
                            <FontAwesomeIcon
                                icon={faArrowAltCircleRight}
                                className={styles.icon}
                            />
                        </Link>
                        <a
                            href="https://matchlove.netlify.app/"
                            className={styles.service__button}
                            target="_blank" 
                            rel="noopener noreferrer"
                        >서비스 소개
                            <FontAwesomeIcon icon={faArrowAltCircleRight} className={styles.icon} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;

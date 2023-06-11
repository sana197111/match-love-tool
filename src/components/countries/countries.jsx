import styles from './countries.module.css';
import { Link } from 'react-router-dom';
import Countries from '../../common/api/countriesApi/../countriesApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faCopy } from '@fortawesome/free-solid-svg-icons';
import { faEarlybirds } from '@fortawesome/free-brands-svg-icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import KakaoBtn from '../shareSNS/kakaoShareButton';
import FacebookBtn from '../shareSNS/facebookShareButton';
import TwitterBtn from '../shareSNS/twitterShareButton';
import React from "react";

const Profile = ({ match }) => {
    const url = window.location.href;
    const { countryName } = match.params;
    const nation = Countries[countryName];

    if (!nation) {
        return <div>존재하지 않는 결과입니다.</div>;
    }
    const copyAlert = () => {
        alert('링크가 복사되었습니다.');
    };
    return (
        <>
            <div className={styles.wrapper} key={nation.id}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <>
                            <Link to="/">
                                <FontAwesomeIcon
                                    icon={faEarlybirds}
                                    className={styles.birds}
                                />
                            </Link>
                        </>
                    </div>
                    <img
                        src={nation.img}
                        alt="img"
                        className={styles.main__img}
                    />
                    <div className={styles.result__type}>
                        <h1 className={styles.result__city}>
                            {nation.subject}
                        </h1>
                        <br />
                    </div>
                    <div className={styles.reust__title}>
                        <h2>{nation.id}의 연애 가치관은?</h2>
                    </div>
                    <ul className={styles.result__style__wrapper}>
                        {nation.description.map((item) => {
                            return (
                                <li
                                    className={styles.result__style__detail}
                                    key={item.des}
                                >
                                    {item.des}
                                </li>
                            );
                        })}
                    </ul>
                    <div className={styles.result__advice__box}>
                        <div className={styles.result__advice}>
                            <a href={`${/result/}${nation.duo[0].subhead}`}>
                                <img
                                    src={nation.duo[0].img}
                                    alt="mbti캐릭터"
                                    Link="/"
                                />
                            </a>
                            <div>
                                <h4>나랑 잘맞는 사람은??</h4>
                                <p className={styles.advice__strong}>
                                    찰떡궁합 그 자체 {nation.duo[0].subhead}
                                </p>
                                <p>{nation.duo[0].des}</p>
                            </div>
                        </div>
                        <div className={styles.result__advice}>
                            <Link
                                to={`${/result/}${nation.counter[0].subhead}`}
                            >
                                <img
                                    src={nation.counter[0].img}
                                    alt="mbti캐릭터"
                                />
                            </Link>

                            <div>
                                <h4>매일 싸울 것 같은 사람은??</h4>
                                <p className={styles.advice__strong}>
                                    도망가세요 {nation.counter[0].subhead}
                                </p>
                                <p>{nation.counter[0].des}</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.shareBox}>
                        <KakaoBtn />
                        <FacebookBtn />
                        <TwitterBtn />
                    </div>
                    <div className={styles.button__box}>
                        <Link to="/" className={styles.button}>
                            다시하기
                            <FontAwesomeIcon
                                icon={faSignOutAlt}
                                className={styles.icon}
                            />
                        </Link>
                            <a
                                href="https://matchlove.netlify.app/"
                                className={styles.service__button}
                                target="_blank" // 새 탭에서 열기를 원하실 경우 추가해주세요.
                                rel="noopener noreferrer" // 새 탭에서 열 때는 보안상 이 속성을 꼭 추가하세요.
                            >서비스 소개
                                <FontAwesomeIcon icon={faSignOutAlt} className={styles.icon} />
                            </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;

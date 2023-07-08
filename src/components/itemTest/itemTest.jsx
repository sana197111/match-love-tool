import React, { useState } from 'react';
import styles from './itemTest.module.css';

const ItemTest = () => {
    // 컴포넌트 코드
  return (
    <>
        {/* <div class="background-image"> */}
            <div>
                <img
                    className={styles.background}
                    src="img/background.png"
                    alt="배경"
                />
            </div>
            <div>
                <img
                    className={styles.chair}
                    src="img/chair.png"
                    alt="의자"
                />
            </div>
            <div>
                <img
                    className={styles.book}
                    src="img/book.png"
                    alt="책"
                />
            </div>
            <div>
                <img
                    className={styles.coffee}
                    src="img/coffee.png"
                    alt="커피"
                />
            </div>
            <div>
                <img
                    className={styles.speaker}
                    src="img/speaker.png"
                    alt="스피커"
                />
            </div>
            <div>
                <img
                    className={styles.mike}
                    src="img/mike.png"
                    alt="마이크"
                />
            </div>
            <div>
                <img
                    className={styles.water_gun}
                    src="img/water_gun.png"
                    alt="물총"
                />
            </div>
            <div>
                <img
                    className={styles.window}
                    src="img/window.png"
                    alt="창문"
                />
            </div>
            <div>
                <img
                    className={styles.bracelet}
                    src="img/bracelet.png"
                    alt="팔찌"
                />
            </div>
        {/* </div> */}
    </>
  ); 
};


export default ItemTest;
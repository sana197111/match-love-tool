// PopupForm.jsx
import React, { useState } from 'react';
import styles from './popupForm.module.css';
import KakaoLogin from 'react-kakao-login';

const PopupForm = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !phoneNumber || !email) {
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

    // 여기서 카카오톡 메세지를 보내는 함수를 호출하세요.
    /* 나머지 부분 'handleSubmit' 함수 내에 호출 할 카카오톡 메세지 전송 코드 */
    window.Kakao.Link.createDefaultButton({
      container: '#kakao-link-btn',
      objectType: 'feed',
      content: {
        title: '팝업스토어 초대',
        description: '팝업스토어에 초대합니다',
        imageUrl: '초대장_사진_URL',
        link: {
          mobileWebUrl: '자세히보기_링크_URL',
          webUrl: '자세히보기_링크_URL',
        },
        },
        buttons: [
          {
            title: '자세히 보기',
            link: {
              mobileWebUrl: '자세히보기_링크_URL',
              webUrl: '자세히보기_링크_URL',
            },
          },
        ],
    });

// 카카오톡 메세지를 보내는 함수를 호출하세요.

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
      <h1>팝업스토어 신청하기</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="이름" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="핸드폰 번호" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        <input type="text" placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">초대장 받기</button>
      </form>
    </div>
  );
};

export default PopupForm;



// popupForm.jsx
// import React, { useState } from 'react';
// import styles from './popupForm.module.css';
// import KakaoLogin from 'react-kakao-login';


// const PopupForm = () => {
//   const [name, setName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [email, setEmail] = useState('');

//   // Kakao 로그인 성공 핸들러
//   const onKakaoLoginSuccess = (response) => {
//     console.log(response);
//     submitInfoWithKakao(); // name, phone, email
//   };


//   // Kakao 로그인 실패 핸들러
//   const onKakaoLoginFailure = (error) => {
//     console.error(error);
//   };

//   // 정보 및 이미지 전송 함수
//   const submitInfoWithKakao = () => { //name, phone, email
//     // TODO: 현재 상태 정보를 데이터베이스에 저장하세요 (필요 시).

//     window.Kakao.Link.sendDefault({
//       objectType: 'feed',
//       content: {
//         title: '매치러브 팝업스토어에 초대합니다.',
//         description: '함께 해요!',
//         imageUrl: 'https://drive.google.com/uc?export=view&id=11jVOKJ8urhrONufF6Nc2WkZPSh_Qm2cE',
//         link: {
//           webUrl: 'naver.com',
//           mobileWebUrl: 'naver.com',
//         },
//       },
//       button: [
//         {
//           title: '자세히 살펴보기',
//           link: {
//             webUrl: 'https://www.naver.com',
//             mobileWebUrl: 'https://www.naver.com',
//           },
//         },
//       ],
//     })
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // 양식 검증 및 신청 처리 로직
//     console.log('신청 내용', {
//       name,
//       phone,
//       email,
//     });

//     // 입력란 초기화
//     setName('');
//     setPhone('');
//     setEmail('');
//   };

//   return (
//     <div className={styles.container}>
//       <h2 className={styles.title}>팝업스토어 신청하기</h2>
//       <form className={styles.form} onSubmit={handleSubmit}>
//         <label>
//           성함
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </label>
//         <label>
//           핸드폰 번호
//           <input
//             type="tel"
//             pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             required
//           />
//         </label>
//         <label>
//           이메일
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </label>
//         <KakaoLogin
//           onSuccess={onKakaoLoginSuccess}
//           onFailure={onKakaoLoginFailure}
//           className={styles.kakaoButtonText}
//         >카카오톡으로 초대장 받기</KakaoLogin>  
//       </form>
//     </div>
//   );
// };

// export default PopupForm;

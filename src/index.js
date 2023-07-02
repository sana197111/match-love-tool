import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';

// 다음과 같은 코드를 index.js에 추가합니다.
if (typeof window !== 'undefined') {
  window.Kakao.init(process.env.REACT_APP_KAKAO_KEY);
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

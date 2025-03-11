// 레이아웃 컴포넌트 : Layout.jsx

// 컨텍스트 API로 전역변수 구역 설정하기
import { dCon } from "../modules/dCon";

import TopArea from "./TopArea";
import MainArea from "./MainArea";
import FooterArea from "./FooterArea";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Layout() {
  // 전역 상태관리 변수 설정하기
  // [1] 로그인 상태관리 변수
  const [loginSts, setLoginSts] = useState(sessionStorage.getItem("minfo"));
  // 초기값으로 세션스토리지 'minfo'를 할당한다

  // [2] 로그인 환영 메시지 상태변수
  const [loginMsg, setLoginMsg] = useState(null);

  // [ 공통함수 ]
  // [1] 라우터 이동함수
  const goPage = useNavigate();

  // [2] 로그인 환영 메시지 생성함수
  const makeMsg = (name) => {
    // 유저아이콘
    let usrIcon = ["🙍‍♂️", "🧏‍♀️", "🦸‍♂", "👨‍🎤", "🦸‍♀"];
    // 랜덤수 : 0~4사이의 수
    let rdm = Math.floor(Math.random() * 5);
    // 로그인 메시지 상태변수 업데이트
    setLoginMsg(`Welcome ${name} ${usrIcon[rdm]}`);
  }; // makeMsg

  // [3] 로그아웃 함수
  const logoutFn = () => {
    // (1) 로그인 상태값 null
    setLoginSts(null);
    // (2) 세션스토리지 지우기 : minfo
    sessionStorage.removeItem('minfo');
    // (3) 로그인메시지 초기화
    setLoginMsg(null);
    // (4) 메인 페이지로 돌아가기
    goPage('/');
  };

  // 리턴코드구역
  return (
    // 컨텍스트 API Provider에서 value 속성에 등록하면 전역사용이 가능해진다.
    <dCon.Provider valuse={{ 
      loginSts, 
      setLoginSts, 
      loginMsg, 
      makeMsg,
      logoutFn }}>

      {/* 1. 상단영역 : 메모이제이션을 위해 직접 값 전달 */}
      <TopArea 
        // (1) 로그인 메세지 getter
        loginMsg={loginMsg}
        // (2) 로그인 상태 getter
        loginSts={loginSts}
        // (3) 로그아웃함수
        logoutFn={logoutFn}
      />
      {/* 2. 메인영역 */}
      <MainArea />
      {/* 3. 하단영역 */}
      <FooterArea />
    </dCon.Provider>
  );
} // Layout 컴포넌트 //

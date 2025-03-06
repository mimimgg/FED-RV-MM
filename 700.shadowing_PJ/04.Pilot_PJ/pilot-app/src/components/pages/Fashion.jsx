// 파일럿PJ 패션페이지(남성 / 여성 / 스타일 공통) - Fashion.jsx

import React from 'react';
import { useLocation } from'react-router-dom';

function Fashion(props) {

  // 라우터 전달객체 받기
  const { state } = useLocation();
  const catName = state ? state.catName : "아무거나"

  // // 카테고리 이름 가져오기 
  // const catName = state.catName || "아무거나" ;

  return (
    <>
    <div className="
      <h1 style={{}}>여기는 {catName}패션페이지다 이말썸이야</h1>
    "></div>
    </>
  );
}

export default Fashion;

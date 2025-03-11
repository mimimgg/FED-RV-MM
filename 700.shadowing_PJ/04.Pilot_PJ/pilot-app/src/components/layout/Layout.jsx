// 레이아웃 컴포넌트 : Layout.jsx
import {TopArea} from "./TopArea";
import MainArea from "./MainArea";
import {FooterArea} from "./FooterArea";
import { useState } from "react";
// 컨텍스트 API 불러오기
import { pCon } from "../modules/pCon";

export default function Layout() {
  // 상태변수 세팅
  // [1] 분류명 상태변수
  const [catName, setCatName] = useState("main");

  // 리턴코드구역
  return (
    <>
      {/* 전역 컨텍스트 API 변수제공자 등록 */}
      <pCon.Provider value={{ setCatName }}>
        <TopArea catName={catName} />
        <MainArea />
        <FooterArea />
      </pCon.Provider>
    </>
  );
} // Layout 컴포넌트 //

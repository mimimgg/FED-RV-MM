// 레이아웃 컴포넌트 : Layout.jsx
import TopArea from "./TopArea";
import MainArea from "./MainArea";
import FooterArea from "./FooterArea";
import { useState } from "react";

export default function Layout(){

  // 상태변수 세팅
  // [1] 분류명 상태변수
  const [catName, setCatName] = useState("main")

  // 리턴코드구역
  return (
    <>
      <TopArea catName={catName} />
      <MainArea />
      <FooterArea />
    </>
  );
} // Layout 컴포넌트 //
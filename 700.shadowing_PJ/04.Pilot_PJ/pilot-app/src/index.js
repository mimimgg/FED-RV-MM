import React from "react";
import ReactDOM from "react-dom/client";
// 라우터를 사용하고 싶다면 컴포넌트 모듈을 사용해라 //
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 공통 SCSS 불러오기
import "./css/index.scss";

import Layout from "./components/layout/Layout";
import Main from "./components/pages/Main";

// 전체 PJ 공통 CSS 최상위에서 불러오기
// import "./css/index.scss";

// 메인 컴포넌트 //
export default function MainComponent() {
  // 리턴 코드 구역
  return (
    <BrowserRouter>
      {/* routes로 route를 감싼다. */}
      <Routes>
        {/* 최상위 route는 쌍으로 태그를 만든다 */}
        <Route path="/" element={<Layout />}>
          {/* 하위 중 첫페이지는 index라고 속성을 쓴다 */}
          <Route index element={<Main/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
} // MainComponent //

/// 컴포넌트 출력 ///
// 먼저 root 객체 만들기
const root = ReactDOM.createRoot(
  document.querySelector("#root"));
// 출력하기
root.render(<MainComponent />);

// Pilot PJ 메인 페이지 컴포넌트 - Main.jsx

import React, { useEffect } from "react";

// 자동스크롤 기능 JS 불러오기
import * as autoFn from "../../js/func/jquery-autoScroll";

// 드래그배너 기능 js 불러오기
import { dragBanner } from "../../js/func/drag_banner";

import Banner from "../modules/Banner";
import { FashionIntro } from "../modules/FashionIntro";

function Main() {
  // 컴포넌트 로딩 후 실행구역 : 한번만 실행(빈 의존성[])
  useEffect(() => {
    // 자동스크롤 이벤트 설정
    window.addEventListener("wheel", autoFn.wheelFn);
    // -> window 이벤트 설정을 여기서 한 이유는?
    // -> 소멸자를 통해 이벤트를 다른 페이지가 나올때 해제해주기 위해 여기서 세팅한다.

    // 메뉴 + 인디케이터 이벤트 기능 설정함수 호출
    autoFn.evtFn();

    // 초기화 함수 호출
    autoFn.initSet();

    // 페이지 번호 초기화 함수 호출
    autoFn.zeroPno();

    // 드래그배너 기능함수 호출하기
    dragBanner();

  }, []); // usedEffect : 한번만 호출한다 //

  // 리턴코드구역
  return (
    <>
      {/* 1. 배너 페이지 */}
      <section id="ban" className="page none-sel" style={{ background: "lightblue" }}>
        <Banner />
      </section>

      {/* 2. 남성패션 페이지 */}
      <section className="page">
        <FashionIntro cat="men" subcat="etc" />
      </section>

      {/* 3. 여성패션 페이지 */}
      <section className="page">
        <FashionIntro cat="women" subcat="etc" />
      </section>

      {/* 4. 스타일패션 페이지 */}
      <section className="page">
        <FashionIntro cat="style" subcat="etc" />
      </section>

      {/* 메인에만 나오는 사이드 인디케이터 */}
      <nav className="indic">
        <ul>
          <li className="on">
            <a href="#ban">
              <span>배너</span>
            </a>
          </li>
          <li>
            <a href="#men">
              <span>남성의류</span>
            </a>
          </li>
          <li>
            <a href="#women">
              <span>여성의류</span>
            </a>
          </li>
          <li>
            <a href="#style">
              <span>스타일</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Main;

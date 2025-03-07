// DC.com 비디오소개 컴포넌트 - VidIntro.jsx //

import React from "react";

// 비디오소개 모듈용 CSS 불러오기
import "../../css/modules/vid_intro.scss";

// 비디오 소개 모듈 데이터 불러오기
import { vidIntroData } from "../../js/data/vid_intro";

function VidIntro({ catName, clsName }) {
  // catName : 비디오 데이터 분류명
  // clsName : CSS 클래스명(on/off 배경색적용)

  // 선택데이터 변수할당 : catName으로 데이터 선택할당
  const selData = vidIntroData[catName];

  // 링크가 있는 sum 데이터 코드 만들기 함수
  const linkCode = (v) => {
    // (1) 별로 잘라서 배열로 전환
    let data = v.split("*");
    // (2) 코드 생성 후 리턴
    return (
      <>
        {data[0]}
        <a href={selData.link[1]} target="_blank">
          {selData.link[0]}
        </a>
        {data[1]}
      </>
    );
  };

  // 리턴코드구역
  return (
    <section className={"vidbox " + clsName}>
      <div>
        {/* 1. 비디오파트 */}
        <div className="vb1">
          <iframe src={selData.vsrc} title={selData.btit}></iframe>
        </div>
        {/* 2. 타이틀 설명파트 */}
        <div className="vb2">
          <h3>{selData.stit}</h3>
          <h2>{selData.btit}</h2>

          {/* 요약소개 */}
          <p>
            {
            selData.sum.indexOf("*") === -1 ? 
            selData.sum : linkCode(selData.sum)
            }
          </p>
          {/* 설명(링크포함) */}
          <p>
            {
            selData.desc.indexOf("*") === -1 ? 
            selData.desc : linkCode(selData.sum)
            }
          </p>
        </div>
      </div>
    </section>
  );
}

export default VidIntro;

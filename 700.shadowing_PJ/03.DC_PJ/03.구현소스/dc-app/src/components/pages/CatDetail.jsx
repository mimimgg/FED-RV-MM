// DC.com 캐릭터 상세페이지 모듈 - CatDetail.jsx //

import React, { useLayoutEffect } from "react";
import Banner from "../modules/Banner";
import CatList from "../modules/CatList";

// 모듈 CSS 불러오기
import "../../css/pages/cat_detail.scss";
import { useLocation } from "react-router-dom";

function CatDetail() {
  // 라우터 호출시 전달한 값을 useLocation으로 받는다
  const { state } = useLocation();
  // state 객체의 같은 이름의 속성명으로 구조분해할당한다.
  const { cname, cdesc, facts } = state;
  // console.log(cname, cdesc, facts);

  // 전달된변수
  // 1. cname - 캐릭터이름(배너 catName 속성정보로도 사용)
  // 2. cdesc - 캐릭터설명
  // 3. facts - 캐릭터상세

  // 라우터 경로 변경 없어도 위로 이동하기 
  // 의존성심기 - state 전달값
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  },[state]);

  // 리턴코드구역
  return (
    <>
      {/* 1. 배너모듈 */}
      <Banner catName={cname} />

      {/* 2. 상세정보박스 */}
      <div className="detail">
        {/* 2-1. 캐릭터 설명박스 */}
        <div className="desc-box">
          {/* 2-1-1. 캐릭터명 */}
          <h2>{cname}</h2>
          {/* 2-1-2. 캐릭터소개 */}
          <div className="cdesc">
            {
              // cdesc 데이터의 '^'로 잘라서 p요소를 할당한다
              cdesc.split("^").map((v, i) => 
                <p key={i}>{v}</p>
              )
            }
          </div>
        </div>

        {/* 2-2. 캐릭터 명세 */}
        <div className="facts">
          <div>
            <h3>CHARACTER FACTS</h3>
            <table>
              <tbody>
                {
                  // facts 데이터를 '^'로 잘라서 map 돌림
                  facts.split("^").map((v, i) => (
                    <tr key={i}>
                      {/* ':'로 잘라서 타이틀:내용 */}
                      <td>{v.split(":")[0]} : </td>
                      <td>{v.split(":")[1]}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 3. 캐릭터 리스트 모듈 */}
      <CatList />
    </>
  );
}

export default CatDetail;

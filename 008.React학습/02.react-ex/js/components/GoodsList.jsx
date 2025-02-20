// [ 상품리스트 서브컴포넌트 : GoodsList ] //

/****************************************
    [ 상품리스트 서브 컴포넌트 : GoodsList ]
****************************************/

// 공유신발 데이터 불러오기
import guData from "../data/gu_data";
// 효진드레스 데이터 불러오기
import hjData from "../data/hj_data";
// console.log(guData);

// 공통함수 불러오기
import * as comFn from "./common/com_fn";

export default function GoodsList() {
  // 리턴 코드 구역
  // ⭐️ ul 아래 li가 표현식 구역이 된다. (반복될 데이터를 붙여넣으면 된다.)
  // ⭐️ 데이터를 상단에 선언하고 데이터.map((v) => { 여기에 표현식 작성 })
  return (
    <ul>
      {
        // 반복 데이터로 li태그 만들기
        guData.map((v) => (
          <li>
            <a href="#">
              <ol className="glist">
                <li>
                  <img 
                  src={"./images/vans/vans_"+v.idx+".jpg"} alt="신발" />
                </li>
                <li>🥾상품명 : {v.gname}</li>
                <li>👟가격 : {comFn.addCommas(v.gprice)}원</li>
              </ol>
            </a>
          </li>
        ))
      }
    </ul>
  );
} // GoodsList 컴포넌트 //

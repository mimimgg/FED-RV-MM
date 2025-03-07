// 상단영역 컴포넌트 : TopArea.jsx

import { Link, useNavigate } from "react-router-dom";

// GNB 메뉴 데이터 불러오기 (gnb.js)
import { menu } from "../../js/data/gnb";

// 상단영역 scss 불러오기
import "../../css/common/top_area.scss";
import Logo from "../modules/Logo";
// 폰트어썸 불러오기 ////
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// 돋보기 아이콘 ///
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// 제이쿼리 불러오기
import $ from "jquery";

export default function TopArea() {
  // [ 라우터 이동함수 객체 생성하기 ]
  const goPage = useNavigate();
  // 사용시 goPage(라우터주소, {전달객체})
  // 전달객체가 없으면 쓰지 않는다
  // 사용법 : 반드시 useNavigate() 생성자메서드를 변수에 할당
  // 이동할 라우터 주소를 쓰면 이동한다.
  // 예) goPage('/news') -> 뉴스페이지로 이동
  // 예) goPage('/') -> 첫페이지로 이동
  // 예) goPage('') -> 첫페이지로 이동
  // -> 이동주소는 대소문자를 구분하지 않는다.
  // -> 슬래쉬 없이 빈값을 써도 루트로 이동한다.

  // [ 검색관련 함수들 ]
  // 1. 검색창 보이기 함수
  const showSearch = (e) => {
    // 기본기능막기
    e.preventDefault();

    // 1. 검색입력값 보이기
    $(".searchingGnb").show();

    // 2. 입력창에 포커스 보내기
    $("#schinGnb").focus();
  }; // showSearch 함수 //

  // 2. 검색창에 엔터키 누르면 검색함수 호출
  const enterKey = (e) => {
    // e.keyCode는 숫자형 키코드, e.key 문자형 키코드
    // console.log(e.key, e.keyCode);

    // (1) 엔터키일 경우 입력값 읽어서 검색함수 호출하기
    if (e.key === "Enter") {
      // (1) 입력창의 입력값 읽어오기 : val() 사용!
      let txt = $(e.target).val().trim();
      console.log(txt);

      // (2) 빈값이 아니면 검색함수 호출
      if (txt !== "") {
        // 입력창 비우고 부모박스 닫기
        $(e.target).val('').parent().hide();

        // 검색보내기
        goSearch(txt);
      } // if //
      // (3) 빈값이면 메시지 출력
      else {
        alert("please write letters for searching");
      }
    } // if //
  }; // enterKey 함수 //

  // 3. 검색페이지로 검색어와 함께 이동하기 함수
  const goSearch = (txt) => {
    console.log("검색한다", txt);
    // 라우터 이동함수로 검색페이지로 이동하기
    goPage("search", { state: { keyword: txt } });
    // 네비게이트 메서드(라우터주소, {state:{보낼객체}})
  };

  // 리턴코드구역
  return (
    <>
      {/* 1.상단영역 */}
      <header className="top-area">
        {/* 로그인 환영메시지 박스 */}
        <div className="logmsg"></div>
        {/* 네비게이션 GNB파트 */}
        <nav className="gnb">
          <ul>
            {/* 1. 로고 컴포넌트 */}
            <Link to="/">
              <Logo logoStyle="top" />
            </Link>
            {/* 2. GNB 메뉴 데이터로 map 바인딩 */}
            {menu.map((v, i) => (
              <li key={i}>
                {
                  // 하위메뉴가 있는 상위메뉴는 눌러도 이동하지 않게함
                  v.sub ? (
                    <a href="#" onClick={(e) => e.preventDefault}>
                      {v.txt}
                    </a>
                  ) : (
                    <Link to={v.link}>{v.txt}</Link>
                  )
                }
                {
                  // 서브메뉴가 있는 경우 출력하기
                  v.sub && (
                    <div className="smenu">
                      <ol>
                        {v.sub.map((v, i) => (
                          <li key={i}>
                            <Link to={v.link}>{v.txt}</Link>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )
                }
              </li>
            ))}

            {/* 3. 검색, 회원가입, 로그인 메뉴 */}
            <li
              style={{
                marginLeft: "auto",
                marginRight: "25px",
              }}
            >
              {/* 검색 입력 박스 */}
              <div className="searchingGnb">
                {/* 검색버튼 돋보기 아이콘 */}
                <FontAwesomeIcon icon={faSearch} className="schbtnGnb" title="Open search" onClick={() => {}} />
                {/* 입력창 */}
                <input type="text" placeholder="Filter by Keyword" name="schinGnb" id="schinGnb" onKeyUp={enterKey} />
              </div>

              {/* 검색기능링크 클릭 시 검색창 보이기 */}
              <a href="#" onClick={showSearch}>
                <FontAwesomeIcon icon={faSearch} />
              </a>
            </li>
            <li>
              <Link to="/member">JOIN US</Link>
            </li>
            <li>
              <Link to="/login">LOGIN</Link>
            </li>
          </ul>
        </nav>
        {/* 모바일용 햄버거 버튼 */}
        <button className="hambtn"></button>
      </header>
    </>
  );
} // TopArea 컴포넌트 //

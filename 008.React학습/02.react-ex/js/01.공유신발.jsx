// 01.공유신발 JSX

// 상품리스트 서브컴포넌트 불러오기
import GoodsList from "./components/GoodsList";

// 상품상세보기 서브컴포넌트 불러오기
import GoodsDetail from "./components/GoodsDetail";

// 공통함수 불러오기
import * as comFn from "./common/com_fn";

// 주의사항!!! CDN에서 여기 import대상은 모두
// html페이지에서 불러와야 사용할 수 있다!

// [ 메인 컴포넌트 ] ////////
// 메인의 의미는? 다른 구성요소 컴포넌트들을 모아
// 최종적으로 랜더링하는 구성 컴포넌트를 말한다!

// 그렇다면 컴포넌트란?
// 특정 모듈로 구성된 HTML코드를 리턴하는 객체

// 함수형 컴포넌트는 첫글자 대문자인 함수키워드로 만든다

function MainComponent() {
  // [ 후크 상태관리 변수 셋팅!!! ]
  // 1. 리스트 / 상세보기 전환용 상태관리변수
  const [viewList, setViewList] = React.useState(true);
  // 2. 상품 데이터 인덱스값 상태관리변수
  const [gIdx, setGIdx] = React.useState(1);
  // 3. 선택 아이템 고유이름 상태관리변수
  const [selItem, setSelItem] = React.useState("공유");
  // 4. 테스트용 상태관리변수(의존성 테스트용!)
  const [test, setTest] = React.useState(true);

  // useEffect 테스트 함수 만들기 - testFn //
  const testFn = () => {
    // 의존성 테스트를 위한 상태변수 업데이트
    setTest(!test); // 이 함수를 호출하면 true와 false를 반대로 전환한다.
    console.log("테스트중, 테스트 상태변수값:", !true);
    console.log("리랜더링 전, test 상태변수값:", true);
  }; // testFn 함수 //

  // [ 1. useEffect : 의존성이 없는 경우 ] //
  // -> 컴포넌트가 생성, 변경, 삭제 전 DOM을 다 랜더링하면 매번 실행되는 코드구역
  React.useEffect(() => {
    console.log("DOM이 완성되었다");
    console.log("🙄리랜더링 후, test 상태변수값:", test);

  }); // useEffect //

  // [ 2. useEffect : 의존성이 있는 경우 ]
  React.useEffect(() => {
    console.log("의존성 userEffect 실행");
  }, [test]);
  // -> 의존성이란? useEffect가 실행되는 것과 관련된 상태변수를 등록하여 실행구역을 컨트롤한다.
  // 즉, 등록된 상태변수가 변경될때만 이 구역이 실행된다.
  // 의존성 등록 방법 -> useEffect(함수, [의존성변수])
  // 배열이므로 여러개 등록할 수 있다.

  // [ 3. useEffect 의존성이 있으나 비어있는 경우 ]
  React.useEffect(() => {
    console.log("의존성이 비어있어서 한 번만 실행함");


    // 로고 애니 호출
    comFn.logoAni();
  }, []);
  // useEffect(함수,[])
  // -> 최초 로딩시 한번만 실행한다.

  // [ 4. useLayoutEffect : 화면 랜더링 전 DOM 완성 후 실행구역 ]
  React.useLayoutEffect(() => {
    console.log("화면 랜더링 전");
  }, [test]); // -> 의존성 실행
  // -> useEffect보다 먼저 실행된다.
  // -> useLayoutEffect도 의존성 세팅은 useEffect와 동일하다
  // useLayoutEffect(함수,[의존성])
  // useLayoutEffect(함수,[]) -> 최초 한번만 실행

  /************************************** 
    [ 코드구성 ]
    1. 타이틀 : h1.tit
    2. 내용박스 : section
    ㄴ> 제목 : h2
    ㄴ> 이미지박스 : div.img-box > img
    3. 기능버튼박스 : div.btn-box
    ㄴ> 기능버튼 : button
    4. 상품리스트박스 : div.gwrap
    ㄴ> 상품리스트 : 
        ul > li > ol > li > (img/text)
    ㄴ> 상품상세보기 :
        ol > li > (img/text/button)

    __________________________________________

    [ 일반 html 태그를 가져온 경우 수정사항 ]
    1. 홀로태그는 반드시 끝에 스스로 닫기처리
    예) <br> -> <br />
    2. className 속성명은 classNameName으로 변경
    3. 인라인 스타일은 객체형태로 변경

**************************************************/
  ////////////////////////////////////
  // 코드리턴구역 /////////////////////
  return (
    <React.Fragment>
      <h1 className="tit">
        <img
          id="logo"
          src="./images/logo.png"
          alt="로고"
          style={{
            width: "50px",
            verticalAlign: "-6px",
            marginRight: "10px",
          }}
        />
        <span>{selItem + (selItem === "공유" ? "가 신고 다닌다는!" : "이 입고 다닌다는!")}</span>
      </h1>
      <section>
        <h2 className="stit">{selItem === "공유" ? "공유 오늘도 멋지네🙄" : "효진은 오늘도 쨍하네😬"}</h2>
        <div className="img-box">
          {selItem === "공유" ? (
            <img src="./images/vans/gongyoo.jpg" alt="멋진공유" />
          ) : (
            <img src="./images/gallery/hyo.jpg" alt="효진" />
          )}
        </div>
      </section>
      <div className="btn-box">
        <button
          onClick={() => {
            // 선택 아이템 변경하기
            setSelItem(selItem === "공유" ? "효진" : "공유");
            // 아이템 변경시 리스트보기 상태로 전환
            setViewList(true);
            // 왜? 상세보기 상태에서 아이템 변경이 될 수 있기 때문에  
          }}
        >
          {selItem === "공유" ? "효진" : "공유"}초이스 바로가기
        </button>
        <br />
        <button onClick={testFn}>useEffect 의존성 테스트</button>
      </div>
      <div className="gwrap">
        {
          // 상태변수가 viewList가 true면 GoodsList 상품리스트 하위 컴포넌트보이기
          viewList ? (
            <GoodsList
              selItem={selItem}
              // 상태변수 업데이트를 위해 자식에게 변수 업데이트 메서드를 보내준다
              setGIdx={setGIdx}
              setViewList={setViewList}
            />
          ) : (
            // 상태변수가 viewList가 false면 상품상세보기 하위 컴포넌트 보이기
            <GoodsDetail selItem={selItem} gIdx={gIdx} setViewList={setViewList} />
          )
        }
      </div>
    </React.Fragment>
  );
} ////////// MainComponent 컴포넌트 /////////////

// 메인 컴포넌트 출력하기 ////////////
ReactDOM.render(<MainComponent />, document.querySelector("#root"));
// ReactDOM.render(어쩌구,저쩌구);
// 어쩌구를 저쩌구에 출력해라!

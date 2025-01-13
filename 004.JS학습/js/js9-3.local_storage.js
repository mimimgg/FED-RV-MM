// JS9-3. 로컬 스토리지 JS

// 나의 함수 불러오기
import myFn from "./my_function.js";

/*************************************************************** 
    [ JS 로컬스토리지 : localStorage ]
    - window하위객체 window.localStorage
    -> window는 주로 생략함!
    -> 개발자 모드 'Application' 탭에서 확인가능!!

    1. 정의 : 
        브라우저별 로컬 어플리케이션 영역에 저장되는 
        스트링데이터 저장소(JS API)
    2. 유지 : 같은 PC, 같은 브라우저(재설치없이사용) 일 경우 계속유지됨
        (단, 같은파일일 지라도 여는 경로에 따라 같은 변수도
        따로 관리된다! - 기준이 도메인경로/주소)
    3. 특징 : 모드 데이터는 키,값 쌍으로 구성되며 
        데이터값은 반드시 문자형으로 사용됨
    4. 응용 : 데이터로 배열/객체를 사용할 경우 문자형 변환하여 넣고
                다시 객체형으로 파싱하여 사용한다!
            (1) 입력시 : JSON.stringify(배열/객체)
            (2) 사용시 : JSON.parse(문자형배열/객체)
            -> JS의 제이슨 데이터 파싱 메서드 : 
                JSON.parse()
            -> JS의 제이슨 형식 데이터를 문자열로 변환하는 메서드:   
                JSON.stringify()
    5. 사용메서드 : 
        (1) 값설정 : setItem(키명,값)
        (2) 값읽기 : getItem(키명)
        (3) 전체지우기 : clear()
        (4) 키번호읽기 : key(순번) -> 0부터 (키이름리턴)
        (5) 개별항목삭제 : removeItem(키명)
        (6) 개수 : length

    [ JS 세션 스토리지 : sessionStorage ]
    -> 로컬스토리지와 세션 스토리지의 메서드는 동일함!
    -> 로컬스토리지와 차이점은?
    -> 브라우저가 닫히면 데이터가 사라진다!
    (로컬세션의 개념은 서버세션과 달리 하나의 브라우저탭을
    단위로 한다!)
    -> 서버세션은 접속된 로그인정보세션을 서버에서 관리하는 단위임

    [ JS 로컬 스토리지 / 세션 스토리지 장단점 ]
    (1) 장점: 
        간단한 프론트엔드 데이터를 DB없이 테스트해보는데 탁월함
        쿠키와 같이 사용자 동의를 필요로하는 로컬 기록수단의 단점은
        이것을 거부하면 쓸 수 없는데 JS 스토리지는 이런 제약이
        없다! 보안상 안전이 보장되므로 사용가능함!
    (2) 단점: 데이터의 지속 보장이 없다!
        (그나마 로컬 스토리지는 브라우저 경로가 같고 PC가 같고
        브라우저종류가 같다면 지우기 전까지는 데이터를 유지한다!)


    -> w3 schools 참고
    https://www.w3schools.com/js/js_api_web_storage.asp
***************************************************************/

// 로컬스토리지 테스트
// localStorage.setItem('myname','톰소여');
// localStorage.setItem('yourname','제이슨');
// console.log(localStorage.getItem('myname'));
// console.log(localStorage.getItem('yourname'));
// myFn.qs('body').onclick = () => {localStorage.clear()};

// [ 1. 로컬 스토리지 연습 ] ////////////////////
// 1. 버튼 기능 이벤트 대상 : .local-box button
// 2. 버튼에 이벤트 설정하기
// 3. 로컬쓰 처리 함수 만들기 ///////
// "minfo" 로컬쓰 키가 없으면 객체를 만들어 넣기 함수 //
function makeObj() {
    console.log("minfo만들기!");

  // 1. 게시판 형식의 객체 생성하기 ///
  // 배열안에 객체데이터 한개 넣기 [{},]
    let obj = [
        {
        idx: 1,
        tit: "내가 왕이될 상인가?",
        cont: "이정재형님은 진정한 왕이십니다!",
        },
    ];
  // 2. 로컬 스토리지에 배열/객체데이터 넣기
  // 만약 배열데이터를 직접 넣으려고하면
  // 로컬쓰는 문자형만 받기때문에 데이터형이름만
  // 문자형으로 데이터를 대신 넣게된다!
  // 즉, 배열데이터는 못들어간다! ㅠ.ㅠ
  // 그러므로 배열데이터는 문자형으로 변환하여
  // 넣어야 로컬쓰에 들어간다!
  // -> JSON.stringify(배열/객체)
    localStorage.setItem("minfo", JSON.stringify(obj));
} ///////// makeObj //////

//// 화면에 게시판을 뿌려주는 바인딩함수 ///////
function bindData() {
    // 1. 로컬쓰 데이터 읽어오기 : minfo
    let localData = localStorage.getItem("minfo");
    // 2. 로컬쓰 데이터 파싱하기 : JSON.parse()
    console.log("로컬쓰 파싱 전", localData);
    localData = JSON.parse(localData);
    console.log("로컬쓰 파싱 후", localData);
    // 출력대상 : .board
    // 3. 화면에 출력하기 ////////
    myFn.qs(".board").innerHTML = `
    <table>
        <tr>
            <th>번호</th>
            <th>제목</th>
            <th>내용</th>
            <th>삭제</th>
        </tr>
        <!-- 데이터에 따른 반복바인딩 -->
        ${localData
            .map(
            (v, i) => `
            <tr>
                <td>${v.idx}</td>
                <td>${v.tit}</td>
                <td>${v.cont}</td>
                <td class="del-link">
                    <a href="#" data-idx="${i}">×</a>
                </td>
            </tr>
        `
            )
            .join("")}
    </table>
`;
} ////////////// bindData //////////////////

/////////////////////////////////////
//// [ 게시판 최초호출 및 데이터 셋업 ] ////
/////////////////////////////////////
// 게시판 최초호출 : 로컬쓰 minfo 존재여부에 따라 처리
console.log('최초 minfo 로컬쓰가 있는가?', localStorage.getItem('minfo'));

// 만약 결과가 null이면 이 로컬쓰는 없는 것이다.
// 따라서 if문의 조건문에 사용하면 코드를 지정할 수 있다.

// 만약에 minfo 로컬쓰가 존재하면 bindData()함수를 호출한다.
if (localStorage.getItem('minfo')) bindData();
// 만약 minfo 로컬쓰가 업으면 생성하라
else makeObj();

//////////////////////////////////////////////////////
///////// [ 데이터 추가버튼 클릭 시 데이터 추가하기 ] /////////
//////////////////////////////////////////////////////
// 대상 : #sbtn (입력버튼)
// 데이터 읽어올 대상 : #tit, #cont
const tit = myFn.qs('#tit');
const cont = myFn.qs('#cont');

// 이벤트 함수 설정하기 // 
myFn.qs('#sbtn').onclick = () => {
    console.log('입력하라', tit, cont);

    // 1. 입력데이터 유효성 검사 : try, catch 사용
    try {
        if (tit.value.trim() == '' || cont.value.trim() == '') {
            throw "제목과 내용을 입력하세요"
        }
    } // try //
    catch (err){
        // catch문에 들어온 경우는 에러상황임
        alert(err);
        // 함수 아랫부분 실행하지 못하도록 return함
        return;
    } // catch //
    
    // [ 로컬쓰 처리 기본과정 ]
    // 로컬쓰읽기 -> 로컬쓰파싱 -> 데이터변경 -> 로컬쓰문자형
    // 2. 로컬쓰 minfo 데이터 읽어오기 : 문자형 데이터임
    let locals = localStorage.getItem('minfo');

    // 3. 로컬쓰 minfo 파싱후 데이터 넣기
    locals = JSON.parse(locals);
    locals.push({
        idx: locals.length+1,
        tit: tit.value,
        cont: cont.value,
    });

    // 4. 로컬쓰 변경된 데이터 다시 넣기 : 넣을때는 문자화(stringify)
    localStorage.setItem('minfo',JSON.stringify(locals));

    // 5. 다시 데이터 바인딩하기
    bindData();

}; // click 이벤트 함수 //

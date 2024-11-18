/////// JS3-1.제어문 JS ///////

// 본 파일 로딩 확인
console.log("나, 제어문 테스트!");

///// 1. if문 처리를 위한 함수 만들기 /////
/***************************************
    함수명  : showJumsu
    기능 : 점수에 따른 평가를 출력함
      1. 점수에 따른 메시지 출력
      2. 점수에 따른 메시지 글자색 변경
      3. 점수에 따른 칭찬스티커 보이기
***************************************/

/*************************************** 
      [ if문 ]
        - 조건문을 검사하여 true이면
        중괄호안의 코드가 실행되는 제어문

        - 조건문이란 
        결과가 true / false 로 나오는 구문
        (조건문: 비교연산자, 논리연산자)

        ((구문))
        ____________________________

        if(조건문){
            실행코드
        }
        else if(조건문){
            실행코드
        }
        ...
        else{
            실행코드
        }
        ______________________________

        ((구문해석))
        1. if문은 단독으로 따로 사용가능

        2. else if문은 if문 뒤에 또는 else if문 뒤에
        만 사용가능함!(else if로 시작못함!)
        -> 하나의 조건에 걸리면 다른 조건문엔 안들어감!
        -> 단독으로 else if문 사용불가!

        3. else문은 모든 조건에 해당없을때
        무조건 실행할 코드가 있을 경우 사용한다!
        -> if문 가장 끝에 사용한다!
        -> 단독으로 else문만 사용불가!

        ※ 참고 : if문의 실행문이 하나이면 중괄호생략가능
        예) 
            if(aa>10){
                my = "ㅎㅎㅎ";
            }

            -> 위와 같음

            if(aa>10) my = "ㅎㅎㅎ";
      ***************************************/

// 이름이 있는 함수를 선언적 함수라고 함
function showJumsu() {
  // 1. 함수 호출 확인
  // console.log("내 평가를 알려줘");

  // 2. 대상선정
  // 2-1. 점수입력요소 : input#jumsu
  var jumsu =
    document.querySelector("#jumsu");

  // 2-2. 출력요소 : .jexp
  var jexp =
    document.querySelector(".jexp");

  // 2-3. 칭찬스티커 요소 선택 : .jshow
  var jshow =
    document.querySelector(".jshow");

  // console.log("선택요소:", jumsu, jexp, jshow);

  // 3. 점수입력값 읽어오기 : jumsu변수의 input 요소값
  var score = jumsu.value;
  // value속성 - 입력된 input값을 읽어오는 속성
  // console.log("입력된값:", score);

  /************************************************
  [ if문을 이용하여 데이터 필터링하기! ]
  (1) 문자이면 돌려보내기
  (2) 숫자범위가 아니면 돌려보내기
  (3) 빈값이면 돌려보내기
  -> 공통 : 메시지 찍기 + 초기화
************************************************/
  // 3.5-1 문자면 돌려보내기
  // 숫자가 아니니? is Not a Number?
  // JS 내장함수 isNaN(보낼값) -> 결과는? true or false
  // 숫자가 아니면 true / 숫자면 false
  if (isNaN(score)) {
    console.log(
      "숫자가 아니구만~! 나가!"
    );

    // 초기화하기
    // (1) 텍스트 변경하기
    jexp.innerText =
      "숫자만 입력하세요 제발 ";
    // (2) 글자색 변경하기
    jexp.style.color = "black";
    // (3) 칭찬스티커 변경하기
    jshow.style.backgroundPosition =
      "-50% 0%";
    // (4) 입력값 지우고 포커스 보내기
    jumsu.value = "";
    jumsu.focus();
    // 함수를 나가는 키워드 - return
    return;
  } /// if ///
  // 3.5-2. 숫자범위가 아니면 돌려보내기
  // 조건범위 : 0보다 작거나 100보다 크면 true
  else if (score < 0 || score > 100) {
    console.log(
      "점수범위가 아니구만! 나가!!"
    );

    // 초기화하기
    // (1) 텍스트 변경하기
    jexp.innerText =
      "0 ~ 100 사이 숫자만 입력하세요 제발";
    // (2) 글자색 변경하기
    jexp.style.color = "black";
    // (3) 칭찬스티커 변경하기
    jshow.style.backgroundPosition =
      "-50% 0%";
    // (4) 입력값 지우고 포커스 보내기
    jumsu.value = "";
    jumsu.focus();
    // 함수를 나가는 키워드 - return
    return;
  } /// else if ///
  // 3.5-3. 빈값이면 돌려보내기
  // 빈값 확인용 / 공백문자열 제거 trim()
  // -> 문자열 앞뒤 공백 제거 기능
  // -> 공백만 쓰면 공백자체가 제거된다
  else if (score.trim() == "") {
    console.log("비었구만 나가!!");

    // 초기화하기
    // (1) 텍스트 변경하기
    jexp.innerText =
      "값을 입력하세요 제발";
    // (2) 글자색 변경하기
    jexp.style.color = "black";
    // (3) 칭찬스티커 변경하기
    jshow.style.backgroundPosition =
      "-50% 0%";
    // (4) 입력값 지우고 포커스 보내기
    jumsu.value = "";
    jumsu.focus();
    // 함수를 나가는 키워드 - return
    return;
  } /// else if ///

  // 4. 점수에 따른 분기하여 결과출력
  // 결과 담는 변수 셋팅
  // (1) 평가텍스트 변수
  var expText = "";
  // (2) 평가결과 글자색 변수
  var expcolor = "";
  // (3) 칭찬스티커 위치값 변수
  var jshowPos = "";
  /**************************************
  
      90점 이상 : 매우잘함
      80점 이상 : 잘함
      70점 이상 : 보통
      60점 이상 : 노력요함
      60점 미만 : 재시험
  
  **************************************/
  if (score >= 90) {
    expText = "매우잘함";
    expColor = "blue";
    jshowPos = "100% 50%";
  } else if (score >= 80) {
    expText = "잘함";
    expColor = "green";
    jshowPos = "0% 100%";
  } else if (score >= 70) {
    expText = "보통";
    expColor = "#FAB12F";
    jshowPos = "50% 50%";
  } else if (score >= 60) {
    expText = "노력요함";
    expColor = "#9B7EBD";
    jshowPos = "100% 100%";
  } else {
    expText = "재시험";
    expColor = "#FF4545";
    jshowPos = "100% 0%";
  }

  // 5. 화면출력 변경하기
  // 5-1. 텍스트 변경하기
  jexp.innerText =
    "평가결과는 " + expText;
  // 5-2. 글자색 변경하기
  jexp.style.color = expColor;
  // 5-3. 칭찬스티커 변경하기
  jshow.style.backgroundPosition =
    jshowPos;
} ////////// showJumsu 함수 ///////////

// if문 튜닝~~
if (true) {
  console.log("조건통과");
}

if (false) {
  console.log("조건통과2");
} else {
  console.log("불통과");
}

// 변수를 사용한 불린값 체크
var condition;

console.log(
  "할당안된변수값:",
  condition
);

// if문 처리결과 찍기 함수
var showResult = function (txt) {
  // txt - 전달변수
  // 호출확인 + 검사종류 타이틀 찍기
  console.log("🙄" + txt + "😂");
  // if문 테스트하기!
  if (condition) {
    console.log(condition, "if문 통과");
  } else {
    console.log(
      condition,
      ": false처리!"
    );
  }
}; ////////// showResult 함수 ///////////

// 테스트1 : undifined
// 선언후 할당되지 않은 변수값은 undifined임
showResult("테스트1 : undifined");

// 테스트2 : 숫자
// -> 0은 false, 이외의 숫자는 true
// true는 1, false는 0과 1:1 매칭됨
condition = 1;
showResult("테스트2 : 숫자");
condition = 0;
showResult("테스트2 : 숫자");
condition = -1111111;
showResult("테스트2 : 숫자");

// 테스트3 : null
// -> null은 비어있는 값을 의미한다.
condition = null;
showResult("테스트3 : null");

// 테스트4 : 비교연산자
// -> 비교연산자는 결과로 true/false를 return함
condition = 34 < 1;
showResult(
  "테스트4 : 비교연산자 ( 34 < 1 )"
);
condition = 34 > 1;
showResult(
  "테스트4 : 비교연산자 ( 34 > 1 )"
);

// 테스트5 : 선언된 적이 없는 변수
// -> 아예 에러가 발생함
// condition = mymymymy;
// showResult("테스트5 : 선언된 적이 없는 변수");

// 상단 콘솔출력 지우기
console.clear();

///////////// switch문 연습 ///////////
// 여기에서 직접 요소에 이벤트를 설정해보자! //
// 함수 바깥 영역은 바로 실행되므로 이 파일을 불러오는 설정에서 속성으로 defer를 써서 코딩하자.

// 1. 대상선정
// 1-1. 이벤트대상 : button.btn-local
var btnLocal = document.querySelector(
  ".btn-local"
);
// 1-2. 국번안내 : #info
var infoLocal =
  document.querySelector("#info");
// 1-3. 입력창 : input#local
var inputLocal =
  document.querySelector("#local");
console.log(
  "대상찍어!",
  btnLocal,
  infoLocal,
  inputLocal
);

// 2. 이벤트설정
btnLocal.onclick = showLocal;
// 주의! 선언된 함수를 할당할 때 뒤에 소괄호를 하지말자
// 이유 : 바로 실행되기 때문에
// 추가로 입력창에 onkeypress이벤트 발생 시 함수 호출 처리
inputLocal.onkeypress = function(){
  if(event.keyCode == 13){
    // 2. showLocal()호출
    showLocal();
  }
};

/*********************************************
  함수명 : showLocal
  기능 : 지역명을 입력하면 지역국번을 안내한다.
*********************************************/
function showLocal() {
  // 1. 함수호출하기
  console.log("국번을 알려줘");

  // 2. 입력값 읽어오기
  var inputText = inputLocal.value;
  console.log("입력값:", inputText);

  // 3. switch문으로 분기하여 메시지 만들기
  var msg = "";

  switch (inputText) {
    case "서울":
      msg = "02";
      break;
    case "경기":
      msg = "031";
      break;
    case "제주":
      msg = "062";
      break;
    case "인천":
      msg = "032";
      break;
    case "대구":
      msg = "053";
      break;
    case "광주":
      msg = "062";
      break;
    case "전북":
      msg = "063";
      break;
    case "전남":
      msg = "061";
      break;
    case "경북":
      msg = "054";
      break;
    case "경남":
      msg = "055";
      break;
    case "세종":
      msg = "044";
      break;
    case "울산":
      msg = "052";
      break;
    case "대전":
      msg = "042";
      break;
    case "충북":
      msg = "043";
      break;
    case "충남":
      msg = "041";
      break;
    case "나성":
      msg =
        "나성에 가면 편지를 전해줘요~!";
      break;
    default:
      msg = "etc";
  }

  // 4. 메시지 만들기
  // 등록되지 않은 지역일 경우
  if (msg == "etc") {
    msg =
      "입력하신 지역은 등록되지 않았습니다.";
  }
  // 등록된 지역일 경우
  else {
    msg = `${inputText}의 지역번호는 <span style="font-size: 40px; color: hotpink;">${msg}</span>입니다.`;
  }

  // 5. #info에 출력
  infoLocal.innerHTML = msg;
} //////////////// showLocal 함수 //////////////////

/********************************************** 
      [ switch case문 ]
      - 단일조건을 분류하여 실행문을 만들어 줄때 사용하는 제어문

      ((구문구조))
      ________________________________________

      switch(변수){
          case 경우1: 실행코드; break;
          case 경우2: 실행코드; break;
          case 경우3: 실행코드; break;
          ...
          default: 실행문;
      }
      ________________________________________

      ((구문해석))

      1. 변수값에 해당하는 경우 그 값에 해당하는
      case에 들어가서 실행코드를 실행함

      2. 각 case 끝에 break 예약어를 반드시 써야함!
      -> 안쓰면 다른 case에 또 들어가는 경우가 생김!
      -> 일반적으로 break 키워드는 제어문을 빠져나갈때 씀!

      3. default 는 if문의 else문과 비슷하여 해당 케이스가 
      없으면 이 부분이 실행됨(단, 필요시 사용)
      -> default문에는 break를 쓰지 않는다!
  **********************************************/


  // [ for문 구구단 출력을 위한 코드 ]
  // 1. 대상선정 - 이벤트대상, 변경대상
  // 1-1. 이벤트 대상 : selec#selbx
  var selbx = document.querySelector("#selbs");
  // 1-2. 변경 대상 : .g1
  var g1 = document.querySelector(".g1");
  // DOM 선택이 된 이유는 외부JS 호출 시 defer로 호출했기 때문에
  // html태그 로딩 후 실행됨.
  // console.log("선택대상:", selbx,g1);

  // 2. 이벤트 설정하기 
  selbx.onchange = makeGugu;
  // 함수를 그대로 할당하면 이벤트 발생 시 함수를 실행한다.

  // 3. 함수만들기
  function makeGugu(){
    // 함수를 호출한 요소 자신은? this
    // this === select#selbx요소

    // 1. 선택값 option의 value값
    var optVal = this.value;

    // 2. 함수호출확인
    console.log("구구단을 쓰자", optVal, this);

    // 3. 구구단 만들기
    var hcode = `<h2>${optVal}단</h2>`;

    // 구구단 넣기
    hcode += ` 4 * 3 = 12 <br> `;

    // 4. 화면요소에 출력하기
    // 대상.innerHTML = hcode;
    g1.innerHTML = hcode;

  }; /// makeGugu 함수 ///
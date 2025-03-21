////// JS1.기본사용법 JS //////

console.log("JS1.기본사용법 시작~");

// 함수는 코드를 저장하는 구역임
// 함수명은 코드저장소의 주소다
// 함수의 호출은 함수명()
/***************************************** 
    함수명 : 김비서나와라
    기능 : 김비서 박스에 각종 변경하기
*****************************************/

function 김비서나와라(){
    // 1. 함수 호출 확인
    console.log('김비서나왔다');

    // 2. HTML 넣기 : 이벤트 속성에서 인라인코드로 이미 실행함(이미지 넣기)

    /////// 3. CSS 변경하기 ///////
    // CSS를 변경할 대상선정 : .pbox
    console.log(
        document.getElementsByClassName('pbox'),
        document.getElementsByTagName('span'),
        document.getElementById('name')
    );

    // 변수에 대상 할당하기
    var 나변수 = document.getElementsByClassName('pbox').item(0);
    // 특정 메모리 공간이다.
    // 선언과 동시에 할당하여 값을 저장한다.
    // var 변수명 = 값; (값이 변수에 할당된다.)

    // 변수를 사용하는 이유
    // 1. 변수는 재사용
    // 2. 변수는 저장 메모리공간 주소
    // 3. 변수는 ""(따옴표)를 사용하지 않은 문자
    // 4. 변수는 띄어쓰기 없음
    // 5. 변수는 호출 시 값 출력
    // 6. 변수는 재할당 시 다른 값 덮어씀
    // 7. 변수는 한 번만 선언해야 함 (var, let, const)
    // 8. var는 variable(변수) 라는 단어에서 나온 말

    /////// [ 변경내용 ] ///////
    // 3-1. 배경이미지 넣기
    나변수
    // .pbox중 첫번째 (0)을 선택함
    // item(순번)
    .style.background = "url(./images/kimbs.jpg) no-repeat top/cover";

    // 3-2. 글자색 변경하기
    나변수
    .style.color = "#ffffff";

    // 3-3. 글자크기 변경하기
    나변수.style.fontSize = "40px";

    // 3-4. 글씨 그림자
    나변수.style.textShadow = "0 0 10px rgba(0,0,0,1)";

    // 3-5. 트랜지션
    // 나변수.style.transition = "all 1s";
    // ``(백틱)은 줄바꿈 자유로움
    나변수.style.transition = `
        2s,
        top 4s 2s,
        left 2s 2s,
        rotate 3s 3s,
        translate 1s 2s,
        scale 2s 6s
    `;

    // 3-6. 크기변경
    나변수.style.width = "600px";
    나변수.style.height = "600px";

    // 3-7. 줄간격
    나변수.style.lineHeight = "1.5";

    // 3-8. 원만들기
    나변수.style.borderRadius = "50%";

    // 3-9. 중앙이동
    나변수.style.position = "absolute";
    나변수.style.top = "50%";
    나변수.style.left = "50%";

    // 3-10. 트랜스폼 변경 : 중앙이동, 360도 회전, 스케일 변경
    // 나변수.style.translate = "-50% -50%";
    // 나변수.style.rotate = "360deg";
    // 나변수.style.scale = "1.3";
    나변수.style.transform = "translate(-50%, -50%) rotate(360deg) scale(1.3)";
    // 속성명을 잘못쓰면 브라우저가 출력에서 제외한다.
    // 예전 브라우저는 에러 발생 했지만, 요즘은 에러 안남

    // 3-11. 전체 배경색 바꾸기
    // 대상 : body
    // JS에서 body는 특별히 취급하여 document.body로 선택한다.
    var 나바디 = document.body;
    나바디.style.backgroundColor = "lightGreen";
    나바디.style.transition = "3s 5s";
    // 나바디.style.backgroundImage = "linear-gradient(45deg, purple, yellow, lightgreen)"

    /**************************************************
        [ JS DOM의 요소 선택 메서드 ]
         1. id 선택 메서드 : getElementById(id명)
            - document.getElementById("id명")
         2. class 선택 메서드 : getElementsByClassName(class명)
            - document.getElementsByClassName("class명")
            ((하위속성))
            length - 클래스 개수
            ((순번선택 하위메서드))
            item(순번) - 구체적인 순번요소 선택 (0부터 시작)
         3. tag 선택 메서드 : getElementsByTagName(tag명)
            - document.getElementsByTagName("tag명")
            ((하위속성))
            length - 요소개수
            ((순번선택 하위메서드))
            item(순번) - 구체적인 순번요소 선택 (0부터 시작)

        [ HTML 컬렉션은 무엇인가? ]
            - DOM을 통하여 선택된 다중선택요소인
            class/tag 를 메모리상 수집하는 공간
            - 상세 선택시 순번선택 메서드인 item()을
            사용하여 선택한다
            - 배열처럼 순서대로 메모리를 사용하기 때문에
            '유사배열'이라고 불리우며 배열처럼 대괄호순번
            을 사용하여 선택할 수 있다!
            - document
            .getElementsByClassName(클래스명).item(0)
            -> 아래처럼 점안찍고 대괄호 순번사용가능!
            .getElementsByClassName(클래스명)[0]

            - 컬렉션 전체 개수정보는 length 속성으로 
            알 수 있다!

            참고) 
            https://www.w3schools.com/js/js_htmldom_collections.asp
    **************************************************/
} // 김비서나와라 함수

/********************************************************* 

    함수명 : 맘대로해라
    기능 : 선택요소의 style과 html을 변경함

*********************************************************/

function 맘대로해라(헐, 헉스){
    // 헐 - html에서 [ .원이야 ]의 순번
    // 헉스 - html에서 [ .원이야 ]의 그림제목
    // 1. 함수호출확인
    console.log("니맘대로하세요~~", 헐, 헉스);

    // 2. 대상선정 : .박스야 .원이야
    // 해당요소의 순번은 헐 변수에 들어있음
    var 아파트 = document.querySelectorAll(".박스야 .원이야")[헐];
    // var 아파트 = document.querySelectorAll(".박스야 .원이야").item(헐);
    /************************************************************* 
        [ JS DOM의 특별한 선택 메서드 2가지 ]
        1. querySelector(CSS선택자) - 하나만 선택
        2. querySelectorAll(CSS선택자) - 여러개 선택
            -> 2번 방식은 HTMLCollection을 반환한다.
            -> 따라서 length와 item(순번)/[순번]을 사용한다.
    *************************************************************/

    // document.getElementsByClassName("박스야").item(0)
    // .getElementsByClassName("원이야").item(헐);
    
    console.log("대상요소:", 아파트);

    // 3. 변경내용 : transition으로 화면 왼쪽 하단으로 이동하며 박스에 유튜브 비디오가 나오도록 한다.
    // 3-1. transition 설정
    아파트.style.transition = "all 1s ease-out, right 0.5s 1s";

    // 3-2. 위치이동
    아파트.style.top = "calc(100% - 200px)";
    아파트.style.right = "calc(100% - 200px*"+(헐+1)+")";
    // 순번에 1을 더해서 곱한 이유는 right위치를 순서대로 잡기 위함

    // 3-3. 유튜브 동영상 넣기
    아파트.innerHTML = `<iframe src="https://www.youtube.com/embed/8Ebqe2Dbzls?autoplay=1?" allow="autoplay"></iframe>`;

    // 3-4. iframe 디자인
    var 뮤비 = 아파트.querySelector("iframe");

    // cssText 속성 : 한꺼번에 문자열로 CSS를 넣을 때 사용 (주의!! 따로 속성 세팅할 때와 달리 다른 인라인 속성을 덮어써서 지워버린다.)
    뮤비.style.cssText = `
        position: absolute;
        border: none;
        width: 100%;
        height: 100%;
        border-radius: 50%;
    `;
    
    // 자바스크립트를 쉽게 쓰는 한가지 방법
    // 클래스 넣기 / 빼기
    // 클래스 제어 객체 : classList
    // (1) add(클래스명) : 클래스 추가
    // (2) remove(클래스명) : 클래스 제거
    // (3) toggle(클래스명) : 클래스 추가/제거
    
    // 3-5. class 추가/제거
    // -> 현재 class "on"때문에 회전 애니메이션이 적용됨
    // 그래서 클릭된 요소는 "on"을 제거한다.

    아파트.classList.remove("on");

} /////////////// 맘대로해라 함수 ////////////////////////


/*********************************************************** 

    함수명 : 사각사각
    기능 : 전체가 사각형으로 화면을 채우며 애니메이션 됨

***********************************************************/

function 사각사각(){
    // 1. 함수호출 확인
    console.log("사각사각");

    // 2. 대상선정 : .넌뭐냐
    var 나야나 = document.querySelector(".넌뭐냐");
    console.log("선택요소:", 나야나);

    // 3. 변경내용 : top, transition, width, height 값 변경
    나야나.style.top = "0";
    나야나.style.borderRadius = "0";
    나야나.style.width = "100%";
    나야나.style.height = "100%";
    나야나.style.transition = "all 3s 1s, top 1s 0s";
    나야나.style.zIndex = "2"
    // top값부터 1초간 작동하고 나머지는 1초 후에 작동

    // 4. 추가변경 : 글자넣기
    // innerText = 글자내용
    // -> 태그 없는 글자 데이터만 넣기
    나야나.innerText = "JS입문을 환영합니다."

    // 5. 글자 관련 CSS 넣기
    나야나.style.fontSize = "70px";
    나야나.style.color = "orange";
    나야나.style.fontWeight = "bold";
    나야나.style.textShadow = "5px 5px 3px #000";
    나야나.style.lineHeight = window.innerHeight + "px";
    // window.innerHeght는 현재 윈도우창 높이값 리턴!

    // 화면 높이값
    console.log("화면높이값:", window.innerHeght);
    
    
}; ////////////////// 사각사각 함수 //////////////////////







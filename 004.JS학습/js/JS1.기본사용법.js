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
    document.getElementsByClassName('pbox'));

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
    // 나바디.style.background = "linear-gradient(45deg, purple, yellow, lightgreen)"
} // 김비서나와라 함수










// 아이폰 회전하기 : 따라보기 기능구현 [ iphone JS ] //

/* [ 요구사항 분석 ]

  아이폰이 x축 y축으로 분할된 영역에
  마우스오버시 해당 수치로 회전하여
  마우스 포인터를 따라보게 한다.

  CSS에서 마우스포인터도 이미지로 바꿔준다.
*/

// 1. 이벤트대상 : .evt-bx li
const target =
  document.querySelectorAll(
    ".evt-bx li"
  );
// console.log("대상요소:", target);

// 2. 이벤트 설정하기
// 요소개수
const eleCnt = target.legnth;

// console.log("대상요소:", target, eleCnt);

// 위치배열값 : x축값 : 5가지, y축값 : 3가지
const xVal = [20, 10, 0, -10, -20];
const yVal = [20, 0, -20];

// 개수만큼 for문 돌려서 예쁘게 설정하기
// for(시;한;증){코드}
for (let i = 0; i < eleCnt; i++) {
  // x축값 : 5가지
  // y축값 : 3가지
  // 위의 값을 구체적으로 배열로 만든다.
  // 그 배열값의 순번으로 조합하여 만들어준다.
  // 각줄 : xy, xy, xy, xy xy
  // 첫번째줄 : 00,10,20,30,40
  // 두번째줄 : 01,11,21,31,41
  // 세번째줄 : 02,12,22,32,42

  // 출력할 값 x축변수
  let x1;
  // 9보다 크면 10빼고
  if(i > 9) x1 = i - 10;
  // 4보다 크면 5빼고
  else if(i > 4) x1 = i-5;
  // 그 외의 경우에는 i값 그대로
  else x1 = i;

  // 출력할 값 y축변수
  let y1;
  // 9보다 크면 2
  if(i > 9) y1 = 2;
  // 4보다 크면 1
  else if(i > 4) y1 = 1;
  // 그 외의 경우에는 0
  else y1 = 0;

  console.log("나돌아?", x1, y1);
} //// for ////

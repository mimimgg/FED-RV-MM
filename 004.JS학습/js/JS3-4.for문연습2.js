// JS3-4 for문 연습2 //

// 로딩구역 //
window.addEventListener("DOMContentLoaded", ()=>{
  console.log("로딩완료");

  // 요구사항분석 //
  // 이미지 개수만큼 for문을 돌려서 html 태그를 반복적으로 생성하여 대상요소에 삽입해준다.

  // 1. 대상선정 : .wrap
  const wrap = document.querySelector(".wrap");
  console.log("대상:", wrap);

  // 2. html코드 생성하기
  let hCode = "<ul>";

  // for문으로 반복코드 생성
  // for(시;한;증){코드)
  // 이미지가 1~50번까지
  for(let i=1; i<=50; i++){
    hCode +=  `
      <li>
        <img src="./images/dress/${i}.jpg" alt="드레스">
        <h3>옷이름</h3>
        <h4>가격</h4>
      </li>
    `;
  } /// for ///

  hCode += "</ul>";

  // 3. html코드 삽입하기
  wrap.innerHTML = hCode;


}); /// 로드함수 ///
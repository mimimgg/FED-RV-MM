// if문 연습 - 알라딘 스틸컷 변경 //

// [  기능 요구사항  ]
// (1) 버튼을 클릭하면 메인 이미지가 변경된다.
// (2) 버튼 클릭 시 기존 이미지가 왼쪽으로 사라진 후, 오른쪽에서 새로운 이미지가 나타난다.

// 1. 대상선정
// 1-1. 이벤트 버튼들 : 버튼들 - .btns
var btns = document.querySelectorAll(".btns");

// 1-2. 메인이미지 : 변경대상 - #scene
var scene = document.querySelector("#scene");

console.log("대상:", btns, scene);

// 2. 이벤트 걸기
btns[0].onclick = changeImage;
btns[1].onclick = changeImage;
btns[2].onclick = changeImage;
btns[3].onclick = changeImage;

// 3. 함수만들기
function changeImage(){
  // 1. 함수호출하기
  console.log("알라딘",this);
  // this 키워드는 함수를 호출한 요소 자신이다.

  // 2. 호출한 요소(버튼)에 텍스트 읽기
  var bTxt = this.innerText;
  console.log("버튼텍스트:",bTxt);

  // 3. 이미지 경로 if문으로 분기하여 만들기
  var isrc = "";
  if(bTxt === "포스터"){
    isrc = "./images/ala1.jpg";
  }
  else if(bTxt === "장면1"){
    isrc = "./images/ala4.jpg";
  }
  else if(bTxt === "장면2"){
    isrc = "./images/ala2.jpg";
  }
  else if(bTxt === "장면3"){
    isrc = "./images/ala3.jpg";
  }

  // 4. 이미지 나가게 하기 : 클래스 off 넣기
  scene.classList.add("off");

  // 일정시간 뒤에 코드 실행하기
  // 타임아웃 : tㅔㅅ타임아웃!!
  // setTimeout(함수, 시간);
  // 함수에는 실행코드, 시간은 1/1000초 (단위 안씀)
  setTimeout(function(){
    // 5. 이미지 변경하기
    scene.src = isrc;

    // 6. 클래스 off 제거하기 : 왼쪽 바깥에 투명
    scene.classList.remove("off");

    // 7. 클래스 on 넣기 : 오른쪽 바깥에 투명
    scene.classList.add("on");
  },500);

  // 위의 타임아웃보다 0.5초 후 실행
  setTimeout(function(){
    // 8. 클래스 on 제거하기 : 원래 위치로 등장
    scene.classList.remove("on");
  },1000);

}; ////// changeImage() 함수 //////

/************************************************************* 
    [ 클래스를 컨트롤하는 JS classList 객체 ]
    1. 클래스 넣기 : add(클래스명)
    예) document.querySelector('.my').classList.add('on')
    2. 클래스 빼기 : remove(클래스명)
    예) document.querySelector('.my').classList.remove('on')
    3. 클래스 토글 : toggle(클래스명)
    예) document.querySelector('.my').classList.toggle('on')

    [ 타이밍 내장함수 : setTimeout(함수,시간) ]
    -> 함수호출 또는 코드실행을 일정시간후 할 수 있는 JS내장함수
    사용법:
      setTimeout(함수/익명함수코드구역,시간)
      시간은 1/1000초 를 사용함(예: 1000을쓰면 1초임)
      ->시간에 s단위를 쓰지 않는다!
*************************************************************/


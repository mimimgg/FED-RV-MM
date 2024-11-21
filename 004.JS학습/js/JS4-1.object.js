////////////////////// JS4-1.object.js //////////////////////

// 변경 가능하게 let으로 선언
let mimObj = {};
// 오브젝트 형만 만들고 객체 내용은 아래에서!

// [ 선정한 영화 정보 ]
// 1. 영화제목
mimObj.title = "노트북";
// 2. 감독
mimObj.director = "닉 카사베티스";
// 3. 배우
mimObj.actor = "라이언 고슬링, 레이첼 맥아담스";
// 4. 장르
mimObj.genre =
  "멜로, 로맨스, 드라마";
// 5. 관람가
mimObj.ratings = "15세";
// 6. 예고편
mimObj.trailer = function () {
  console.log("예고편:영화아이디");
  // 예고편 플레이 함수호출!
  playMovie("dyuvMHc-vYc");
}; ////// trailer 메서드 ////////

// 객체확인
console.log("나의객체:", mimObj);

//// 2. 김혜민님
let khmObj = {};

khmObj.title = "모아나 2";
khmObj.director = "데이브 데릭 주니어";
khmObj.actor = "아우이 크라발호, 드웨인 존슨";
khmObj.genre = "애니메이션";
khmObj.ratings = "전체관람가";
khmObj.trailer = function () {
  playMovie("zKIN_aZM1Qc");
};

//// 3. 양현석님
let yhsObj = {};
yhsObj.title = "말할 수 없는 비밀";
yhsObj.director = "주걸륜";
yhsObj.actor = "주걸륜, 계륜미";
yhsObj.genre =
  " 로맨스,판타지,드라마";
yhsObj.ratings = "12세";
yhsObj.trailer = function () {
  console.log("예고편:영화아이디");

  playMovie("Ceoe2wf-bbo");
};

console.log("나의객체:", yhsObj);

//// 4. 황대웅님 
let hdwObj = {};

hdwObj.title = "데드풀과 울버린";
hdwObj.director = "숀 레비";
hdwObj.actor =
    "라이언레이놀즈,휴잭맨";
// 4. 장르
hdwObj.genre =
    "액션,코미디";
hdwObj.ratings = "청소년관람불가";
hdwObj.trailer = function () {
    console.log("ㅎㅎ");
  
    playMovie("NVDLUJa5dac0");
}; ////// trailer 메서드 ////////

console.log("나의객체:", hdwObj);

//// 5. 이민경님
let lmkObj = {};

lmkObj.title = "아바타:물의 길(2022)";
lmkObj.director = "제임스 카메론";
lmkObj.actor = "샘 워딩턴, 조 샐다나";
lmkObj.genre =
  " 액션, SF, 전쟁, 판타지 ";
lmkObj.ratings = "12세";
lmkObj.trailer = function () {
  console.log("예고편:영화아이디");

  playMovie("kihrFxwdMb4");
}; ////// trailer 메서드 ////////

console.log("나의객체:", lmkObj);

//// 6. 전정훈님
let jjhObj = {};

jjhObj.title = "베놈: 라스트 댄스";
jjhObj.director = "켈리 마르셀";
jjhObj.actor = "톰 하디";
jjhObj.genre =
  "액션";
jjhObj.ratings = "15세";
jjhObj.trailer = function () {
  console.log("예고편:영화아이디");

  playMovie("yowWyxS5rXc");
}; ////// trailer 메서드 ////////

console.log("나의객체:", jjhObj);


//// 7. 윤고은

let ygeObj = {};


ygeObj.title = "퓨리오사: 매드맥스 사가";

ygeObj.director = "조지 밀러";

ygeObj.actor = "안야 테일러 조이, 크리스 헴스워스";

ygeObj.genre =

  " 액션";

ygeObj.ratings = "15세";

ygeObj.trailer = function () {

  console.log("예고편:영화아이디");

  playMovie("NXHOhQOCB6g");

}; ////// trailer 메서드 ////////


console.log("나의객체:", ygeObj);



//// 8. 강수현님

let shkObj = {};

shkObj.title = "미션 임파서블: 파이널 레코닝";
shkObj.director = "크리스토퍼 맥쿼리";
shkObj.actor = "톰 크루즈";
shkObj.genre = "액션, 스릴러";
shkObj.ratings = "15세 이상 관람가";
shkObj.trailer = function () {
  console.log("예고편:영화아이디");

  playMovie("uOzcSOSGb3w");
}; ////// trailer 메서드 ////////

console.log("나의객체:", shkObj);


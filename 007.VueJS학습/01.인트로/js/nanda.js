// 스타일 난다 사이트 구성 JS /////

/*************************************** 
 * [ 뷰JS 인스턴스 생성 기본구성 ]
 * new Vue({
 *  1. 대상요소 : el{}
 *  2. 데이터 : data{}
 *  3. 메소드 : methods{}
 *  4. 라이프사이클 : created(){} / mounted(){}
 * })
 ****************************************
 * [ 뷰JS 라이프 사이클 속성 사용하기 ]
 * -> 뷰인스턴스 생성자 메서드 객체 셋팅시 사용!
 * -> new Vue({created(){},mounted(){},})
 * 
 * 1. 뷰인스턴스 초기화 완료단계 : created
 * -> 이 단계활용법 : 데이터 셋팅을 많이한다!
 * -> 사용법 :
 * created: function(){코드}
 * created: ()=>{코드}
 * created(){코드}
 * 
 * 2. 뷰랜더링 완료단계 : mounted
 * -> 이 단계활용법 : JS, 제이쿼리 등 DOM에 그려진 후
 *  코딩해야하는 부분을 여기에 연결한다!
 * -> 사용법 :
 * mounted: function(){코드}
 * mounted: ()=>{코드}
 * mounted(){코드}

***************************************/

// [ 상품정보를 만들어주는 생성자함수 만들기 (인스턴스) ]
// 앞글자를 대문자로 쓴다, 이것은 개발자들 사이에서 '생성자함수'임을 바로 알아볼 수 있게 한다.
function GetList(idx, name, img, price) {
  // 객체 {속성:값} 생성하기
  this.idx = idx;
  this.name = name;
  this.img = img;
  this.price = price;
} // GetList 생성자함수 //

// 아래와 같이 생성자 함수가 아닌 객ㅊ리턴 함수를 사용할 수 있다.
// const retFn = (idx,name,img,price) => ({
//   idx:idx,
//   name:name,
//   img:img,
//   price:price,
// });
// console.log(retFn("aa","bb","cc","dd"));

// 1. 뷰JS 인스턴스 생성하기
const vm = new Vue({
  // (1) 대상선정
  el: "#vue-app",
  // - 대상요소가 반드시 아이디명일 필요는 없음
  // 클래스이름 사용시 여러개일 경우 첫번째 것만 선택됨

  // (2) 데이터 설정하기
  data: {
    // (2-1) 샵명 데이터
    bitTit: "Style NANDA",
    // (2-2) 로고 태그 정보
    logo: `<img src="./images/logo_3ce.png" alt="스타일난다로고">`,
    // (2-3) 배너 데이터
    content: `
      나는 날고 싶어👐
      <h2>오늘도 당신은 날고싶다~!</h2>
      <img src="./images/sub_banner_e.jpg" alt="스타일난다배너">
    `,
    // (2-4) 상품정보 배열
    items: [], // 호출 시 this.items
  },

  // (3) 메서드 설정하기
  methods: {
    // (3-1) 이미지 태그를 리턴하는 메서드
    makeImg(val){
      return `
      <img src="./images/fashion1/${val}.jpg" alt="스타일난다상품1">
      <img src="./images/fashion2/${val}.png" alt="스타일난다상품2">
      `;
    },
    // (3-2) 숫자 세자릿수 구분 콤마
    addCommas: (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
  },

  // (4) 뷰인스턴스 초기화 단계 : created
  created() {
    // 상품데이터 생성자 함수를 호출하여 데이터를 생성함

    // 배열로 상품이름 임의생성할 것 세팅
    const goods = ["프레이컷", "아일렛기모", "베어부클", "포멀믹스톤"];

    // 객체 18개를 생성하자 -> data파트에 생성함
    // const items = [];

    for (let i = 1; i < 19; i++) {
      // 상품명 배열 랜덤 번호(0 ~ 3)
      let rdm = Math.floor(Math.random() * 4);

      // 가격 랜덤 곱할 수 (4 ~ 20 -> 1 ~ 17 + 3)
      let rdm2 = Math.ceil(Math.random() * 17) + 3;

      // 배열변수에 값 넣기
      this.items.push(
        new GetList(
          i, // 일련번호
          goods[rdm] + 1, // 상품명
          `nanda_${i}`, // 이미지명
          2000 * rdm2 // 상품가격
        )
      ); // push //
    } // for //
    console.log(this.items);
  }, // created //

  // (5) 뷰 랜더링 완료단계 : mounted
  mounted() {
    // 랜더링 후 자동실행구역 
    // 1) 제목 숨겼다 보이기
    $('.tit').hide().delay(1000).slideDown(400);

    // 2) 로고 왼쪽 날아오기
    $('.logo').css({translate: '-100vw'})
    .delay(2000)
    .animate({translate: '0'}, 800, "easeOutElastic", ()=>{
      // 3) 리스트 위치로 스크롤 애니 이동
      $('html, body')
      .animate({
        scrollTop: $('.gwrap').offset().top + ''}
        , 600, "easeOutExpo");
    });
  }, // mounted //
});

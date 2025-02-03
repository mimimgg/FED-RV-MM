// 보그 PJ 배너 컴포넌트 - banner.js

// import 지정이름(내맘대로) from "제이슨경로" with {type: "json"};
import banData from "../../data/banner_data.json" with{type: "json"};
console.log(banData);

// [1] 모듈함수 불러오기 파트 /////////
// 드래그 슬라이드 기능 함수 불러오기
import setSlide from "../function/drag_slide.js";

// 1. 상단컴포넌트
export const BannerComp = Vue.component('banner-comp',{
  // 1-1. 템플릿코드설정 /////
  template:`
    <div id="ban-area" class="inbox">
      <section class="ban-area">
        <!-- 배너박스 -->
        <div class="ban-box banbx">
          <ul class="slide dtg">
            <li v-for="v in this.banInfo">
              <img 
              v-bind:src="
              './images/main_banner/banner_0'+v.idx+'.jpg'" alt="배너1
              " />
              <div class="post-content">
                <p>
                  <span>{{v.category}}</span>
                  <span>{{v.date}}</span>
                </p>
                <h3>{{v.title}}</h3>
              </div>
            </li>
          </ul>
          <!--이동버튼-->
          <a href="#" class="controls abtn ab1"
            ><img src="images/left_btn.png" alt="왼쪽이동버튼"
          /></a>

          <a href="#" class="controls abtn ab2"
            ><img src="images/right_btn.png" alt="오른쪽이동버튼"
          /></a>

          <!--블릿버튼-->
          <ol class="controls indic"></ol>
        </div>
      </section>
    </div>
  `,
  // 1-2. 데이터 셋업 리턴 메서드 /////
  data(){
      return{
          // (1) 배너 정보 데이터
          banInfo: banData,
          // -> 일반적으로 원본 제이슨 데이터를 컴포넌트용 변수에 별도로 할당하여 사용한다.
      };
  },
  // 컴포넌트 라이프 사이클 메서드 구역
  // mounted 메서드 : DOM 로딩 후 실행구역
  // -> 일반 DOM코딩 javaScript는 여기에서 호출한다.
  mounted(){
    // 드래그 슬라이드 기능 함수 호출하기
    setSlide('banbx');
  }, // mounted 메서드 구역 //
});
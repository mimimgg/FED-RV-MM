// 보그 PJ - 뷰 라우터 세팅 JS - router.js

// 컴포넌트 불러오기 /////
// [1] 공통컴포넌트
import { TopComp } from "./components/common_spa.js";
import { BannerComp } from "./components/banner.js";
import { JoinComp } from "./components/join.js";
import { LoginComp } from "./components/login.js";
import { TodayAreaComp } from "./components/today_area.js";
import { FashionAreaComp } from "./components/fashion_area.js";
import { MainComp} from "./components/main.js";

// console.log(TopComp, BannerComp, JoinComp, LoginComp, TodayAreaComp, FashionAreaComp);

// 메인페이지 컴포넌트
const MainComp = Vue.component("main-comp", {
  template: `
    <!-- 2. 배너영역 -->
    <main>
      <!-- 2. 배너영역 -->
      <banner-comp></banner-comp>

      <!-- 3. Today’s Stories 영역 -->
      <today-area-comp></today-area-comp>

      <!-- 7. fashion 영역 -->
      <div id="fashion-area">
        <section class="inbox fashion-area">
          <h2 class="sub-tit">FASHION</h2>
          <div class="post-list"></div>
        </section>
      </div>
    </main>
  `,
});

// [ 뷰라우터 인스턴스 내보내기 ] /////
// -> 라우터 셋팅 방식
// new VueRouter({routes:[]})
// -> 만약 외부에 셋팅될 경우
// -> const routes = []
// -> new VueRouter({routes})
// -> routes라는 속성명은 정해진이름임!
export default new VueRouter({
  routes: [
    {
      // (1) 경로설정 : path
      // -> router-link의 to 속성값과 같은값으로 셋팅!
      path: "/trip",
      // (2) 연결할 컴포넌트 설정 : component
      // -> 외부의 변수로 셋팅할 수 있고 직접 쓸 수 있음
      component: Trip,
    },
  ],
}); ///////// VueRouter ////////////////

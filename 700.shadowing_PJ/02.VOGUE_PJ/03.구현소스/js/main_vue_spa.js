// 보그 PJ 메인페이지 뷰적용 JS - main_vue_spa.js

// 라우터 인스턴스 생성 및 라우터 경로 세팅
import router from "./router.js";

/******************************* 
    메인 뷰 인스턴스 생성하기 
********************************/
new Vue({
    // 1. 대상설정
    el: '#vogue-app',
    // 1.5. 라우터 등록
    router,
    // 2. 데이터설정
    data:{},
    // 3. 메서드설정
    methods:{},
    // 4. 라이프사이클 메서드
    // 4-1. created() : 데이터생성관련코드 작성
    created(){},

    // 4-2. mounted() : DOM관련코드 작성
    mounted(){
        // 만약 첫페이지가 다른 경로면 DOM로딩 후 구역에서 라우터를 강제로 호출한다.
        // this.$router.push('/');
    },
});
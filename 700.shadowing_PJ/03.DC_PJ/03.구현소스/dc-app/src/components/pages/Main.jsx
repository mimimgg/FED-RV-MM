import Banner from "../modules/Banner";
import SecIntro from "../modules/SecIntro";
import VidIntro from "../modules/VidIntro";

// 메인페이지 컴포넌트 : Main.jsx
export default function Main(){
  // 리턴코드구역
  return (
    <>

    {/* 
      1. 배너 컴포넌트
      -> 배너는 3가지 타입이 세팅됨 (main1, main2, main3)
      -> main 뒤의 숫자가 1~3사이의 랜덤수로 세팅되게 함
    */}
      {/* 1. 배너 컴포넌트 */}
      <Banner catName={"main" + (Math.ceil(Math.random()*3))} />
      {/* 2. 섹션 인트로 컴포넌트 */}
      <SecIntro />
      {/* 3. 비디오 컴포넌트 */}
      <VidIntro />
    </>
  );
} // Main 컴포넌트 //
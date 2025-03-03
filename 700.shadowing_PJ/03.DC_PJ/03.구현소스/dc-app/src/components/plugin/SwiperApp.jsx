import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './css/swiper.scss';

// import required modules
// 사용할 스와이퍼 모듈 불러오기
// 여기서는 페이지네이션, 네비게이션, 자동넘김
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function SwiperApp() {

  // 불러올 이미지 리스트
  const imgArr = [
    "dcm28",
    "dcm29",
    "dcm30",
    "dcm31",
    "dcm32",
    "dcm10",
    "dcm11",
    "dcm12",
  ];

  // 리턴코드구역  
  return (
    <>
      <Swiper 
      // 한 화면에 보여줄 슬라이드 수
      slidePerView={3}
      // 슬라이드 사이 간격 (단위 없는 px수)
      spaceBetween={30}
      // 양쪽 이동 네비게이션 사용여부 (모듈import필수)
      navigation={true} 
      // 블릿표시 네비게이션 사용여부 (모듈import필수)
      pagination = {{
        clickable : true, // 블릿 클릭 이동 옵션
      }}
      // 자동넘김 기능 모듈 세팅
      autoplay={{
        delay: 2500, // 대기시간 2.5초
        disableOnInteraction: false, // 인터렉션 없애는 속성 false
        // -> 인터렉션을 살려놔야 터치 후 다시 자동넘김을 한다.
      }}

      // 스와이퍼 추가사용 모듈 등록 속성 (사용시 등록 필수)
      modules={[Navigation, Pagination, Autoplay]} 
      // 무한이동 슬라이드 설정
      loop = {true}
      className="mySwiper"
      >
        { // 배열 이미지만큼 반복하여 슬라이드 생성
          imgArr.map((v, i) => (
            <SwiperSlide key={i}>
              <img src={"./images/" + v + ".jpg"} alt="list image" />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}

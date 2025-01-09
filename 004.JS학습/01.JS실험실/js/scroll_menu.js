// 스크롤 방향에 따른 메뉴 보이기/숨기기
// scroll_menu.js

import myFn from './my_function.js';

// 대상 : #header
const headerMenu = myFn.qs('#header');

myFn.addEvt(window,'wheel',(e)=>{
  let delta = e.wheelDelta;
  console.log('휠', delta);

  // wheelDelta값이 마이너스(아래)일때 헤더에 .on을 줘서 숨기기
  if (delta < 0) headerMenu.classList.add('on');
  else headerMenu.classList.remove('on');
}); // wheel 이벤트 함수 //
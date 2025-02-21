// DC.com 캐릭터 페이지 컴포넌트 - Character.jsx //

import React from 'react';
import Banner from '../modules/Banner';

function Character(props) {
  return (
    <div>
      <h1>캐릭터소개</h1>
      {/* 1. 배너컴포넌트 */}
      <Banner />
    </div>
  );
}

export default Character;
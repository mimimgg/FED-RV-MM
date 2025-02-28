import React from 'react';
import Banner from '../modules/Banner';
import VidIntro from '../modules/VidIntro';

function Video({catName}) {
  return (
    <>
      <VidIntro catName={catName} clsName="on"/>
    </>
  );
}

export default Video;
import React from 'react';
import Banner from "../modules/Banner"
import VidIntro from '../modules/VidIntro';

function Games({catName}) {
  return (
    <>
      <Banner catName="GAMES" />
      <VidIntro catName={catName} clsName="on"/>
    </>
  );
}

export default Games;
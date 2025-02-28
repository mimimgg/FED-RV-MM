import React from 'react';
import Banner from "../modules/Banner"
import VidIntro from '../modules/VidIntro';

function Movies({catName}) {
  return (
    <>
      <Banner catName={catName} />
      <VidIntro catName={catName} clsName="on"/>
    </>
  );
}

export default Movies;
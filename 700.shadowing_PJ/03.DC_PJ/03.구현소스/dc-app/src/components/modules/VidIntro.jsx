// DC.com 비디오소개 컴포넌트 - VidIntro.jsx //

import React from "react";

// 비디오소개 모듈용 CSS 불러오기
import "../../css/modules/vid_intro.scss";

function VidIntro(props) {
  return (
    <section className="on vidbox">
      <div>
        <div className="vb1">
          <iframe
            src="https://www.youtube.com/embed/tjt4vBog9QU"
            title="THE FLASH - DRONE SHOW AT VIVID SYDNEY"
          ></iframe>
        </div>
        <div className="vb2">
          <h3>FEATURED VIDEO</h3>
          <h2>THE FLASH - DRONE SHOW AT VIVID SYDNEY</h2>
          <p>
            In case you missed it - The Flash was included as part of the biggest ever opening weekend of{" "}
            <a href="https://www.vividsydney.com/" target="_blank">
              Vivid Sydney
            </a>{" "}
            where 1,053 drones were used to create the largest drone show in the southern hemisphere!
          </p>
          <p>Visit our Flash Hub for all things The Flash and to find tickets and showtimes near you</p>
        </div>
      </div>
    </section>
  );
}

export default VidIntro;

import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "./videoslider.css";
import "react-alice-carousel/lib/alice-carousel.css";

const items = [
  <div className="item">
    <video className="media" src={require("../image/Winter Driving Tips For Truck Drivers  tamildriversafety1080p.mp4")} controls>

</video>
  </div>,
  <div className="item">
     <video className="media" src={require("../image/Winter Driving Tips For Truck Drivers  tamildriversafety1080p.mp4")} controls>

</video>
  </div>,
  <div className="item">
    <video  className="media" src={require("../image/Winter Driving Tips For Truck Drivers  tamildriversafety1080p.mp4")} controls>

</video>
  </div>,
  <div className="item">
    <video className="media" src={require("../image/Winter Driving Tips For Truck Drivers  tamildriversafety1080p.mp4")} controls>

</video>
  </div>,
//   <div className="item">
//     <video width="100%" controls className="media">
//       <source src="./video.mp4" />
//       Your browser does not support the video tag.
//     </video>
//   </div>
];

const Videoslider = () => {
  const [mainIndex, setMainIndex] = useState(0);

  const slideNext = () => {
    if (mainIndex < items.length - 1) {
      setMainIndex(mainIndex + 1);
    }
  };

  const slidePrev = () => {
    if (mainIndex > 0) {
      setMainIndex(mainIndex - 1);
    }
  };

  return (
    <div className="carousel">
      <AliceCarousel
        activeIndex={mainIndex}
        disableDotsControls
        disableButtonsControls
        items={items}
      />
      <p className="index">{`${mainIndex + 1}/${items.length}`}</p>
      {/* <div className="caption-container">
         <p className="caption">
         
        </p> 
      </div> */}

      <div className="btn-prev" onClick={slidePrev}>
        &lang;
      </div>
      <div className="btn-next" onClick={slideNext}>
        &rang;
      </div>
    </div>
  );
};

export default Videoslider;
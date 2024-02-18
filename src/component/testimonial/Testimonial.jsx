import React, { useState } from "react";
import "./testimonial.css";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { testimonialsData } from "../../data/testimonialsData";
const Testimonial = () => {
  const [seleted, setSelected] = useState(0);
  const tLength = testimonialsData.length;
  return (
    <div className="Testimonial">
      <div className="left-t">
        <span>Testimonial</span>
        <span className="stroke-text">What they</span>
        <span>say about us</span>
        <span>{testimonialsData[seleted].review}</span>
        <span style={{ color: "var(--orange)" }}>
          <span>{testimonialsData[seleted].name}</span>
        </span>
        - {testimonialsData[seleted].status}
      </div>
      <div className="right-t">
        <div></div>
        <div></div>
        <img src={testimonialsData[0].image} alt="testimonialImg" />
        <div className="arrows">
          <img
            onClick={() =>
              seleted === 0
                ? setSelected(tLength - 1)
                : setSelected((prev) => prev - 1)
            }
            src={leftArrow}
            alt="leftArrow"
          />
          <img
            onClick={() =>
              seleted === tLength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1)
            }
            src={rightArrow}
            alt="rightArrow"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

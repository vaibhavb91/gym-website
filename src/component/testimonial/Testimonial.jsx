import React, { useState } from "react";
import "./testimonial.css";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { testimonialsData } from "../../data/testimonialsData";
import { motion } from "framer-motion";
const Testimonial = () => {
  const transition = { type: "spring", duration: 3 };
  const [seleted, setSelected] = useState(0);
  const tLength = testimonialsData.length;
  return (
    <div className="Testimonial" id="testimonials">
      <div className="left-t">
        <span>Testimonial</span>
        <span className="stroke-text">What they</span>
        <span>say about us</span>
        <motion.span
          key={seleted}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
        >
          {testimonialsData[seleted].review}
        </motion.span>
        <span style={{ color: "var(--orange)" }}>
          <span>{testimonialsData[seleted].name}</span>
        </span>
        - {testimonialsData[seleted].status}
      </div>
      <div className="right-t">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>
        <motion.img
          key={seleted}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonialsData[0].image}
          alt="testimonialImg"
        />
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

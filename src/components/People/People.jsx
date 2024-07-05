import React from "react";
import { skills, sliderSettings } from "../../utils/data"; // Assuming you have skills data
// import { BiCodeAlt } from 'react-icons/bi'; // Example import of a React icon
import css from "./People.module.scss";
import Slider from "react-slick";
import { motion } from 'framer-motion';
import { footerVariants, staggerChildren } from "../../utils/motion";

const People = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="skills"></a>

      <motion.div
        variants={footerVariants}
        className={`yPaddings innerWidth ${css.container}`}>

        <div className={`flexCenter ${css.heading}`}>
          <span className="primaryText">Skills</span>
          <p style={{ marginTop: "2rem" }}>
            Here are some of the skills we excel in:
          </p>
        </div>

        <div className={`yPaddings ${css.comments}`}>
          {/* Slider for skills */}
          <Slider {...sliderSettings} className={css.slider}>
            {skills.map((skill, i) => {
              const IconComponent = skill.icon; // Assuming skill.icon is an imported icon component
              return (
                <div key={i} className={`flexCenter ${css.comment}`}>
                  {IconComponent && React.createElement(IconComponent, { size: 64 })} {/* Render the icon */}
                  <p>{skill.name}</p>
                  <div className={css.line}></div>
                  <div className={css.bio}>
                    <span>{skill.description}</span>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>

      </motion.div>

    </motion.section>
  );
};

export default People;

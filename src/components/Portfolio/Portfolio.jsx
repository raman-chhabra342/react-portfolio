import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant } from "../../utils/motion";

const Portfolio = () => {
  const githubLinks = [
    'https://github.com/raman-chhabra342',
    'https://github.com/raman-chhabra342',
    'https://github.com/raman-chhabra342',
    'https://github.com/raman-chhabra342',
    'https://github.com/raman-chhabra342',
    'https://github.com/raman-chhabra342',
  ];

  const handleClick = (index) => {
    window.open(githubLinks[index], '_blank');
  };

  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="projects"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>

        <motion.div variants={textVariant(0.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">Projects</span>
          </div>
          <span className="secondaryText">Explore More Works</span>
        </motion.div>

        <div className={`flexCenter ${css.showCase}`}>
          <motion.img variants={fadeIn("up", "tween", 0.5, 0.6)} src="./twitter.png" alt="project" onClick={() => handleClick(0)} />
          <motion.img variants={fadeIn("up", "tween", 0.7, 0.6)} src="./showCase2.png" alt="project" onClick={() => handleClick(1)} />
          <motion.img variants={fadeIn("up", "tween", 0.9, 0.6)} src="./showCase3.png" alt="project" onClick={() => handleClick(2)} />
          <motion.img variants={fadeIn("up", "tween", 0.9, 0.6)} src="./showCase3.png" alt="project" onClick={() => handleClick(3)} />
          <motion.img variants={fadeIn("up", "tween", 0.9, 0.6)} src="./showCase3.png" alt="project" onClick={() => handleClick(4)} />
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;

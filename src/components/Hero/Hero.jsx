import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span className="primaryText" variants={fadeIn("right", "tween", 0.2, 1)}>
            Hey There,
            <br />
            I'm Raman Chhabra.
          </motion.span>
          <motion.span className="secondaryText"variants={fadeIn("left", "tween", 0.4, 1)}>
            I am a MERN STACK Web Developer,
            <br />
            ML enthusiast and a C++ programmer.{" "}
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img variants={slideIn("up", "tween", 0.5, 1.3)} src="./person.png" alt=""
           />
        </motion.div>

        {/* <a className={css.email} href="mailto:ramanchhabra1202@gmail.com">
          ramanchhabra1202@gmail.com
        </a> */}

        <div className={css.lowerElements}>
        <motion.div variants={fadeIn("right", "tween", 0.3, 1)} className={css.experience}>
        <a href="https://www.linkedin.com/in/raman-chhabra-8ba0121b6/" className="secondaryText">
  <img src='/linked in.png' alt="LinkedIn" className="icon" style={{ width: '32px', height: '32px', marginRight:'2rem'}} />
</a>
<a href="https://github.com/raman-chhabra342" className="secondaryText">
  <img src='/github.svg' alt="GitHub" className="icon" style={{ width: '32px', height: '32px', marginRight:'2rem'}} />
</a>
<a href="https://leetcode.com/YO-its-JIMMY" className="secondaryText">
  <img src='/leetcode.svg' alt="LeetCode" className="icon" style={{ width: '32px', height: '32px',marginRight:'2rem' }} />
</a>

</motion.div>


  <motion.div variants={fadeIn("left", "tween", 0.5, 1)} className={css.certificate}>
  <a href="https://instagram.com/whosramanchhabra" className="secondaryText">
  <img src='/instagram.svg' alt="Instagram" className="icon" style={{ width: '32px', height: '32px', marginRight:'1rem'}} />
</a>
<a href="https://x.com/Ramanchhabra341" className="secondaryText">
  <img src='/twitter.svg' alt="TWITTER" className="icon" style={{ width: '32px', height: '32px',marginRight:'1rem' }} />
</a>
  </motion.div>
</div>

      </motion.div>
    </section>
  );
};

export default Hero;

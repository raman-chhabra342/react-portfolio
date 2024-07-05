import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import { motion } from "framer-motion";
import { FaPhone, FaWhatsapp, FaEnvelope } from "react-icons/fa"; // Importing FontAwesome icons

const Footer = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}
      >
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br />
            amazing together.
          </span>
          <span className="primaryText">
            Start by{" "}
            <a href="mailto:ramanchhabra1202@gmail.com" className={css.link}>
              saying hi
            </a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Contact Us:</span>
            <p>Delhi, India</p>
          </div>
          <ul className={css.menu}>
            <li>
              <a href="tel:+9311764963" className={`${css.callLink} ${css.link}`}>
                <FaPhone className={css.icon} />
                <span className="secondaryText">Call</span>
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/919311764963"
                className={`${css.whatsappLink} ${css.link}`}
              >
                <FaWhatsapp className={css.icon} />
                <span className="secondaryText">Whatsapp:</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:ramanchhabra1202@gmail.com"
                className={`${css.emailLink} ${css.link}`}
              >
                <FaEnvelope className={css.icon} />
                <span className="secondaryText">Mail</span>
              </a>
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;

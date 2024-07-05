import React, { useRef, useState } from "react";
import css from "./Header.module.scss";
import { BiPhoneCall, BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import useHeaderShadow from "../../hooks/useHeaderShadow";

const Header = () => {
  const menuRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();

  // Hook to handle click outside of sidebar on mobile
  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });

  const handleDownload = () => {
    const downloadUrl = '/your-resume-file.pdf'; // Replace with the actual path to your resume file

    // Create a temporary link element
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.setAttribute('download', 'your-resume.pdf'); // Set the download attribute with desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      className={`bg-primary paddings ${css.wrapper}`}
      viewport={{ once: true, amount: 0.25 }}
      style={{ boxShadow: headerShadow }}
    >
      <div className={`innerWidth ${css.container} flexCenter`}>
        <div className={css.name}>Raman</div>
        <ul className={`flexCenter ${css.menu}`} ref={menuRef} style={getMenuStyles(menuOpened)}>
          <li><a href="#aboutme">About Me</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li className={css.resumeButton} onClick={handleDownload}>Resume</li>
        </ul>

        {/* For medium and small screens */}
        <div className={css.menuIcon} onClick={() => setMenuOpened((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;

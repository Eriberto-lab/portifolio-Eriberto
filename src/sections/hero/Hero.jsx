import React from "react";
import styles from "./HeroStyles.module.css";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import whatsappLight from "../../assets/whatsapp-dark.svg";
import light from "../../assets/whatsapp-light-light.svg";
import CV from "../../assets/Profile (1).pdf";
import photoAnime from "../../assets/eriberto-photo.jpeg";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const whatsappIcon = theme === "light" ? whatsappLight : light;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  const photo = photoAnime;

  return (
    <section className={styles.container} id="hero">
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={photo}
          alt="Profile picture of Eriberto Lima"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Eriberto <br /> Lima
        </h1>
        <h2>FullStack Developer</h2>
        <span>
          <a href="https://www.linkedin.com/in/eriberto-lima/" target="_blank">
            <img src={linkedinIcon} alt="linkedin icon" />
          </a>
          <a href="https://www.github.com/Eriberto-lab " target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a
            href="https://wa.me/5511959037783?text=Hello%20Eriberto,%20I'm%20coming%20from%20your%20portfolio"
            target="_blank"
          >
            <img src={whatsappIcon} alt="WhatsApp icon" />
          </a>
        </span>
        <p>
        Turning bugs into features and hunting for the strongest coffee in the galaxy! 
        </p>
        <a href={CV} target="_blank" download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;

import styles from "./SkillsStyles.module.css";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";

import { useTheme } from "../../common/ThemeContext";

function Skills() {

  const { theme } = useTheme();

  const checkMarkIcon = theme === "light" ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <h3>Front-End</h3>
      <br />
      <div className={styles.skillList}>
        <SkillList props={checkMarkIcon} skill={"HTML"} />
        <SkillList props={checkMarkIcon} skill={"Javascript"} />
        <SkillList props={checkMarkIcon} skill={"CSS"} />
        <SkillList props={checkMarkIcon} skill={"React"} />
        <SkillList props={checkMarkIcon} skill={"Redux"} />
        <SkillList props={checkMarkIcon} skill={"Jest"} />
      </div>
      <hr />
      <h3>Back-End</h3>
      <br />
      <div className={styles.skillList}>
        <SkillList props={checkMarkIcon} skill={"Node"} />
        <SkillList props={checkMarkIcon} skill={"C#"} />
        <SkillList props={checkMarkIcon} skill={"X-Unit"} />
        <SkillList props={checkMarkIcon} skill={"Entity Framework"} />
        <SkillList props={checkMarkIcon} skill={"Asp Net Core"} />
        <SkillList props={checkMarkIcon} skill={"REST API"} />
        <SkillList props={checkMarkIcon} skill={"SQL Server"} />
        <SkillList props={checkMarkIcon} skill={"Docker"} />
      </div>
      <hr />
      <h3>Productivity</h3>
      <br />
      <div className={styles.skillList}>
        <SkillList props={checkMarkIcon} skill={"Git"} />
        <SkillList props={checkMarkIcon} skill={"Scrum"} />
        <SkillList props={checkMarkIcon} skill={"Jira"} />
      </div>

      <hr />
    </section>
  );
}

export default Skills;

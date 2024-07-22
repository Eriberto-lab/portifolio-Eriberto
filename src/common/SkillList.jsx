function SkillList({ props, skill }) {
  return (
    <span>
      <img src={props} alt="check mark icon" />
      <p>{skill}</p>
    </span>
  );
}

export default SkillList;

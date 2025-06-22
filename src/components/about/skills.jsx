import React from "react";
import github from "../../Assets/images/git.png";
import trello from "../../Assets/images/trello.png";
import Jira from "../../Assets/images/jira3124.jpg";
const Skills = () => {
  const skillsArr = [
    "React Native",
    "React JS",
    "Redux",
    "Javascript",
    "HTML5",
    "CSS3",
    "Type Script",
    "Bootstrap",
    "React Material UI",
    "APIs Integration",
    "Problem Solving Skills",
    "Firebase",
    "Key Cloak",
    "Python",
  ];

  const toolData = [
    {
      toolImg: github,
      toolName: "Github",
      toolDesc:
        "Proficient Git User Successfully Hosts and Manages Project with Expertise in Version Control and Collaboration.",
    },
    {
      toolImg: Jira,
      toolName: "Jira",
      toolDesc:
        "Expertly Managing Projects with Jira: Harnessing Visual Organization for Seamless Project Tracking and Collaboration.",
    },
  ];
  return (
    <section id="skills">
      <span className="skillTitle">What do I do</span>
      <span className="skillDesc">
        Experienced software engineer specializing in developing responsive,
        user-focused client applications. Dedicated front-end engineer with a
        passion for delivering high-quality code and seamless user experiences.
        Known for strong problem-solving skills, effective communication, and a
        collaborative mindset that fosters team success and continuous
        improvement.
      </span>

      <div className="skillBars">
        {skillsArr &&
          skillsArr.map((item, idx) => {
            return (
              <div className="skillBar" key={idx}>
                {item}
              </div>
            );
          })}
      </div>

      <div className="toolBars" style={{ marginTop: "0.5rem" }}>
        {toolData &&
          toolData.map((item, id) => {
            return (
              <div className="toolBar">
                <img src={item.toolImg} className="toolbarImg" />
                <div className="toolBarText">
                  <h2>{item.toolName}</h2>
                  <p>{item.toolDesc}</p>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Skills;

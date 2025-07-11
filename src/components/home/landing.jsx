import React, { useEffect, useState } from "react";
import btnImg from "../../Assets/images/btnImg.png";
import { Link } from "react-scroll";
import landingpic from "../../Assets//images/landing_pic.jpg";
const Landing = () => {
  const [roles, setRoles] = useState([]);
  const [currentRole, setCurrentRole] = useState(0);
  useEffect(() => {
    const rolesArray = [
      "React Native Developer",
      "React js Developer",
      "Frontend Developer",
    ];
    setRoles(rolesArray);

    const interval = setInterval(() => {
      setCurrentRole((prevRole) => (prevRole + 1) % rolesArray.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <section id="landing">
        <img src={landingpic} alt="" className="bg" />
        <div className="landingContent">
          <span className="hello">Hello,</span>
          <span className="introText">
            I'm <span className="introName">K NAGA PRAMODH</span>
            <br />
            <span className="developerRole">{roles[currentRole]}</span>
          </span>
          <p className="introPara">
            I'm a dedicated Frontend Developer with 2.7 years of experience.
            <br /> Having Strong Interactive,Conceptual and Problem Solving
            Skills.
          </p>
          <Link>
            <button
              className="btn"
              onClick={() =>
                (window.location.href = "mailto:k.nagapramod28@gmail.com")
              }
            >
              <img src={btnImg} alt="" className="btnImg" />
              Hire Me
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Landing;

import React, { useRef, useState } from "react";
import codemaya from "../../Assets/images/logo_codemaya.svg";
import Inapayments from "../../Assets/images/ina-google-knowledge-graph.jpg";
import Bik from "../../Assets/images/bikglobal_logo.jpg";
import web from "../../Assets/images/webexcellis_logo.jpeg";
import git from "../../Assets/images/git.png";
import linkedin from "../../Assets/images/linkedin.png";
import insta from "../../Assets/images/intsa.png";
const Contact = () => {
  const form = useRef();
  const [msgData, setMsgData] = useState({
    name: "",
    email: "",
    message: "",
  });

  console.log(msgData);
  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">Work Portfolio</h1>
        <p className="clientDesc">
          Over the past 2.7 years, I've had the privilege of contributing as a
          dedicated software developer for two esteemed companies, actively
          engaged in server-side projects. <br />
          Through collaborative efforts, I've successfully delivered impactful
          solutions, demonstrating proficiency in crafting robust and scalable
          software tailored to the unique needs of each client.
        </p>
        <div className="clientsImgs">
          <a
            href="https://inapayments.com/"
            target="_blank"
            className="companyLink"
          >
            <div className="clientDetails">
              <img src={Inapayments} alt="" className="clientImg" />
              <p className="details">Inapayemnts, Hyderabad, Telangana</p>
            </div>
          </a>
          <a href="https://bik.ai/" target="_blank" className="companyLink">
            <div className="clientDetails">
              <img src={Bik} alt="" className="clientImg" />
              <p className="details">Bik.ai, Banglore, Karnataka</p>
            </div>
          </a>
        </div>
      </div>

      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Email Address:{" "}
          <span
            onClick={() =>
              (window.location.href = "mailto:k.nagapramod28@gmail.com")
            }
            style={{ cursor: "pointer", color: "#17a2b8" }}
          >
            k.nagapramod28@gmail.com{" "}
          </span>
        </span>
        <br />
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities.
        </span>
        <form
          className="contactForm"
          ref={form}
          action="https://formsubmit.co/k.nagapramod28@gmail.com"
          method="POST"
        >
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="your_name"
            value={msgData && msgData.name}
            onChange={(e) => {
              setMsgData((prevData) => ({
                ...prevData,
                name: e.target.value,
              }));
            }}
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="your_email"
            value={msgData && msgData.email}
            onChange={(e) => {
              setMsgData((prevData) => ({
                ...prevData,
                email: e.target.value,
              }));
            }}
          />
          <textarea
            type="text"
            name="message"
            rows="5"
            placeholder="Your Message"
            className="msg"
            value={msgData && msgData.message}
            onChange={(e) => {
              setMsgData((prevData) => ({
                ...prevData,
                message: e.target.value,
              }));
            }}
          />
          <button
            type="submit"
            value="send"
            className="submitBtn"
            style={{
              pointerEvents:
                msgData && msgData.name && msgData.email && msgData.message
                  ? "auto"
                  : "none",
            }}
          >
            Submit
          </button>
        </form>
        <div className="links">
          <a href="https://github.com/NagaPramodh" target="_blank">
            <img src={git} alt="" className="link" />
          </a>
          <a href="https://www.linkedin.com/in/k-naga-pramodh/" target="_blank">
            {" "}
            <img src={linkedin} alt="" className="link" />
          </a>
          <a href="https://www.instagram.com/pious_boy28/" target="_blank">
            <img src={insta} alt="" className="link" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

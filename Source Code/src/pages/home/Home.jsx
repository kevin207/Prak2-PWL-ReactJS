import React from "react";
import "./home.css";
import { BsGithub, BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs";
import { Fade } from "react-awesome-reveal";

import IMG from "../../assets/people.png";

const Home = () => {
  return (
    <Fade direction="left">
      <div className="content">
        <div className="home-wrap">
          <div>
            <div className="top-title">Hello I'm </div>
            <div className="home-title">Kevin Tanuwijaya</div>
            <div className="sub-title">I'm Full Stack Website Developer</div>

            <div className="contact-title">Find me on : </div>
            <div className="icon-wrap">
              <BsGithub className="home-icon" />
              <BsInstagram className="home-icon" />
              <BsFacebook className="home-icon" />
              <BsLinkedin className="home-icon" />
            </div>
          </div>

          <img src={IMG} alt="this is me" className="home-img" />
        </div>
      </div>
    </Fade>
  );
};

export default Home;

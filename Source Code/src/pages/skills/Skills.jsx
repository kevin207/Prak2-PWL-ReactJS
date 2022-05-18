import React from "react";
import "./skills.css";
import { Fade } from "react-awesome-reveal";
import IMG from "../../assets/skill.png";

import { DiJavascript, DiHtml5, DiCss3, DiReact, DiLaravel, DiBootstrap } from "react-icons/di";

const Skills = () => {
  return (
    <Fade direction="up">
      <div className="content">
        <div className="skills-wrap">
          <div>
            <div className="skills-top-title">Knowledge</div>
            <div className="skills-title">My Skills</div>
            <img src={IMG} alt="my skill" className="skill-img" />
          </div>

          <div className="right-skills-wrap">
            <div className="skill-type">
              <div className="sub-title-skills">Programming Languange</div>
              <div className="skill-wrap">
                <div className="skill">
                  <DiHtml5 className="skill-logo" />
                  <div className="skill-title">HTML</div>
                  <div className="proficiency-wrap">
                    <div className="proficiency-ok"></div>
                    <div className="proficiency-ok"></div>
                    <div className="proficiency-ok"></div>
                    <div className="proficiency-ok"></div>
                    <div className="proficiency"></div>
                  </div>
                </div>

                <div className="skill">
                  <DiCss3 className="skill-logo" />
                  <div className="skill-title">CSS</div>
                  <div className="proficiency-wrap">
                    <div className="proficiency-ok"></div>
                    <div className="proficiency-ok"></div>
                    <div className="proficiency-ok"></div>
                    <div className="proficiency-ok"></div>
                    <div className="proficiency"></div>
                  </div>
                </div>

                <div className="skill">
                  <DiJavascript className="skill-logo" />
                  <div className="skill-title">Javascript</div>
                  <div className="proficiency-wrap">
                    <div className="proficiency-ok"></div>
                    <div className="proficiency-ok"></div>
                    <div className="proficiency-ok"></div>
                    <div className="proficiency"></div>
                    <div className="proficiency"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="skill-type">
              <div className="sub-title-skills">Framework</div>
              <div className="skill-wrap">
                <div className="skill">
                  <DiReact className="skill-logo" />
                  <div className="skill-title">React</div>
                  <div className="proficiency-wrap">
                    <div className="proficiency-ok"></div>
                    <div className="proficiency-ok"></div>
                    <div className="proficiency-ok"></div>
                    <div className="proficiency-ok"></div>
                    <div className="proficiency"></div>
                  </div>
                </div>

                <div className="skill">
                  <DiLaravel className="skill-logo" />
                  <div className="skill-title">Laravel</div>
                  <div className="proficiency-wrap">
                    <div className="proficiency-ok"></div>
                    <div className="proficiency-ok"></div>
                    <div className="proficiency-ok"></div>
                    <div className="proficiency"></div>
                    <div className="proficiency"></div>
                  </div>
                </div>

                <div className="skill">
                  <DiBootstrap className="skill-logo" />
                  <div className="skill-title">Bootstrap</div>
                  <div className="proficiency-wrap">
                    <div className="proficiency-ok"></div>
                    <div className="proficiency-ok"></div>
                    <div className="proficiency-ok"></div>
                    <div className="proficiency"></div>
                    <div className="proficiency"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Skills;

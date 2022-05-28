import React, { useState, useEffect } from "react";
import "./project.css";
import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import IMG from "../../assets/project.jpg";

const Project = () => {
  const navigate = useNavigate();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    await axios.get("https://aqueous-sands-36633.herokuapp.com/api/comments").then(function (response) {
      if (response.data.status === 200) {
        setComments(response.data.comments);
        console.log(response.data.comments);
      }
    });
  }

  return (
    <>
      <Fade direction="right">
        <div className="content-project">
          <div className="project-wrap">
            <div className="project">
              <img src={IMG} alt="project" className="project-img"></img>
              <div className="project-name">Project Real</div>
              <div className="comment-wrap">
                <div className="comment-top">
                  <div className="comment-title">Comments : </div>
                  <button
                    className="btn-project"
                    onClick={() => {
                      navigate("add");
                    }}
                  >
                    Add
                  </button>
                </div>

                <div className="comment-bottom">
                  <table>
                    <tbody>
                      {comments.map((item) => (
                        <tr key={item.id}>
                          <td className="name">{item.nama}</td>
                          <td>&nbsp;:&nbsp;</td>
                          <td className="comment">{item.komentar}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="project">
              <img src={IMG} alt="project" className="project-img"></img>
              <div className="project-name">Project Dummy</div>
              <div className="comment-wrap">
                <div className="comment-top">
                  <div className="comment-title">Comments : </div>
                  <button className="btn-project">Add</button>
                </div>

                <div className="comment-bottom">
                  <table>
                    <tbody>
                      <tr>
                        <td className="name">Kevin Tanuwijaya</td>
                        <td>&nbsp;:&nbsp;</td>
                        <td className="comment">This is really Cool</td>
                      </tr>

                      <tr>
                        <td className="name">Juan Tanuwijaya</td>
                        <td>&nbsp;:&nbsp;</td>
                        <td className="comment">Jelek banget nih</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Project;

import "./project.css";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import swal from "sweetalert";

const AddComment = () => {
  const [inputs, setInputs] = useState({});

  const navigate = useNavigate();

  const handleAdd = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("nama", inputs.nama);
    formData.append("komentar", inputs.komentar);

    await axios.post("https://aqueous-sands-36633.herokuapp.com/api/add-comment", formData).then(function (response) {
      if (response.data.status === 200) {
        swal({
          title: "Succes!",
          text: response.data.message,
          icon: "success",
          button: "Okay!",
        });
        navigate("/project");
      }
    });
  };

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  };

  return (
    <Fade>
      <div className="content-project-add">
        <form className="input-form" encType="multipart/form-data" onSubmit={handleAdd}>
          <div className="top-title">Add Comment</div>
          <div className="input-wrap">
            <div>Nama</div>
            <input className="input-field" type="text" name="nama" onChange={handleInput} required autoComplete="off" />
          </div>

          <div className="input-wrap">
            <div>Komentar</div>
            <textarea className="input-textarea" onChange={handleInput} type="text" name="komentar" required />
          </div>

          <button type="submit" className="btn-add">
            Add Comment
          </button>
        </form>
      </div>
    </Fade>
  );
};

export default AddComment;

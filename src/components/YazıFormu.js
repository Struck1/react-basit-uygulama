import React, { useState, useEffect } from "react";
import { api } from "../api";
import { withRouter } from "react-router-dom";

const YazıFormu = (props) => {
  const [yazı, setYazı] = useState({
    title: "",
    content: "",
  });

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (props.yazı.title) {
      //edit
      api()
        .put(`posts/${props.match.params.id}`, yazı)
        .then((response) => {
          console.log(response);
          props.history.push(`/posts/${props.match.params.id}`);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      //ekleme
      api()
        .post("/posts", yazı)
        .then((response) => {
          props.history.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleChange = (event) => {
    setYazı({ ...yazı, [event.target.name]: event.target.value });
  };

  return (
    <form className="was-validated">
      <div className="mb-3 ">
        <label htmlFor="formGroupExampleInput" className="form-label">
          Yazı Başlığı
        </label>

        <input
          type="text"
          name="title"
          className="form-control"
          onChange={handleChange}
          id="formGroupExampleInput"
          value={yazı.title}
          style={{ height: 50, width: 200 }}
          required
        />
        <div className="invalid-feedback">Başlık alanı zorunludur.</div>

        <label htmlFor="floatingTextarea">Yazı İçeriği</label>
        <textarea
          name="content"
          className="form-control"
          id="floatingTextarea"
          value={yazı.content}
          onChange={handleChange}
          style={{ height: 150, width: 400 }}
          required
        ></textarea>
        <div className="invalid-feedback">Yazı içeriği alanı zorunludur.</div>
        <button
          type="submit"
          className="btn btn-primary mt-3"
          onClick={onFormSubmit}
        >
          Gönder
        </button>
      </div>
    </form>
  );
};

export default withRouter(YazıFormu);

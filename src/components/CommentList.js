import React, { useState, useEffect } from "react";
import { api } from "../api";
import { withRouter } from "react-router-dom";

const CommentList = (props) => {
  const [yorumEdit, setYorumEdit] = useState(null);

  const [text, setText] = useState({
    body: props.body,
  });

  const onClick = (id) => {
    setYorumEdit(id);
  };

  const handleChange = (event) => {
    setText({ ...text, [event.target.name]: event.target.value });
  };

  const onClickSubmit = (event) => {
    event.preventDefault();

    // console.log(props.comments[0].post_id, yorumEdit);
    api()
      .put(`/posts/${props.comments[0].post_id}/comments/${yorumEdit}`, text)
      .then((response) => {
        setYorumEdit(null);
      });
  };

  return (
    <React.Fragment>
      <h3>Comments</h3>
      {props.comments.map((comment) => {
        if (yorumEdit === comment.id) {
          return (
            <div className="form-floating" key={comment.id}>
              <textarea
                name="body"
                className="form-control mb-2"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                style={{ height: 100 }}
                onChange={handleChange}
                value={text.body}
                defaultValue={comment.body}
              ></textarea>
              <label htmlFor="floatingTextarea2">{comment.display_name}</label>
              <button
                className="btn btn-warning btn-sm mb-2 "
                type="Submit"
                onClick={onClickSubmit}
              >
                Gönder
              </button>
            </div>
          );
        } else {
          return (
            <div className="card mb-1" key={comment.id}>
              <div className="card-body">
                <h5 className="card-title">{comment.display_name}</h5>
                <p className="card-text">{comment.body}</p>
                <button
                  className="btn btn-warning btn-sm me-2"
                  type="button"
                  onClick={() => {
                    onClick(comment.id);
                  }}
                >
                  Düzenle
                </button>
                <button className="btn btn-danger btn-sm" type="button">
                  Sil
                </button>
              </div>
            </div>
          );
        }
      })}
    </React.Fragment>
  );
};

export default withRouter(CommentList);

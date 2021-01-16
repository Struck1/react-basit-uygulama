import React, { useState } from "react";

const CommentForm = (props) => {
  const commentStart = {
    display_name: "",
    body: "",
  };
  const [commentBody, setCommentBoyd] = useState(commentStart);

  console.log(props);

  const handleOnChange = (event) => {
    setCommentBoyd({
      ...commentBody,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <React.Fragment>
      <h3>Comment</h3>
      <form
        className="form-floating mb-3 "
        onSubmit={(event) => {
          props.handleSubmit(event, commentBody);
          setCommentBoyd(commentStart);
        }}
      >
        <input
          name="display_name"
          type="text"
          onChange={handleOnChange}
          className="form-control mb-2"
          id="floatingInput"
          value={commentBody.display_name}
        />
        <label htmlFor="floatingInput">Name</label>
        <div className="form-floating mb-3">
          <textarea
            name="body"
            className="form-control"
            onChange={handleOnChange}
            placeholder="Leave a comment here"
            id="floatingTextarea"
            style={{ height: 100, width: 400 }}
            value={commentBody.body}
          ></textarea>
          <label htmlFor="floatingTextarea">Comments</label>
          <button type="submit" className="btn btn-primary mt-2">
            Submit
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default CommentForm;

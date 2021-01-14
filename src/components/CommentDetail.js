import axios from "axios";
import React, { useEffect, useState } from "react";

const CommentDetail = (props) => {
  const [detailList, setDetailList] = useState({});
  const { id } = props.match.params;
  const [comments, setComments] = useState([]);
  const [commentBody, setCommentBoyd] = useState({
    display_name: "",
    body: "",
  });

  const handleCommentSubmit = (comment) => {
    axios
      .post(
        `https://react-yazi-yorum.herokuapp.com/posts/${id}/comments`,
        comment
      )
      .then((response) => {
        setComments([...comments, response.data]);
      });
  };

  const handleOnChange = (event) => {
    setCommentBoyd({
      ...commentBody,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    axios
      .get(`https://react-yazi-yorum.herokuapp.com/posts/${id}`)
      .then((response) => {
        setDetailList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(`https://react-yazi-yorum.herokuapp.com/posts/${id}/comments`)
      .then((response) => {
        setComments(response.data);
      });
  }, []);

  return (
    <React.Fragment>
      <div className="list-group">
        <div className="list-group-item">
          <h5 className="mb-1">{detailList.title}</h5>
          <p className="mb-1">{detailList.created_at}</p>
          <p className="mb-1">{detailList.content}</p>
          <h3>Comments</h3>

          {comments.map((comment) => {
            return (
              <div className="card mb-1" key={comment.id}>
                <div className="card-body">
                  <h5 className="card-title">{comment.display_name}</h5>
                  <p className="card-text">{comment.body}</p>
                </div>
              </div>
            );
          })}

          <h3>Comment</h3>
          <form
            className="form-floating mb-3 "
            onSubmit={(e) => {
              e.preventDefault();
              handleCommentSubmit(commentBody);
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
        </div>
      </div>
    </React.Fragment>
  );
};

export default CommentDetail;

import React from "react";
import { Link } from "react-router-dom";
const CommentList = (props) => {
  // const post_id = props.match.params.id;
  console.log(props);

  return (
    <React.Fragment>
      <h3>Comments</h3>

      {props.comments.map((comment) => {
        // console.log(comment.id);
        return (
          <div className="card mb-1" key={comment.id}>
            <div className="card-body">
              <h5 className="card-title">{comment.display_name}</h5>
              <p className="card-text">{comment.body}</p>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default CommentList;

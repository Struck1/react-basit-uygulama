import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CommentList = (props) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get("https://react-yazi-yorum.herokuapp.com/posts")
      .then((response) => {
        setComments(response.data);
      });
  }, []);

  return (
    <div className="list-group">
      {comments.map((comment) => {
        return (
          <Link
            to={`/posts/${comment.id}`}
            className="list-group-item list-group-item-action "
            aria-current="true"
            key={comment.id}
          >
            <h5 className="mb-1">{comment.title}</h5>
            <small> {comment.created_at}</small>
          </Link>
        );
      })}
    </div>
  );
};

export default CommentList;

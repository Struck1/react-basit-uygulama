import axios from "axios";
import React, { useEffect, useState } from "react";

const CommentDetail = (props) => {
  const [detailList, setDetailList] = useState({});
  const { id } = props.match.params;

  useEffect(() => {
    axios
      .get(`https://react-yazi-yorum.herokuapp.com/posts/${id}`)
      .then((response) => {
        setDetailList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <React.Fragment>
      <div className="list-group">
        <div className="list-group-item">
          <h5 className="mb-1">{detailList.title}</h5>
          <p className="mb-1">{detailList.created_at}</p>
          <p className="mb-1">{detailList.content}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CommentDetail;

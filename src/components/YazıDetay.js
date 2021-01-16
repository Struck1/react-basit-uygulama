import { api } from "../api";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AllComment from "./AllComment";
import { Link } from "react-router-dom";
import SilModal from "./SilModal";

const YazıDetay = (props) => {
  const [detailList, setDetailList] = useState({});
  const { id } = props.match.params;
  const [comments, setComments] = useState([]);

  const handleCommentSubmit = (event, commentsBody) => {
    event.preventDefault();
    api()
      .post(`/posts/${id}/comments`, commentsBody)
      .then((response) => {
        setComments([...comments, response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .all([api().get(`/posts/${id}`), api().get(`/posts/${id}/comments`)])
      .then((responses) => {
        setDetailList(responses[0].data);
        setComments(responses[1].data);
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
          <Link
            type="button"
            className="btn btn-warning me-1"
            to={`${detailList.id}/edit`}
          >
            Düzenle
          </Link>
          <SilModal yazı={detailList} push={props.history.push} />

          <AllComment
            comments={comments}
            handleSubmit={handleCommentSubmit}
        
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default YazıDetay;

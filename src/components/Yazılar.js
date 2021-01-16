import React, { useEffect, useState } from "react";
import { api } from "../api"; //sadece export edildiği için {} kullanıldı
import { Link } from "react-router-dom";

const Yazılar = (props) => {
  const [yazılar, setYazılar] = useState([]);

  useEffect(() => {
    api()
      .get("/posts")
      .then((response) => {
        setYazılar(response.data);
      });
  }, []);

  return (
    <div className="list-group">
      {yazılar.map((yazı) => {
        return (
          <Link
            to={`/posts/${yazı.id}`}
            className="list-group-item list-group-item-action "
            aria-current="true"
            key={yazı.id}
          >
            <h5 className="mb-1">{yazı.title}</h5>
            <small> {yazı.created_at}</small>
          </Link>
        );
      })}
    </div>
  );
};

export default Yazılar;

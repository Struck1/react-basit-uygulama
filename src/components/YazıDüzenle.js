import React, { useEffect, useState } from "react";
import { api } from "../api";
import YazıFormu from "./YazıFormu";

const YazıDüzenle = (props) => {
  const { id } = props.match.params;

  const [yazi, setYazi] = useState({});

  useEffect(() => {
    api()
      .get(`posts/${id}`)
      .then((response) => {
        setYazi({ title: response.data.title, content: response.data.content });
      });
  }, []);

  return (
    <div>
      <h5 className="mb-2">Yazı Düzenle</h5>
      <YazıFormu yazı={yazi} />
    </div>
  );
};

export default YazıDüzenle;

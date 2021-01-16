import React from "react";
import { api } from "../api";

const SilModal = (props) => {
  const handleClick = (id) => {
    api()
      .delete(`/posts/${id}`)
      .then(() => {
        props.push("/");
      });
  };

  return (
    <React.Fragment>
      <button
        type="button"
        className="btn btn-danger modal-sm"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Sil
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Yazıyı Sil
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
             
             <b>{props.yazı.title}</b> Başlıklı Yazıyı Silmek İstediğinizden Emin Misiniz?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                İptal
              </button>
              <button
                type="button"
                data-bs-dismiss="modal"
                className="btn btn-danger"
                onClick={() => {
                  handleClick(props.yazı.id);
                }}
              >
                Sil
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SilModal;

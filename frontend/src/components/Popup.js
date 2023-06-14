import React, { useState } from "react";
import Chatbot from "../components/Chatbot";
import "../App.css";

export default function Popup() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Chatbot de asistencia</h2>
            <Chatbot />
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A ullam .</p>
    </>
  );
}
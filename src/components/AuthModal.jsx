import React from "react";
import Modal from "react-modal";
import Login from "./Login";
import Signup from "./Signup";

const AuthModal = ({ closeModal, isOpenModal, authMethod }) => {
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      overflow: "none",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "transparent",
      border: "none",
      padding: "0px",
    },
  };

  return (
    <>
      <Modal
        isOpen={isOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Login Modal"
      >
        <div className="middle-login">
          <div className="popup-content">
            <div className="side-img-popup">
              <img
                alt="Cricket Winner Login"
                src="https://cricketwinner.com/wp-content/themes/mercury/uploads/cw-logimn-ipl-2023-post.webp"
              />
            </div>
            <span className="close-btn">
              <img
                alt="Login Cross"
                width="20px"
                height="20px"
                onClick={closeModal}
                src="https://cricketwinner.com/wp-content/themes/mercury/uploads/login-cross.svg"
              />
            </span>
            <div className="modal">
              {authMethod === "login" ? (
                <Login closeModal={closeModal} />
              ) : (
                <Signup closeModal={closeModal} />
              )}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AuthModal;

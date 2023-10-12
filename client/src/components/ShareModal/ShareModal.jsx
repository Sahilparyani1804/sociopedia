import React from "react";
import PostShare from "../PostShare/PostShare";
import Modal from "react-bootstrap/Modal";
const ShareModal = ({ modalOpened, setModalOpened }) => {
  return (
    <Modal show={modalOpened} onHide={() => setModalOpened(false)}>
      <Modal.Header closeButton></Modal.Header>
      <PostShare />
    </Modal>
  );
};

export default ShareModal;

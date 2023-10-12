import React from "react";
import Modal from "react-bootstrap/Modal";
import FollowersCard from "../FollowersCard/FollowersCard";

const FollowersModal = ({ modalOpened, setModalOpened }) => {
  return (
    <Modal show={modalOpened} onHide={() => setModalOpened(false)}>
      <FollowersCard location="modal" />
    </Modal>
  );
};

export default FollowersModal;

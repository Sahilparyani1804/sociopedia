import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { uploadImage } from "../../actions/UploadAction";
import { updateUser } from "../../actions/UserAction";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/esm/Col";

const ProfileModal = ({ modalOpened, setModalOpened, data }) => {
  const { password, ...other } = data;
  const [formData, setFormData] = useState(other);
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const dispatch = useDispatch();
  const param = useParams();

  const { user } = useSelector((state) => state.authReducer.authData);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      event.target.name === "profileImage"
        ? setProfileImage(img)
        : setCoverImage(img);
    }
  };

  // form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    let UserData = formData;
    if (profileImage) {
      const data = new FormData();
      const fileName = Date.now() + profileImage.name;
      data.append("name", fileName);
      data.append("file", profileImage);
      UserData.profilePicture = fileName;
      try {
        dispatch(uploadImage(data));
      } catch (err) {
        console.log(err);
      }
    }
    if (coverImage) {
      const data = new FormData();
      const fileName = Date.now() + coverImage.name;
      data.append("name", fileName);
      data.append("file", coverImage);
      UserData.coverPicture = fileName;
      try {
        dispatch(uploadImage(data));
      } catch (err) {
        console.log(err);
      }
    }
    dispatch(updateUser(param.id, UserData));
    setModalOpened(false);
  };

  return (
    <Modal show={modalOpened} onHide={() => setModalOpened(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Your Info</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Col} md="4">
            <Form.Label>First name</Form.Label>
            <Form.Control
              type="text"
              value={formData.firstname}
              onChange={handleChange}
              placeholder="First name"
              name="firstname"
            />
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              type="text"
              onChange={handleChange}
              value={formData.lastname}
              placeholder="Last Name"
              name="lastname"
            />
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Works At</Form.Label>
            <Form.Control
              value={formData.worksAt}
              onChange={handleChange}
              type="text"
              placeholder="Works at"
              name="worksAt"
            />
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Lives In</Form.Label>
            <Form.Control
              value={formData.livesIn}
              onChange={handleChange}
              type="text"
              placeholder="Lives in"
              name="livesIn"
            />
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Country</Form.Label>
            <Form.Control
              value={formData.country}
              onChange={handleChange}
              type="text"
              placeholder="Country"
              name="country"
            />
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Relationship Status</Form.Label>
            <Form.Control
              value={formData.relationship}
              onChange={handleChange}
              type="text"
              placeholder="Relationship status"
              name="relationship"
            />
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Profile Image</Form.Label>
            <Form.Control
              onChange={onImageChange}
              name="profileImage"
              type="file"
            />
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Cover Image</Form.Label>
            <Form.Control
              onChange={onImageChange}
              name="coverImage"
              type="file"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProfileModal;

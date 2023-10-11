import React from "react";
import { Modal, useMantineTheme } from "@mantine/core";
const ProfileModal = ({ modalOpened, setModalOpened }) => {
  const theme = useMantineTheme();
  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className="infoForm">
        <h3>Your Info</h3>
        <div>
          <input
            type="text"
            className="infoInput"
            name="FirstName"
            placeholder="First Name"
          />
          <input
            type="text"
            className="infoInput"
            name="LastName"
            placeholder="Last Name"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="worksAT"
            placeholder="Works At"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="livesIn"
            placeholder="Lives In"
          />
          <input
            type="text"
            className="infoInput"
            name="Country"
            placeholder="Country"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            placeholder="RelatonShip Status"
          />
        </div>
        <div>
          Profile Image
          <input type="file" name="profileImg" />
          Cover Img
          <input type="file" name="coverImg" />
        </div>
        <button className="button infoButton">Update</button>
      </form>
    </Modal>
  );
};

export default ProfileModal;

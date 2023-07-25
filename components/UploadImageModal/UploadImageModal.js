import Modal from "react-modal";
import Button from "../Button/Button";
import { ButtonWrapper, Header, Note } from "./UploadImageModal.styled";

Modal.setAppElement("#__next");

export default function UploadImageModal({
  isOpen,
  onRequestClose,
  contentLabel,
  style,
  contact,
  onUpdateContact,
}) {
  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const response = await fetch("/api/images/upload", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const newImage = await response.json();

      const newContact = { ...contact, profilePicture: newImage };

      onUpdateContact(newContact);
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
      style={style}
    >
      <Header>Upload contact picture</Header>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" name="profilePicture" required />
        <Note>
          For best results please upload an image with a resolution of at least
          80 x 80 pixels.
        </Note>
        <Note>
          Square images (with an aspect ratio of 1:1) will be displayed as they
          are. All other images will be automatically cropped using face
          detection technology.
        </Note>
        <p></p>
        <ButtonWrapper>
          <Button type="button" onClick={onRequestClose}>
            Cancel
          </Button>
          <Button type="submit" buttonType="primary">
            Upload
          </Button>
        </ButtonWrapper>
      </form>
    </Modal>
  );
}

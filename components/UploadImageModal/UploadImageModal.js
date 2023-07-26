import Modal from "react-modal";
import Button from "../Button/Button";
import { ButtonWrapper, Header, Note } from "./UploadImageModal.styled";
import { useState } from "react";
import { materialSpinnerFrame4 } from "@/assets/Icons8";

Modal.setAppElement("#__next");

export default function UploadImageModal({
  isOpen,
  onRequestClose,
  contentLabel,
  style,
  contact,
  onUpdateContact,
}) {
  const [isFileChosen, setIsFileChosen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  function handleIsFileChosen(event) {
    const input = event.target.value;
    if (input) {
      setIsFileChosen(true);
    } else {
      setIsFileChosen(false);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsUploading(true);
    const formData = new FormData(event.target);

    try {
      const response = await fetch("/api/images/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const newImage = await response.json();
        const newContact = { ...contact, profilePicture: newImage };
        onUpdateContact(newContact);
        setIsUploading(false);
      }
    } catch (error) {
      setIsUploading(false);
      console.log(
        "Something went wrong while trying to fetch /api/images/upload"
      );
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
      style={style}
    >
      <Header>Upload image</Header>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          name="profilePicture"
          onChange={handleIsFileChosen}
          required
        />
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
          <Button
            type="submit"
            buttonType="primary"
            disabled={!isFileChosen || isUploading}
            icon={isUploading ? materialSpinnerFrame4 : null}
          >
            {isUploading ? "Uploading..." : "Upload"}
          </Button>
        </ButtonWrapper>
      </form>
    </Modal>
  );
}

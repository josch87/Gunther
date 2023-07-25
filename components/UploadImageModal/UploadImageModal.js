import Modal from "react-modal";
import styled from "styled-components";
import Button from "../Button/Button";

Modal.setAppElement("#__next");

export default function UploadImageModal({
  isOpen,
  onRequestClose,
  contentLabel,
  style,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
      style={style}
    >
      <Header>Upload contact picture</Header>
      {/* <button onClick={closeUploadModal}>close</button> */}
      <form>
        <input type="file" accept="image/*" name="contactProfile" required />
        <ButtonWrapper>
          <Button onClick={onRequestClose}>Cancel</Button>
          <Button buttonType="primary">Upload</Button>
        </ButtonWrapper>
      </form>
    </Modal>
  );
}

const Header = styled.h2`
  font-size: 1rem;
  margin-bottom: 15px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 15px;
`;

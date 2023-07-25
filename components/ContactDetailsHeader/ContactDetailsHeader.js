import { getFullName, getProfilePicture } from "@/utils/getContactDetails";
import {
  BirthdayContainer,
  DetailsContainer,
  NameHeader,
  ProfileImage,
  ProfileImagePlaceholder,
  StyledHeader,
} from "./ContactDetailsHeader.styled";
import {
  materialImage,
  materialBirthday,
  materialAddImage,
} from "@/assets/Icons8";
import Image from "next/image";
import { formatDate } from "@/utils/formatDates";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import UploadImageModal from "../UploadImageModal/UploadImageModal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ImageContainer = styled.div`
  position: relative;
`;

const ImageUpload = styled(Image)`
  position: absolute;
  top: -9px;
  right: -6px;
  cursor: pointer;
`;

export default function ContactDetailsHeader({ contact, isUpdate }) {
  const [isUploadImageModalOpen, setIsUploadImageModalOpen] = useState(false);

  function openUploadImageModal() {
    setIsUploadImageModalOpen(true);
  }

  function closeUploadImageModal() {
    setIsUploadImageModalOpen(false);
  }

  if (!contact) {
    return <p>Loading ContactDetailsHeader</p>;
  }

  return (
    <StyledHeader>
      <ImageContainer>
        {contact.profilePicture ? (
          <ProfileImage
            src={getProfilePicture(contact)}
            width={80}
            height={80}
            alt={`Profile picture of ${getFullName(contact)}`}
          />
        ) : (
          <ProfileImagePlaceholder
            src={materialImage}
            width={80}
            height={80}
            alt={`Placeholder for profile picture of ${getFullName(contact)}`}
            placeholder={true}
          />
        )}

        {isUpdate ? (
          <>
            <ImageUpload
              src={materialAddImage}
              height={20}
              width={20}
              alt="Add image"
              title="Upload an image"
              onClick={openUploadImageModal}
            />
            <UploadImageModal
              isOpen={isUploadImageModalOpen}
              onRequestClose={closeUploadImageModal}
              contentLabel="Contact picture upload modal"
              style={customStyles}
            />
          </>
        ) : null}
      </ImageContainer>

      <DetailsContainer>
        <NameHeader>{getFullName(contact)}</NameHeader>
        {contact.dateOfBirth ? (
          <BirthdayContainer>
            <Image
              src={materialBirthday}
              width={20}
              height={20}
              alt={"Birthday icon"}
            />
            <div> {formatDate(contact.dateOfBirth)}</div>
          </BirthdayContainer>
        ) : null}
      </DetailsContainer>
    </StyledHeader>
  );
}

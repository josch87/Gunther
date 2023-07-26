import { getFullName, getProfilePicture } from "@/utils/getContactDetails";
import {
  BirthdayContainer,
  DetailsContainer,
  ImageContainer,
  NameHeader,
  ProfileImage,
  ProfileImagePlaceholder,
  StyledHeader,
  UploadImageIcon,
} from "./ContactDetailsHeader.styled";
import {
  materialImage,
  materialBirthday,
  materialUpload,
} from "@/assets/Icons8";
import Image from "next/image";
import { formatDate } from "@/utils/formatDates";
import { useState } from "react";
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

export default function ContactDetailsHeader({
  contact,
  isUpdate,
  onUpdateContact,
}) {
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
            <UploadImageIcon
              src={materialUpload}
              height={24}
              width={24}
              alt="Add image"
              title="Upload an image"
              onClick={openUploadImageModal}
            />
            <UploadImageModal
              isOpen={isUploadImageModalOpen}
              onRequestClose={closeUploadImageModal}
              contentLabel="Contact picture upload modal"
              style={customStyles}
              contact={contact}
              onUpdateContact={onUpdateContact}
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

import { getFullName, getProfilePicture } from "@/utils/getContactDetails";
import {
  BirthdayContainer,
  DetailsContainer,
  NameContainer,
  ProfileImage,
  ProfileImagePlaceholder,
  StyledHeader,
} from "./ContactDetailsHeader.styled";
import { materialImage, materialBirthday } from "@/assets/Icons8";
import Image from "next/image";
import { formatDate } from "@/utils/formatDates";

export default function ContactDetailsHeader({ contact }) {
  if (!contact) {
    return <p>Loading ContactDetailsHeader</p>;
  }

  return (
    <StyledHeader>
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
      <DetailsContainer>
        <NameContainer>{getFullName(contact)}</NameContainer>
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

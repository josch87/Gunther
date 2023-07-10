import { getProfilePicture } from "@/hooks/getProfilePicture";
import { getFullName } from "@/hooks/getContactDetails";
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

export default function ContactDetailsHeader({ contact }) {
  function formatDateOfBirth(dateOfBirth) {
    const birthDate = new Date(dateOfBirth);
    const options = { day: "numeric", month: "long", year: "numeric" };
    const formattedDate = birthDate.toLocaleDateString("en-US", options);
    return formattedDate;
  }

  if (!contact) {
    return <>Loading</>;
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
            <div> {formatDateOfBirth(contact.dateOfBirth)}</div>
          </BirthdayContainer>
        ) : null}
      </DetailsContainer>
    </StyledHeader>
  );
}

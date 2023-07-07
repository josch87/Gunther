import { getProfilePicture } from "@/hooks/getProfilePicture";
import { getFullName } from "@/hooks/getNames";
import {
  BirthdayContainer,
  DetailsContainer,
  NameContainer,
  ProfileImage,
  ProfileImagePlaceholder,
  StyledHeader,
} from "./ContactDetailsHeader.styled";
import { materialImage } from "@/assets/Icons8";

export default function ContactDetailsHeader({ contact }) {
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
        <BirthdayContainer>test</BirthdayContainer>
      </DetailsContainer>
    </StyledHeader>
  );
}

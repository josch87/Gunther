import { getProfilePicture } from "@/hooks/getProfilePicture";
import {
  DetailsContainer,
  ListItem,
  NameContainer,
  ProfileImage,
  ProfileImagePlaceholder,
} from "./ContactListItem.styled";
import { materialImage } from "@/assets/Icons8";

export default function ContactListItem({ contact }) {
  function getFullName(contact) {
    const { firstName, middleName, lastName } = contact;

    let displayName = "";

    if (firstName) {
      displayName += firstName;
    }
    if (middleName) {
      displayName += " " + middleName;
    }
    if (lastName) {
      displayName += " " + lastName;
    }

    return displayName.trim();
  }

  return (
    <ListItem>
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
      </DetailsContainer>
    </ListItem>
  );
}

import { getProfilePicture } from "@/hooks/getProfilePicture";
import { getFullName } from "@/hooks/getNames";
import {
  DetailsContainer,
  ListItem,
  NameContainer,
  ProfileImage,
  ProfileImagePlaceholder,
} from "./ContactListItem.styled";
import { materialImage } from "@/assets/Icons8";

export default function ContactListItem({ contact }) {
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

import { getFullName, getProfilePicture } from "@/utils/getContactDetails";
import {
  DetailsContainer,
  ListItem,
  NameContainer,
  ProfileImage,
  ProfileImagePlaceholder,
  StyledLink,
} from "./ContactListItem.styled";
import { materialImage } from "@/assets/Icons8";

export default function ContactListItem({ contact }) {
  if (process.env.NODE_ENV !== "production") {
    console.warn(
      "DEPRECATED: ContactListItem is no longer recommended for use."
    );
  }

  console.log("NODE_EVN:", process.env.NODE_ENV);
  console.log("env:", process.env.NEXT_PUBLIC_ENVIRONMENT);

  return (
    <ListItem>
      {process.env.NODE_ENV}
      <br />
      {process.env.NEXT_PUBLIC_ENVIRONMENT}
      <StyledLink href={`/contacts/${contact.id}`} title="Show contact details">
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
          />
        )}
        <DetailsContainer>
          <NameContainer>{getFullName(contact)}</NameContainer>
        </DetailsContainer>
      </StyledLink>
    </ListItem>
  );
}

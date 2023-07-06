import profilePicture from "@/assets/profile-pictures/649e91836af01f9b18155053.jpg";
import {
  DetailsContainer,
  ItemContainer,
  NameContainer,
  ProfileImage,
} from "./ContactListItem.styled";

export default function ContactListItem() {
  return (
    <ItemContainer>
      <ProfileImage
        src={profilePicture}
        width={100}
        height={100}
        alt="Profile picture of"
      />
      <DetailsContainer>
        <NameContainer>Chandler Bing</NameContainer>
      </DetailsContainer>
    </ItemContainer>
  );
}

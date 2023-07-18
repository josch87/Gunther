import {
  getInteractionIcon,
  getInteractionIcon2,
} from "@/utils/getInteractionDetails";
import {
  DateContainer,
  DetailsContainer,
  InteractionIcon,
  ListItem,
  ParticipantsContainer,
  StyledLink,
} from "./InteractionListItem.styled";
import { formatDate } from "@/utils/formatDates";
import { getFullName, getShortName } from "@/utils/getContactDetails";

export default function InteractionListItem({ interaction, contacts }) {
  function getParticipantName(contactId, type) {
    const participant = contacts.find((contact) => contact.id === contactId);

    if (type === "short") {
      return getShortName(participant);
    }
    return getFullName(participant);
  }

  return (
    <ListItem>
      <StyledLink href="">
        <InteractionIcon
          src={getInteractionIcon(interaction)}
          width={80}
          height={80}
          alt={`Icon of ${interaction.type.toLowerCase()} interaction`}
        />
        <DetailsContainer>
          <ParticipantsContainer>
            {getParticipantName("1", "short")}
            Chandler B., Estelle L., Gunther
          </ParticipantsContainer>
          <DateContainer>{formatDate(interaction.date)}</DateContainer>
        </DetailsContainer>
      </StyledLink>
    </ListItem>
  );
}

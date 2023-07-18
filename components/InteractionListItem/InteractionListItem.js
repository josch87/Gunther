import { getInteractionIcon } from "@/utils/getInteractionDetails";
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
            {interaction.participants.map((participant, index) => {
              if (index < interaction.participants.length - 1) {
                return getParticipantName(participant, "short") + ", ";
              }
              return getParticipantName(participant, "short");
            })}
          </ParticipantsContainer>
          <DateContainer>{formatDate(interaction.date)}</DateContainer>
        </DetailsContainer>
      </StyledLink>
    </ListItem>
  );
}

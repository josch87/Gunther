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
import { getFullSortName, getShortName } from "@/utils/getContactDetails";

export default function InteractionListItem({ interaction, contacts }) {
  function getParticipant(contactId) {
    return contacts.find((contact) => contact.id === contactId);
  }

  const participants = interaction.participants.map((participant) => {
    return getParticipant(participant);
  });

  const sortedParticipants = participants.slice().sort((a, b) => {
    const nameA = getFullSortName(a);
    const nameB = getFullSortName(b);
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });

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
            {sortedParticipants.map((participant, index) => {
              if (index < sortedParticipants.length - 1) {
                return getShortName(participant) + ", ";
              }
              return getShortName(participant);
            })}
          </ParticipantsContainer>
          <DateContainer>{formatDate(interaction.date)}</DateContainer>
        </DetailsContainer>
      </StyledLink>
    </ListItem>
  );
}

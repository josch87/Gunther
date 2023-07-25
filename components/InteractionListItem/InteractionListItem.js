import {
  getInteractionIcon,
  getParticipant,
} from "@/utils/getInteractionDetails";
import {
  DateContainer,
  DetailsContainer,
  ListItem,
  ParticipantsContainer,
  StyledLink,
} from "./InteractionListItem.styled";
import { formatDate } from "@/utils/formatDates";
import { getFullSortName, getShortName } from "@/utils/getContactDetails";
import Image from "next/image";
import { useMemo } from "react";

export default function InteractionListItem({ interaction, contacts }) {
  const participants = interaction.participants.map((participant) =>
    getParticipant(contacts, participant)
  );

  const sortedActiveParticipants = participants
    .filter(
      (participant) =>
        participant.dateDeleted === null || participant.dateDeleted === ""
    )
    .slice()
    .sort((a, b) => {
      const nameA = getFullSortName(a);
      const nameB = getFullSortName(b);
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });

  const interactionIcon = useMemo(
    () => getInteractionIcon(interaction),
    [interaction]
  );
  const formattedInteractionDate = formatDate(interaction.dateOfInteraction);

  return (
    <ListItem>
      <StyledLink
        href={`/interactions/${interaction.id}`}
        title="Show interaction details"
      >
        <Image
          src={interactionIcon}
          width={60}
          height={60}
          alt={`Icon of ${interaction.type.toLowerCase()} interaction`}
        />
        <DetailsContainer>
          <ParticipantsContainer>
            {sortedActiveParticipants
              .map((participant) => getShortName(participant))
              .join(", ")}
          </ParticipantsContainer>
          <DateContainer>{formattedInteractionDate}</DateContainer>
        </DetailsContainer>
      </StyledLink>
    </ListItem>
  );
}

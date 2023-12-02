import {
  getInteractionIcon,
  getParticipant,
} from "@/utils/getInteractionDetails";
import {
  StyledDateContainer,
  StyledDetailsContainer,
  StyledListItem,
  StyledParticipantsContainer,
  StyledLink,
} from "./InteractionListItem.styled";
import { getFormattedDateTime } from "@/utils/dateTime";
import {
  getFullSortName,
  getShortName,
  getSortedActiveParticipantsShortList,
} from "@/utils/getContactDetails";
import Image from "next/image";
import { useMemo } from "react";

export default function InteractionListItem({ interaction, contacts }) {
  const participants = interaction.participants.map((participantId) =>
    getParticipant(contacts, participantId)
  );

  const sortedActiveParticipantsShortList =
    getSortedActiveParticipantsShortList(participants);

  const interactionIcon = useMemo(
    () => getInteractionIcon(interaction),
    [interaction]
  );
  const formattedInteractionDate = getFormattedDateTime({
    dateToFormat: interaction.dateOfInteraction,
  });

  return (
    <StyledListItem>
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
        <StyledDetailsContainer>
          <StyledParticipantsContainer>
            {sortedActiveParticipantsShortList}
          </StyledParticipantsContainer>
          <StyledDateContainer>{formattedInteractionDate}</StyledDateContainer>
        </StyledDetailsContainer>
      </StyledLink>
    </StyledListItem>
  );
}

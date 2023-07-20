import { materialNotes, materialPeople } from "@/assets/Icons8";
import InteractionDetailsItem from "../InteractionDetailsItem/InteractionDetailsItem";
import { Heading, ParticipantLink } from "./InteractionDetailsSection.styled";
import { getParticipant } from "@/utils/getInteractionDetails";
import { getFullName, getFullSortName } from "@/utils/getContactDetails";
import React from "react";

export default function InteractionDetailsSection({ interaction, contacts }) {
  if (!interaction) {
    return <p>Loading ContactDetailsSection</p>;
  }

  const participants = interaction.participants.map((participant) =>
    getParticipant(contacts, participant)
  );

  const sortedParticipants = participants.slice().sort((a, b) => {
    const nameA = getFullSortName(a);
    const nameB = getFullSortName(b);
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });

  const participantsWithLinks = sortedParticipants.map(
    (sortedParticipant, index) => (
      <React.Fragment key={sortedParticipant.id}>
        <ParticipantLink
          href={`/${sortedParticipant.id}`}
          title="Show contact details"
        >
          {getFullName(sortedParticipant)}
        </ParticipantLink>
        {index < sortedParticipants.length - 1 && ", "}
      </React.Fragment>
    )
  );

  return (
    <>
      <Heading>Interaction Details</Heading>

      <ul>
        <InteractionDetailsItem
          icon={materialPeople}
          iconAlt="Participants"
          value={participantsWithLinks}
        />
      </ul>
      <ul>
        <InteractionDetailsItem
          icon={materialNotes}
          iconAlt="Notes"
          value={interaction.notes}
        />
      </ul>
    </>
  );
}

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

  const participantsWithLinks = sortedActiveParticipants.map(
    (sortedParticipant) => (
      <ParticipantLink
        key={sortedParticipant.id}
        href={`/contacts/${sortedParticipant.id}`}
        title="Show contact details"
      >
        {getFullName(sortedParticipant)}
      </ParticipantLink>
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

        {interaction.notes && (
          <InteractionDetailsItem
            icon={materialNotes}
            iconAlt="Notes"
            value={interaction.notes.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          />
        )}
      </ul>
    </>
  );
}

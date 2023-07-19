import { materialNotes, materialPeople } from "@/assets/Icons8";
import InteractionDetailsItem from "../InteractionDetailsItem/InteractionDetailsItem";
import { Heading } from "./InteractionDetailsSection.styled";
import { getParticipant } from "@/utils/getInteractionDetails";
import { getFullName, getFullSortName } from "@/utils/getContactDetails";
import Link from "next/link";

export default function InteractionDetailsSection({ interaction, contacts }) {
  const participants = interaction.participants.map((participant) => {
    return getParticipant(contacts, participant);
  });

  const sortedParticipants = participants.slice().sort((a, b) => {
    const nameA = getFullSortName(a);
    const nameB = getFullSortName(b);
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });

  //   const sortedAndLinkedParticipants = sortedParticipants.map((participant) => (
  //     <Link key={participant.id} href={`/${participant.id}`}>
  //       {getFullName(participant)}
  //     </Link>
  //   ));

  let participantsLinks;
  sortedParticipants.forEach((participant) => {
    return <Link href={`/1`}>Aljoscha Zöller</Link>;
  });

  const sortedAndLinkedParticipants = (
    <>
      <Link href={`/1`}>Aljoscha Zöller</Link>,{" "}
      <Link href={`/1`}>Aljoscha</Link>, <Link href={`/1`}>Aljoscha</Link>
    </>
  );

  console.log(sortedAndLinkedParticipants);

  return (
    <>
      {interaction ? (
        <>
          <Heading>Interaction Details</Heading>

          <ul>
            <InteractionDetailsItem
              icon={materialPeople}
              iconAlt="Participants"
              value={participantsLinks}
              //   value={"Alfred Jodokus Quak, Benjamin Blümchen, Käptn Blaubär"}
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
      ) : (
        <div>Loading ContactDetailsSection</div>
      )}
    </>
  );
}

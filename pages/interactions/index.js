import Heading from "@/components/Heading/Heading";
import InteractionList from "@/components/InteractionList/InteractionList";

export default function InteractionsPage({ interactions, contacts }) {
  const activeInteractions = interactions.filter(
    (interaction) =>
      interaction.dateDeleted === null || interaction.dateDeleted === ""
  );

  const interactionsSortedByDate = activeInteractions.slice().sort((a, b) => {
    if (a.dateOfInteraction < b.dateOfInteraction) {
      return 1;
    }
    if (a.dateOfInteraction > b.dateOfInteraction) {
      return -1;
    }
    return 0;
  });

  return (
    <div>
      <Heading level={1}>Interactions</Heading>
      <InteractionList
        interactions={interactionsSortedByDate}
        contacts={contacts}
      />
    </div>
  );
}

import CreateDataInvitation from "@/components/CreateDataInvitation/CreateDataInvitation";
import Heading from "@/components/Heading/Heading";
import InteractionList from "@/components/InteractionList/InteractionList";
import DefaultHead from "@/components/Layout/DefaultHead/DefaultHead";

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
    <>
      <DefaultHead pageTitle="Interactions" />
      <Heading level={1}>Interactions</Heading>
      {interactionsSortedByDate.length === 0 ? (
        <CreateDataInvitation
          entity="interaction"
          createEntity={"/interactions/new"}
        />
      ) : (
        <InteractionList
          interactions={interactionsSortedByDate}
          contacts={contacts}
        />
      )}
    </>
  );
}

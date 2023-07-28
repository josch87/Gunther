import CreateDataInvitation from "@/components/CreateDataInvitation/CreateDataInvitation";
import Heading from "@/components/Heading/Heading";
import InteractionList from "@/components/InteractionList/InteractionList";
import DefaultHead from "@/components/Layout/DefaultHead/DefaultHead";

export default function InteractionsPage({
  interactions,
  contacts,
  onImportDemoInteractions,
}) {
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

  const activeContacts = contacts.filter(
    (contact) => contact.dateDeleted === null || contact.dateDeleted === ""
  );
  const hasActiveContacts = activeContacts.length === 0 ? false : true;

  return (
    <>
      <DefaultHead pageTitle="Interactions" />
      <Heading level={1}>Interactions</Heading>
      {interactionsSortedByDate.length === 0 ? (
        <CreateDataInvitation
          hasActiveContacts={hasActiveContacts}
          entity="interaction"
          createEntity={"/interactions/new"}
          onImport={onImportDemoInteractions}
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

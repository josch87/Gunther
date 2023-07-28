import CreateDataInvitation from "@/components/CreateDataInvitation/CreateDataInvitation";
import InteractionForm from "@/components/Forms/InteractionForm/InteractionForm";
import DefaultHead from "@/components/Layout/DefaultHead/DefaultHead";
import { emptyInteraction } from "@/data/SampleData";

export default function CreateNewInteractionPage({
  contacts,
  onAddNewInteraction,
}) {
  const activeContacts = contacts.filter(
    (participant) =>
      participant.dateDeleted === null || participant.dateDeleted === ""
  );

  return (
    <>
      <DefaultHead pageTitle="New Interaction" />
      {activeContacts.length === 0 ? (
        <CreateDataInvitation
          hideParagraph
          hasActiveContacts={false}
          entity="interaction"
          createEntity={"/interactions/new"}
        />
      ) : (
        <InteractionForm
          interaction={emptyInteraction}
          contacts={contacts}
          onSubmitForm={onAddNewInteraction}
        />
      )}
    </>
  );
}

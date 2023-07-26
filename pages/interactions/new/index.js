import InteractionForm from "@/components/Forms/InteractionForm/InteractionForm";
import DefaultHead from "@/components/Layout/Head/Head";
import { emptyInteraction } from "@/data/SampleData";

export default function CreateNewInteractionPage({
  contacts,
  onAddNewInteraction,
}) {
  return (
    <>
      <DefaultHead pageTitle="New Interaction" />
      <InteractionForm
        interaction={emptyInteraction}
        contacts={contacts}
        onSubmitForm={onAddNewInteraction}
      />
    </>
  );
}

import InteractionForm from "@/components/Forms/InteractionForm/InteractionForm";
import { emptyInteraction } from "@/data/SampleData";

export default function CreateNewInteractionPage({
  contacts,
  onAddNewInteraction,
}) {
  return (
    <InteractionForm
      interaction={emptyInteraction}
      contacts={contacts}
      onSubmitForm={onAddNewInteraction}
    />
  );
}

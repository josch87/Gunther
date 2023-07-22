import InteractionForm from "@/components/Forms/InteractionForm/InteractionForm";
import { emptyInteraction } from "@/data/SampleData";

export default function CreateNewInteractionPage({ contacts }) {
  return <InteractionForm interaction={emptyInteraction} contacts={contacts} />;
}

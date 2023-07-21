import InteractionForm from "@/components/Forms/InteractionForm/InteractionForm";
import { emptyInteraction } from "@/data/SampleData";

export default function CreateNewInteractionPage() {
  return <InteractionForm interaction={emptyInteraction} />;
}

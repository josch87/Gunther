import InteractionForm from "@/components/Forms/InteractionForm/InteractionForm";
import { useRouter } from "next/router";

export default function EditInteractionPage({ interactions, contacts }) {
  const router = useRouter();
  const { id } = router.query;

  const interaction = interactions.find((interaction) => interaction.id === id);
  console.log(interaction);

  if (id === undefined) {
    return <p>Loading interaction details...</p>;
  }

  if (interaction === undefined) {
    return <p>Interaction with the ID &apos;{id}&apos; not found</p>;
  }

  return (
    <InteractionForm interaction={interaction} contacts={contacts} isUpdate />
  );
}

import InteractionForm from "@/components/Forms/InteractionForm/InteractionForm";
import DefaultHead from "@/components/Layout/DefaultHead/DefaultHead";
import { formatDate } from "@/utils/dateTime";
import { useRouter } from "next/router";

export default function EditInteractionPage({
  interactions,
  contacts,
  onUpdateInteraction,
}) {
  const router = useRouter();
  const { id } = router.query;

  const interaction = interactions.find(
    (interaction) =>
      interaction.id === id &&
      (interaction.dateDeleted === null || interaction.dateDeleted === "")
  );

  if (id === undefined) {
    return <p>Loading interaction details...</p>;
  }

  if (interaction === undefined) {
    return <p>Interaction with the ID &apos;{id}&apos; not found</p>;
  }

  return (
    <>
      <DefaultHead
        pageTitle={`Edit Interaction Details of a ${interaction.type.toLowerCase()} from ${formatDate(
          { dateToFormat: interaction.dateOfInteraction }
        )}`}
      />
      <InteractionForm
        interaction={interaction}
        contacts={contacts}
        onSubmitForm={onUpdateInteraction}
        isUpdate
      />
    </>
  );
}

import BackLink from "@/components/BackLink/BackLink";
import InteractionDetailsHeader from "@/components/InteractionDetailsHeader/InteractionDetailsHeader";
import InteractionDetailsSection from "@/components/InteractionDetailsSection/InteractionDetailsSection";
import Scopebox from "@/components/Scopebox/Scopebox";
import { useRouter } from "next/router";

export default function InteractionDetailsPage({ interactions, contacts }) {
  const router = useRouter();
  const { id } = router.query;

  const interaction = interactions.find((interaction) => interaction.id === id);

  if (id === undefined) {
    return <div>Loading interaction details...</div>;
  }

  if (interaction === undefined) {
    return <div>Interaction with the ID &apos;{id}&apos; not found</div>;
  }

  return (
    <>
      <BackLink href="/interactions">← All Interactions</BackLink>

      <Scopebox>
        <InteractionDetailsHeader interaction={interaction} />
        <InteractionDetailsSection
          interaction={interaction}
          contacts={contacts}
        />
      </Scopebox>
    </>
  );
}

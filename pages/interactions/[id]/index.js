import BackLink from "@/components/BackLink/BackLink";
import InteractionDetailsHeader from "@/components/InteractionDetailsHeader/InteractionDetailsHeader";
import Scopebox from "@/components/Scopebox/Scopebox";
import { useRouter } from "next/router";

export default function InteractionDetailsPage({ interactions }) {
  const router = useRouter();
  const { id } = router.query;

  const interaction = interactions.find((interaction) => interaction.id === id);

  if (id === undefined) {
    return <p>Loading interaction details...</p>;
  }

  if (interaction === undefined) {
    return <p>Interaction with the ID &apos;{id}&apos; not found</p>;
  }

  return (
    <>
      <BackLink href="/interactions">← All Interactions</BackLink>

      <Scopebox>
        <InteractionDetailsHeader interaction={interaction} />
      </Scopebox>
    </>
  );
}

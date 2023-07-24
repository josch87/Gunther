import { materialEdit } from "@/assets/Icons8";
import BackLink from "@/components/BackLink/BackLink";
import InteractionDetailsHeader from "@/components/InteractionDetailsHeader/InteractionDetailsHeader";
import InteractionDetailsSection from "@/components/InteractionDetailsSection/InteractionDetailsSection";
import Scopebox from "@/components/Scopebox/Scopebox";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const StyledLink = styled(Link)`
  position: absolute;
  top: -13px;
  right: 13px;
`;

export default function InteractionDetailsPage({ interactions, contacts }) {
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
        <StyledLink href={`/interactions/${id}/edit`} title="Edit contact">
          <Image src={materialEdit} alt="Edit contact" height={25} width={25} />
        </StyledLink>
        <InteractionDetailsHeader interaction={interaction} />
        <InteractionDetailsSection
          interaction={interaction}
          contacts={contacts}
        />
      </Scopebox>
    </>
  );
}

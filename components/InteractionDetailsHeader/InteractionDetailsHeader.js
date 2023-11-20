import Image from "next/image";
import {
  DateContainer,
  DetailsContainer,
  InteractionTypeHeader,
  StyledHeader,
} from "./InteractionDetailsHeader.styled";
import { getInteractionIcon } from "@/utils/getInteractionDetails";
import { formatDate } from "@/utils/dateTime";
import { useMemo } from "react";

export default function InteractionDetailsHeader({ interaction }) {
  const interactionIcon = useMemo(
    () => getInteractionIcon(interaction),
    [interaction]
  );

  if (!interaction) {
    return <p>Loading InteractionDetailsHeader</p>;
  }

  const formattedInteractionDate = formatDate(interaction.dateOfInteraction);

  return (
    <StyledHeader>
      <Image
        src={interactionIcon}
        width={60}
        height={60}
        alt={`Icon of ${interaction.type.toLowerCase()} interaction`}
      />
      <DetailsContainer>
        <InteractionTypeHeader>{interaction.type}</InteractionTypeHeader>
        <DateContainer>
          {interaction.dateOfInteraction && formattedInteractionDate}
        </DateContainer>
      </DetailsContainer>
    </StyledHeader>
  );
}

import Image from "next/image";
import {
  DateContainer,
  DetailsContainer,
  InteractionTypeHeader,
  StyledHeader,
} from "./InteractionDetailsHeader.styled";
import { getInteractionIcon } from "@/utils/getInteractionDetails";
import { formatDate } from "@/utils/formatDates";

export default function InteractionDetailsHeader({ interaction }) {
  if (!interaction) {
    return <p>Loading InteractionDetailsHeader</p>;
  }

  return (
    <StyledHeader>
      <Image
        src={getInteractionIcon(interaction)}
        width={60}
        height={60}
        alt={`Icon of ${interaction.type.toLowerCase()} interaction`}
      />
      <DetailsContainer>
        <InteractionTypeHeader>{interaction.type}</InteractionTypeHeader>
        <DateContainer>{formatDate(interaction.date)}</DateContainer>
      </DetailsContainer>
    </StyledHeader>
  );
}

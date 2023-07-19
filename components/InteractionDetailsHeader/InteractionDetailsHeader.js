import Image from "next/image";
import {
  DateContainer,
  DetailsContainer,
  InteractionTypeContainer,
  StyledHeader,
} from "./InteractionDetailsHeader.styled";
import { getInteractionIcon } from "@/utils/getInteractionDetails";
import { formatDate } from "@/utils/formatDates";

export default function InteractionDetailsHeader({ interaction }) {
  if (!interaction) {
    return <>Loading InteractionDetailsHeader</>;
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
        <InteractionTypeContainer>{interaction.type}</InteractionTypeContainer>
        <DateContainer>{formatDate(interaction.date)}</DateContainer>
      </DetailsContainer>
    </StyledHeader>
  );
}

import {
  getInteractionIcon,
  getInteractionIcon2,
} from "@/utils/getInteractionDetails";
import {
  DetailsContainer,
  InteractionIcon,
  ListItem,
  StyledLink,
} from "./InteractionListItem.styled";
import { formatDate } from "@/utils/formatDates";

export default function InteractionListItem({ interaction }) {
  return (
    <ListItem>
      <StyledLink href="">
        <InteractionIcon
          src={getInteractionIcon(interaction)}
          width={80}
          height={80}
          alt={`Icon of ${interaction.type.toLowerCase()} interaction`}
        />
        <DetailsContainer>{formatDate(interaction.date)}</DetailsContainer>
      </StyledLink>
    </ListItem>
  );
}

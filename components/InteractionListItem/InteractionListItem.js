import {
  getInteractionIcon,
  getInteractionIcon2,
} from "@/utils/getInteractionDetails";
import {
  InteractionIcon,
  ListItem,
  StyledLink,
} from "./InteractionListItem.styled";

export default function InteractionListItem({ interaction }) {
  return (
    <ListItem>
      <StyledLink href="#">
        <InteractionIcon
          src={getInteractionIcon(interaction)}
          width={80}
          height={80}
          alt="Interaction"
        />

        {interaction.date}
      </StyledLink>
    </ListItem>
  );
}

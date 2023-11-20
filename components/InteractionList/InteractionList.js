import InteractionListItem from "../InteractionListItem/InteractionListItem";
import { StyledUnorderedList } from "./InteractionList.styled";

export default function InteractionList({ interactions, contacts }) {
  return (
    <StyledUnorderedList>
      {interactions.map((interaction) => {
        return (
          <InteractionListItem
            key={interaction.id}
            interaction={interaction}
            contacts={contacts}
          />
        );
      })}
    </StyledUnorderedList>
  );
}

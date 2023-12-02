import InteractionListItem from "@/components/InteractionListItem/InteractionListItem";
import Scopebox from "@/components/Scopebox/Scopebox";
import { StyledUnorderedList } from "./UpcomingWidget.styled";

export default function UpcomingWidget({ interactions, contacts }) {
  return (
    <Scopebox heading="Upcoming">
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
    </Scopebox>
  );
}

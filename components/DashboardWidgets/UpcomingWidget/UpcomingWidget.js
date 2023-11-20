import InteractionListItem from "@/components/InteractionListItem/InteractionListItem";
import Scopebox from "@/components/Scopebox/Scopebox";
import { StyledUnorderedList } from "./UpcomingWidget.styled";

export default function UpcomingWidget({ interactions, contacts }) {
  const activeInteractions = interactions.filter(
    (interaction) =>
      interaction.dateDeleted === null || interaction.dateDeleted === ""
  );

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const sortedFutureInteractions = activeInteractions
    .filter((activeInteraction) => {
      const interactionDate = new Date(activeInteraction.dateOfInteraction);
      return interactionDate >= today;
    })
    .sort((a, b) => {
      if (a.dateOfInteraction < b.dateOfInteraction) {
        return -1;
      }
      if (a.dateOfInteraction > b.dateOfInteraction) {
        return 1;
      }

      return 0;
    });

  const futureInteractionsToBeDisplayed = sortedFutureInteractions.slice(0, 3);

  console.log(futureInteractionsToBeDisplayed);

  return (
    <Scopebox heading="Upcoming">
      <StyledUnorderedList>
        {futureInteractionsToBeDisplayed.map((interaction) => {
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

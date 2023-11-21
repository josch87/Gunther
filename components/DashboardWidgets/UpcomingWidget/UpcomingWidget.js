import InteractionListItem from "@/components/InteractionListItem/InteractionListItem";
import Scopebox from "@/components/Scopebox/Scopebox";
import { StyledUnorderedList } from "./UpcomingWidget.styled";
import { getSortedActiveFutureInteractions } from "@/utils/getInteractionDetails";

export default function UpcomingWidget({ interactions, contacts }) {
  const futureInteractionsToBeDisplayed = getSortedActiveFutureInteractions(
    interactions,
    3
  );

  return (
    <>
      {futureInteractionsToBeDisplayed.length === 0 ? null : (
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
      )}
    </>
  );
}

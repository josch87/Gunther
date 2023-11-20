import Heading from "@/components/Heading/Heading";
import DefaultHead from "@/components/Layout/DefaultHead/DefaultHead";
import Scopebox from "@/components/Scopebox/Scopebox";

export default function Dashboard({ interactions }) {
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
    .toSorted((a, b) => {
      if (a.dateOfInteraction < b.dateOfInteraction) {
        return -1;
      }
      if (a.dateOfInteraction > b.dateOfInteraction) {
        return 1;
      }

      return 0;
    });

  const futureInteractionsToBeDisplayed = sortedFutureInteractions.slice(0, 3);

  return (
    <>
      <DefaultHead pageTitle="Dashboard" />
      <Heading level={1}>Dashboard</Heading>

      <Scopebox heading="Upcoming">Test</Scopebox>
    </>
  );
}

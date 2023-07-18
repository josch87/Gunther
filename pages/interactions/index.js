import Heading from "@/components/Heading/Heading";
import InteractionList from "@/components/InteractionList/InteractionList";

export default function InteractionsPage({ interactions }) {
  const interactionsSortedByDate = interactions.slice().sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    }
    if (a.date > b.date) {
      return -1;
    }
    return 0;
  });

  return (
    <div>
      <Heading level={1}>Interactions</Heading>
      <InteractionList interactions={interactionsSortedByDate} />
    </div>
  );
}

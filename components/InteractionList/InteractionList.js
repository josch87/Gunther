import InteractionListItem from "../InteractionListItem/InteractionListItem";

export default function InteractionList({ interactions, contacts }) {
  return (
    <ul>
      {interactions.map((interaction) => {
        return (
          <InteractionListItem
            key={interaction.id}
            interaction={interaction}
            contacts={contacts}
          />
        );
      })}
    </ul>
  );
}

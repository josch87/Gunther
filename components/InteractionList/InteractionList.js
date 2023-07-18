import { Fragment } from "react";
import InteractionListItem from "../InteractionListItem/InteractionListItem";

export default function InteractionList({ interactions, contacts }) {
  return (
    <ul>
      {interactions.map((interaction) => {
        return (
          <Fragment key={interaction.id}>
            <InteractionListItem
              interaction={interaction}
              contacts={contacts}
            />
          </Fragment>
        );
      })}
    </ul>
  );
}

import { Fragment } from "react";
import InteractionListItem from "../InteractionListItem/InteractionListItem";

export default function InteractionList({ interactions }) {
  return (
    <ul>
      {interactions.map((interaction) => {
        return (
          <Fragment key={interaction.id}>
            <InteractionListItem interaction={interaction} />
          </Fragment>
        );
      })}
    </ul>
  );
}

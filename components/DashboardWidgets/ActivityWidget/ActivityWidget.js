import ActivityListItem from "@/components/ActivityListItem/ActivityListItem";
import Scopebox from "@/components/Scopebox/Scopebox";
import { StyledUnorderedList } from "./ActivityWidget.styled";

export default function ActivityWidget({ activities, contacts, interactions }) {
  return (
    <Scopebox heading="Activities">
      <StyledUnorderedList>
        {activities.map((activity) => {
          const contact = contacts.find(
            (contact) =>
              contact.id === activity.newData.id &&
              activity.entity === "Contact"
          );
          const interaction = interactions.find(
            (interaction) =>
              interaction.id === activity.newData.id &&
              activity.entity === "Interaction"
          );

          return (
            <ActivityListItem
              key={activity.id}
              activity={activity}
              contact={contact}
              interaction={interaction}
            />
          );
        })}
      </StyledUnorderedList>
    </Scopebox>
  );
}

import ActivityListItem from "@/components/ActivityListItem/ActivityListItem";
import Scopebox from "@/components/Scopebox/Scopebox";

export default function ActivityWidget({ activities, contacts }) {
  return (
    <Scopebox heading="Activities">
      {activities.map((activity) => {
        const contact = contacts.find(
          (contact) => contact.id === activity.newData.id
        );

        return (
          <ActivityListItem
            key={activity.id}
            activity={activity}
            contact={contact}
          />
        );
      })}
    </Scopebox>
  );
}

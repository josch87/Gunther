import ActivityListItem from "@/components/ActivityListItem/ActivityListItem";
import Scopebox from "@/components/Scopebox/Scopebox";

export default function ActivityWidget({ activities }) {
  return (
    <Scopebox heading="Activities">
      {activities.map((activity) => {
        return <ActivityListItem key={activity.id} activity={activity} />;
      })}
    </Scopebox>
  );
}

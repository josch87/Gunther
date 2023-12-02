import Scopebox from "@/components/Scopebox/Scopebox";

export default function ActivityWidget({ activities }) {
  return (
    <Scopebox heading="Activities">
      {activities.map((activity) => {
        return <p>{activity.date}</p>;
      })}
    </Scopebox>
  );
}

import { baseActivityOperations } from "@/data/BaseData";

export function getActivityOperationIcon({ operation }) {
  let icon = "";
  baseActivityOperations.forEach((baseActivityOperation) => {
    if (operation === baseActivityOperation.operation) {
      icon = baseActivityOperation.icon;
    }
  });
  return icon;
}

export function getSortedActivities(activities, count) {
  if (!activities) return [];

  const sortedActivities = activities.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    }
    if (a.date > b.date) {
      return -1;
    }

    return 0;
  });

  const sortedActivitiesToBeReturned = sortedActivities.slice(0, count);

  return sortedActivitiesToBeReturned;
}

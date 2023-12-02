import { baseActivityOperations } from "@/data/BaseData";
import { getFullName } from "./getContactDetails";

export function getActivityOperationIcon({ operation }) {
  let icon = "";
  baseActivityOperations.forEach((baseActivityOperation) => {
    if (operation === baseActivityOperation.operation) {
      icon = baseActivityOperation.icon;
    }
  });
  return icon;
}

export function getActivityOperationDisplayName({ operation }) {
  let displayName = "";
  baseActivityOperations.forEach((baseActivityOperation) => {
    if (operation === baseActivityOperation.operation) {
      displayName = baseActivityOperation.displayName;
    }
  });
  return displayName;
}

export function getActivityEntityTitle({ operation, entity, newData }) {
  let title = "test";

  if (operation === "ImportSampleData") {
    title = `${newData.length}`;
    if (entity === "Interaction") {
      title += " interactions";
    } else if (entity === "Contact") {
      title += " contacts";
    }
    return title;
  }

  if (entity === "Contact") {
    const contactId = newData.id;
    title = getFullName(newData);
  }

  if (entity === "Interaction") {
    title = `${newData.type}`;
  }

  return title;
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

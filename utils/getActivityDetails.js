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

export function getActivityEntityTitle(activity, contact, interaction) {
  let title = "";

  if (activity.operation === "ImportSampleData") {
    title = `${activity.newData.length}`;
    if (activity.entity === "Interaction") {
      title += " interactions";
    } else if (activity.entity === "Contact") {
      title += " contacts";
    }
    return title;
  }

  if (
    activity.entity === "Contact" &&
    (contact.dateDeleted === null || contact.dateDeleted === "")
  ) {
    title = getFullName(contact);
  } else if (activity.entity === "Contact") {
    title = "A deleted contact";
  }

  if (
    activity.entity === "Interaction" &&
    (interaction.dateDeleted === null || interaction.dateDeleted === "")
  ) {
    title = `${interaction.type}`;
  } else if (activity.entity === "Interaction") {
    title = "A deleted interaction";
  }

  return title;
}

export function getSortedActivities(activities, count) {
  if (!activities) return [];

  const sortedActivities = activities.sort((a, b) => {
    if (a.dateCreated < b.dateCreated) {
      return 1;
    }
    if (a.dateCreated > b.dateCreated) {
      return -1;
    }

    return 0;
  });

  const sortedActivitiesToBeReturned = sortedActivities.slice(0, count);

  return sortedActivitiesToBeReturned;
}

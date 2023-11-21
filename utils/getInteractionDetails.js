import { materialMeeting } from "@/assets/Icons8";
import { baseInteractionTypes } from "@/data/BaseData";

export function getInteractionIcon({ type }) {
  let icon = materialMeeting;
  baseInteractionTypes.forEach((baseInteractionType) => {
    if (type === baseInteractionType.type) {
      icon = baseInteractionType.icon;
    }
  });
  return icon;
}

export function getParticipant(contacts, contactId) {
  return contacts.find((contact) => contact.id === contactId);
}

export function getActiveInteractions(interactions) {
  const activeInteractions = interactions.filter(
    (interaction) =>
      interaction.dateDeleted === null || interaction.dateDeleted === ""
  );

  return activeInteractions;
}

export function getSortedActiveFutureInteractions(interactions, count) {
  const activeInteractions = getActiveInteractions(interactions);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const sortedFutureInteractions = activeInteractions
    .filter((activeInteraction) => {
      const interactionDate = new Date(activeInteraction.dateOfInteraction);
      return interactionDate >= today;
    })
    .sort((a, b) => {
      if (a.dateOfInteraction < b.dateOfInteraction) {
        return -1;
      }
      if (a.dateOfInteraction > b.dateOfInteraction) {
        return 1;
      }

      return 0;
    });

  const futureInteractionsToBeDisplayed = sortedFutureInteractions.slice(
    0,
    count
  );

  return futureInteractionsToBeDisplayed;
}

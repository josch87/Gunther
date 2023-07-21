import { materialEngage } from "@/assets/Icons8";
import { baseInteractionTypes } from "@/data/BaseData";

export function getInteractionIcon({ type }) {
  let icon = materialEngage;
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

import {
  materialCall,
  materialEngage,
  materialParty,
  materialVideoConference,
} from "@/assets/Icons8";
import { baseInteractionTypes } from "@/data/BaseData";

export function getInteractionIcon({ type }) {
  let icon = materialEngage;
  baseInteractionTypes.map((interactionType) => {
    if (type === interactionType.type) {
      icon = interactionType.icon;
    }
  });
  return icon;
}

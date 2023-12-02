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

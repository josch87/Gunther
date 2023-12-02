import Image from "next/image";
import {
  StyledDateContainer,
  StyledDetailsContainer,
  StyledListItem,
  StyledParticipantsContainer,
} from "./ActivityListItem.styled";
import { useMemo } from "react";
import {
  getActivityOperationDisplayName,
  getActivityOperationIcon,
} from "@/utils/getActivityDetails";
import { getFormattedDateTime } from "@/utils/dateTime";

export default function ActivityListItem({ activity }) {
  const operationIcon = useMemo(
    () => getActivityOperationIcon(activity),
    [activity]
  );

  const operationDisplayName = useMemo(
    () => getActivityOperationDisplayName(activity),
    [activity]
  );

  const entityDisplayName = activity.entity.toLowerCase();

  const formattedActivityDate = getFormattedDateTime({
    dateToFormat: activity.date,
    type: "datetime",
  });

  return (
    <StyledListItem>
      <Image
        src={operationIcon}
        width={60}
        height={60}
        alt={`Icon of ${activity.operation.toLowerCase()} operation`}
      />
      <StyledDetailsContainer>
        <StyledParticipantsContainer>
          {/* {sortedActiveParticipants
              .map((participant) => getShortName(participant))
              .join(", ")} */}
        </StyledParticipantsContainer>
        <StyledDateContainer>{`${operationDisplayName} ${entityDisplayName} on ${formattedActivityDate}`}</StyledDateContainer>
      </StyledDetailsContainer>
    </StyledListItem>
  );
}

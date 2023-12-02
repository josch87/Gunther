import Image from "next/image";
import {
  StyledDateContainer,
  StyledDetailsContainer,
  StyledListItem,
  StyledParticipantsContainer,
} from "./ActivityListItem.styled";
import { useMemo } from "react";
import { getActivityOperationIcon } from "@/utils/getActivityDetails";
import { formatDate } from "@/utils/dateTime";

export default function ActivityListItem({ activity }) {
  const operationIcon = useMemo(
    () => getActivityOperationIcon(activity),
    [activity]
  );

  const formattedActivityDate = formatDate(activity.date);

  console.log(operationIcon);
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
        <StyledDateContainer>{formattedActivityDate}</StyledDateContainer>
      </StyledDetailsContainer>
    </StyledListItem>
  );
}

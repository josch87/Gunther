import Image from "next/image";
import {
  StyledDateContainer,
  StyledDetailsContainer,
  StyledListItem,
  StyledParticipantsContainer,
} from "./ActivityListItem.styled";
import { useMemo } from "react";
import {
  getActivityEntityTitle,
  getActivityOperationDisplayName,
  getActivityOperationIcon,
} from "@/utils/getActivityDetails";
import { getElapsedTimeSince } from "@/utils/dateTime";

export default function ActivityListItem({ activity }) {
  const operationIcon = useMemo(
    () => getActivityOperationIcon(activity),
    [activity]
  );

  const operationDisplayName = useMemo(
    () => getActivityOperationDisplayName(activity),
    [activity]
  );

  const entityTitle = getActivityEntityTitle(activity);

  function getActivityDetails(activity) {
    let detailsToReturn = "";
    const activityDate = new Date(activity.dateCreated);

    const entityDisplayName = activity.entity.toLowerCase();

    if (activity.operation === "ImportSampleData") {
      detailsToReturn = `${operationDisplayName}`;
    }

    if (activity.operation != "ImportSampleData") {
      detailsToReturn = `${operationDisplayName} ${entityDisplayName}`;
    }

    const elapsedTimeSince = getElapsedTimeSince(activityDate);
    detailsToReturn += ` ${elapsedTimeSince}`;

    return detailsToReturn;
  }

  return (
    <StyledListItem>
      <Image
        src={operationIcon}
        width={60}
        height={60}
        alt={`Icon of ${activity.operation.toLowerCase()} operation`}
      />
      <StyledDetailsContainer>
        <StyledParticipantsContainer>{entityTitle}</StyledParticipantsContainer>
        <StyledDateContainer>
          {getActivityDetails(activity)}
        </StyledDateContainer>
      </StyledDetailsContainer>
    </StyledListItem>
  );
}

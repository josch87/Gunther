import Image from "next/image";
import {
  StyledActivityDetailsContainer,
  StyledDetailsContainer,
  StyledListItem,
  StyledEntityTitleContainer,
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

  //TODO: get the current title of the activity (instead of newData title)
  const entityTitle = getActivityEntityTitle(activity);

  //TODO: display dateTime of activity on hover
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
        <StyledEntityTitleContainer>{entityTitle}</StyledEntityTitleContainer>
        <StyledActivityDetailsContainer>
          {getActivityDetails(activity)}
        </StyledActivityDetailsContainer>
      </StyledDetailsContainer>
    </StyledListItem>
  );
}

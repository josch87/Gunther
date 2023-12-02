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
    dateToFormat: activity.dateCreated,
    type: "datetime",
  });

  const entityTitle = getActivityEntityTitle(activity);

  function getDetails(activity) {
    let detailsToReturn = "";

    if (activity.operation === "ImportSampleData") {
      detailsToReturn = `${operationDisplayName}`;
    }

    if (activity.operation != "ImportSampleData") {
      detailsToReturn = `${operationDisplayName} ${entityDisplayName}`;
    }

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
        <StyledDateContainer>{`${getDetails(
          activity
        )} on ${formattedActivityDate}`}</StyledDateContainer>
      </StyledDetailsContainer>
    </StyledListItem>
  );
}

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

  const entityTitle = getActivityEntityTitle(activity);

  function getActivityDetails(activity) {
    let detailsToReturn = "";
    const formattedActivityDate = getFormattedDateTime({
      dateToFormat: activity.dateCreated,
      type: "datetime",
    });

    const entityDisplayName = activity.entity.toLowerCase();

    if (activity.operation === "ImportSampleData") {
      detailsToReturn = `${operationDisplayName}`;
    }

    if (activity.operation != "ImportSampleData") {
      detailsToReturn = `${operationDisplayName} ${entityDisplayName}`;
    }

    detailsToReturn += ` on ${formattedActivityDate}`;

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

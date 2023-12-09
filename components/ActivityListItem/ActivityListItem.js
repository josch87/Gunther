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
import { getElapsedTimeSince, getFormattedDateTime } from "@/utils/dateTime";

export default function ActivityListItem({ activity, contact, interaction }) {
  const operationIcon = useMemo(
    () => getActivityOperationIcon(activity),
    [activity]
  );

  const operationDisplayName = useMemo(
    () => getActivityOperationDisplayName(activity),
    [activity]
  );

  const entityTitle = getActivityEntityTitle(activity, contact, interaction);

  let activityDetails = "";
  const activityDate = new Date(activity.dateCreated);

  const entityDisplayName = activity.entity.toLowerCase();

  if (activity.operation === "ImportSampleData") {
    activityDetails = `${operationDisplayName}`;
  }

  if (activity.operation != "ImportSampleData") {
    activityDetails = `${operationDisplayName} ${entityDisplayName}`;
  }

  const elapsedTimeSince = getElapsedTimeSince(activityDate);

  let activityDateTime;
  const formattedActivityDateTime = getFormattedDateTime({
    dateToFormat: activityDate,
    type: "datetime",
  });
  const formattedActivityDate = getFormattedDateTime({
    dateToFormat: activityDate,
    type: "date",
  });

  if (elapsedTimeSince === activityDate) {
    activityDateTime = (
      <>
        on{" "}
        <span title={formattedActivityDateTime}>{formattedActivityDate}</span>
      </>
    );
  } else {
    activityDateTime = (
      <span title={formattedActivityDateTime}>{elapsedTimeSince}</span>
    );
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
          {activityDetails} {activityDateTime}
        </StyledActivityDetailsContainer>
      </StyledDetailsContainer>
    </StyledListItem>
  );
}

import UpcomingWidget from "@/components/DashboardWidgets/UpcomingWidget/UpcomingWidget";
import Heading from "@/components/Heading/Heading";
import DefaultHead from "@/components/Layout/DefaultHead/DefaultHead";
import { getSortedActiveFutureInteractions } from "@/utils/getInteractionDetails";
import Link from "next/link";
import { StyledParagraph } from "./Dashboard.styled";

export default function Dashboard({ interactions, contacts }) {
  const futureInteractionsToBeDisplayed = getSortedActiveFutureInteractions(
    interactions,
    3
  );

  return (
    <>
      <DefaultHead pageTitle="Dashboard" />
      <Heading level={1}>Dashboard</Heading>
      {futureInteractionsToBeDisplayed.length === 0 ? (
        <>
          <StyledParagraph>
            Start by adding some <Link href="/contacts">contacts</Link> and{" "}
            <Link href="/interactions">interactions</Link>.
          </StyledParagraph>
        </>
      ) : null}
      <UpcomingWidget interactions={interactions} contacts={contacts} />
    </>
  );
}

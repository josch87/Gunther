import UpcomingWidget from "@/components/DashboardWidgets/UpcomingWidget/UpcomingWidget";
import Heading from "@/components/Heading/Heading";
import DefaultHead from "@/components/Layout/DefaultHead/DefaultHead";
import { getSortedActiveFutureInteractions } from "@/utils/getInteractionDetails";
import Link from "next/link";
import styled from "styled-components";

const StyledParagraph = styled.p`
  line-height: 1.5rem;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const StyledLink = styled(Link)`
  color: var(--primary-text-color);
  text-decoration-color: var(--primary-color);
  text-underline-offset: 2px;

  &:active {
    background-color: var(--primary-color);
  }
`;

export default function Dashboard({ interactions, contacts }) {
  const futureInteractionsToBeDisplayed = getSortedActiveFutureInteractions(
    interactions,
    3
  );

  return (
    <>
      <DefaultHead pageTitle="Dashboard" />
      <FlexContainer>
        <section>
          <Heading level={1}>Dashboard</Heading>
          <StyledParagraph>
            Welcome to Gunther - your Personal Relationship Management app.
            Manage your <StyledLink href="/contacts">contacts</StyledLink> and
            social <StyledLink href="/interactions">interactions</StyledLink>{" "}
            and cultivate a fulfilling network!
          </StyledParagraph>
        </section>
        {futureInteractionsToBeDisplayed.length > 0 ? (
          <section>
            <UpcomingWidget
              interactions={futureInteractionsToBeDisplayed}
              contacts={contacts}
            />
          </section>
        ) : null}
      </FlexContainer>
    </>
  );
}

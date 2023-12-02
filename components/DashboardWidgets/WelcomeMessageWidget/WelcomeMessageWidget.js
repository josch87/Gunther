import { StyledLink, StyledParagraph } from "./WelcomeMessageWidget.styled";

export default function WelcomeMessageWidget() {
  return (
    <StyledParagraph>
      Welcome to Gunther - your Personal Relationship Management app. Manage
      your <StyledLink href="/contacts">contacts</StyledLink> and social{" "}
      <StyledLink href="/interactions">interactions</StyledLink> and cultivate a
      fulfilling network!
    </StyledParagraph>
  );
}

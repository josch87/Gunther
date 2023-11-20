import { StyledHeading, StyledScopebox } from "./Scopebox.styled";

export default function Scopebox({ children, heading }) {
  return (
    <>
      {heading ? <StyledHeading>{heading}</StyledHeading> : null}
      <StyledScopebox>{children}</StyledScopebox>
    </>
  );
}

import { StyledLink } from "./BackLink.styled";

export default function BackLink({ href, children }) {
  return <StyledLink href={href}>{children}</StyledLink>;
}

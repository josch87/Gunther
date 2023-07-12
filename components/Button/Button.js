import { StyledButton, StyledPrimaryButton } from "./Button.styled";

export default function Button({ children, type }) {
  return <StyledButton type={type}>{children}</StyledButton>;
}

export function PrimaryButton({ children, type }) {
  return <StyledPrimaryButton type={type}>{children}</StyledPrimaryButton>;
}

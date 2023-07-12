import { StyledButton, StyledPrimaryButton } from "./Button.styled";

export default function Button({ children, type, onClick }) {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

export function PrimaryButton({ children, type, onClick }) {
  return (
    <StyledPrimaryButton type={type} onClick={onClick}>
      {children}
    </StyledPrimaryButton>
  );
}

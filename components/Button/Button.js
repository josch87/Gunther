import { StyledButton, StyledPrimaryButton } from "./Button.styled";

export default function Button({
  children,
  type,
  onClick,
  buttonType,
  disabled,
}) {
  if (buttonType === "primary") {
    return (
      <StyledPrimaryButton type={type} onClick={onClick} disabled={disabled}>
        {children}
      </StyledPrimaryButton>
    );
  }

  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

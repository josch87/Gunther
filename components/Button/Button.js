import { StyledButton, StyledPrimaryButton } from "./Button.styled";

export default function Button({ children, type, onClick, buttonType }) {
  if (buttonType === "primary") {
    return (
      <StyledPrimaryButton type={type} onClick={onClick}>
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

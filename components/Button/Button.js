import Image from "next/image";
import {
  StyledButton,
  StyledDangerButton,
  StyledPrimaryButton,
} from "./Button.styled";

export default function Button({
  children,
  type,
  onClick,
  buttonType,
  disabled,
  icon,
}) {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      disabled={disabled}
      $buttonType={buttonType}
    >
      {icon ? <Image src={icon} width={20} height={20} alt="Icon" /> : null}
      {children}
    </StyledButton>
  );
}

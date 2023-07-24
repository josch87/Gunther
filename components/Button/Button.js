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
  if (buttonType === "primary") {
    return (
      <StyledPrimaryButton type={type} onClick={onClick} disabled={disabled}>
        {icon ? <Image src={icon} width={20} height={20} alt="Icon" /> : null}
        {children}
      </StyledPrimaryButton>
    );
  }

  if (buttonType === "danger") {
    return (
      <StyledDangerButton type={type} onClick={onClick} disabled={disabled}>
        {icon ? <Image src={icon} width={20} height={20} alt="Icon" /> : null}
        {children}
      </StyledDangerButton>
    );
  }

  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

import Image from "next/image";
import { StyledButton } from "./Button.styled";

export default function Button({
  href,
  children,
  type,
  onClick,
  buttonType,
  disabled,
  icon,
}) {
  return (
    <StyledButton
      href={href}
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

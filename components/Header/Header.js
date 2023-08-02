import { LogoLink, StyledHeader, StyledLogo } from "./Header.styled";
import ActionMenu from "../ActionMenu/ActionMenu";
import Image from "next/image";

export default function Header() {
  return (
    <StyledHeader>
      <LogoLink href="/">
        <StyledLogo
          src="/gunther_logo_transparent_1500.png"
          width={1500}
          height={255}
          priority={true}
          alt="Gunther Logo"
        />
      </LogoLink>
      <ActionMenu />
    </StyledHeader>
  );
}

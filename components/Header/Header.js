import Logo from "@/assets/gunther_logo_transparent_1500.png";
import { LogoLink, StyledHeader, StyledLogo } from "./Header.styled";
import Link from "next/link";

export default function Header() {
  return (
    <StyledHeader>
      <LogoLink href="/">
        <StyledLogo
          src={Logo}
          width={1500}
          height={255}
          priority={true}
          alt="Gunther Logo"
        />
      </LogoLink>
    </StyledHeader>
  );
}

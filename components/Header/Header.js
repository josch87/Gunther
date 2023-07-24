import { LogoLink, StyledHeader, StyledLogo } from "./Header.styled";
import Image from "next/image";
import { materialPlus } from "@/assets/Icons8";
import Link from "next/link";
import ActionMenu from "../ActionMenu/ActionMenu";

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

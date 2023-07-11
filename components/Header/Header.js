import Logo from "@/assets/gunther_logo_transparent_1500.png";
import { StyledHeader, StyledLogo, StyledLogoContainer } from "./Header.styled";
import Link from "next/link";

export default function Header() {
  return (
    <StyledHeader>
      <StyledLogoContainer>
        <Link href="/">
          <StyledLogo src={Logo} width={1500} height={255} alt="Gunther Logo" />
        </Link>
      </StyledLogoContainer>
    </StyledHeader>
  );
}

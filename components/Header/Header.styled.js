import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0px;
  background-color: white;
  width: 100%;
  height: var(--app-header-height);
  border-bottom: 1px solid black;
`;

export const LogoLink = styled(Link)`
  display: flex;
  justify-content: center;
`;

export const StyledLogo = styled(Image)`
  height: auto;
  width: 60%;
  max-height: calc(var(--app-header-height) + 30px);
`;

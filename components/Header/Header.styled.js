import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 2;
  top: 0px;
  background: var(--app-header-background);
  width: 100%;
  height: var(--app-header-height);
  border-radius: 0 0 var(--app-side-padding) var(--app-side-padding);
  box-shadow: 0 0 15px #d3d3d3;
  padding: 0 var(--app-side-padding);
`;

export const LogoLink = styled(Link)`
  display: flex;
  justify-content: center;
`;

export const StyledLogo = styled(Image)`
  height: auto;
  width: 80%;
  max-height: calc(var(--app-header-height) + 30px);
`;

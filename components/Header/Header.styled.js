import Image from "next/image";
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

export const StyledLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  /* text-align: center; */
`;

export const StyledLogo = styled(Image)`
  height: auto;
  width: 60%;
`;

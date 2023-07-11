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
  margin-bottom: 20px;
`;

export const StyledLogoContainer = styled.div`
  width: 60%;
`;

export const StyledLogo = styled(Image)`
  height: 60%;
  width: 60%;
`;

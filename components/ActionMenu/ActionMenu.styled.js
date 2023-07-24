import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const StyledActionMenu = styled.div`
  position: relative;
`;

export const StyledImage = styled(Image)`
  cursor: pointer;
`;

export const Dropdown = styled.ul`
  position: absolute;
  padding: 5px;
  right: 0;
  width: 180px;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 5px;
  box-shadow: 0 0 20px lightgrey;
`;

export const DropdownItem = styled.li`
  list-style: none;
`;

export const StyledLink = styled(Link)`
  display: block;
  width: 100%;
  color: var(--primary-text-color);
  text-decoration: none;
  border-radius: 5px;

  &:hover {
    background-color: color-mix(
      in srgb,
      var(--mobile-navigation-background-color) 90%,
      grey
    );
  }
`;

export const StyledSpan = styled.span`
  display: flex;
  gap: 5px;
  padding: 5px;
`;

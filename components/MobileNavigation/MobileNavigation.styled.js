import Link from "next/link";
import styled from "styled-components";

export const StyledNavigation = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: var(--mobile-navigation-height);
  background-color: #000000;
  border-top: 2px solid #000000;
`;

export const UnorderedList = styled.ul`
  display: flex;
  gap: 2px;
  height: 100%;
`;

export const ListItem = styled.li`
  list-style: none;
  width: 100%;

  background-color: ${({ $active }) =>
    $active
      ? "var(--mobile-navigation-background-color-active)"
      : "var(--mobile-navigation-background-color)"};

  &:hover {
    background-color: ${({ $active }) =>
      $active
        ? "color-mix(in srgb, var(--mobile-navigation-background-color-active) 90%, #808080);"
        : "color-mix(in srgb, var(--mobile-navigation-background-color) 90%, #808080);"};
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

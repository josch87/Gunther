import Link from "next/link";
import styled from "styled-components";

export const StyledNavigation = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: var(--mobile-navigation-height);
  background-color: black;
  border: 2px solid black;
`;

export const UnorderedList = styled.ul`
  display: flex;
  gap: 2px;
  height: 100%;
`;

export const ListItem = styled.li`
  list-style: none;
  width: 100%;
  background-color: white;

  background-color: ${({ $active }) =>
    $active
      ? "var(--mobile-navigation-background-color-active)"
      : "var(--mobile-navigation-background-color)"};

  &:hover {
    background-color: ${({ $active }) =>
      $active
        ? "color-mix(in srgb, var(--mobile-navigation-background-color-active) 90%, grey);"
        : "color-mix(in srgb, var(--mobile-navigation-background-color) 90%, grey);"};
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

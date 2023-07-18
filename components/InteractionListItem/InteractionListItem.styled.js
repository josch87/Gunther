import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const ListItem = styled.li`
  margin-bottom: 10px;
  list-style: none;
`;

export const StyledLink = styled(Link)`
  display: flex;
  color: var(--primary-text-color);
  text-decoration: none;
`;

export const InteractionIcon = styled(Image)`
  border: 1px solid black;
  border-radius: 10px;
`;

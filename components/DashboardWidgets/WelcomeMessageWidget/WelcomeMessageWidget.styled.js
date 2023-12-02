import Link from "next/link";
import styled from "styled-components";

export const StyledParagraph = styled.p`
  line-height: 1.5rem;
`;

export const StyledLink = styled(Link)`
  color: var(--primary-text-color);
  text-decoration-color: var(--primary-color);
  text-underline-offset: 2px;

  &:active {
    background-color: var(--primary-color);
  }
`;

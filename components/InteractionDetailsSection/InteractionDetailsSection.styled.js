import Link from "next/link";
import styled from "styled-components";

export const Heading = styled.h2`
  font-size: 1rem;
  margin: 1.5rem 0 1rem 0;
`;

export const ParticipantLink = styled(Link)`
  color: var(--primary-text-color);
  text-decoration: none;
  background-color: var(--link-background-color);
  padding: 2px 8px;
  border-radius: 10px;
  display: inline-block;
`;

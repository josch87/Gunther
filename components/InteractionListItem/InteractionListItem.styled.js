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
  align-items: center;
`;

export const InteractionIcon = styled(Image)`
  /* border: 1px solid black; */
  border-radius: 10px;
`;

export const DetailsContainer = styled.div`
  width: 100%;
  margin: 10px;
`;

export const ParticipantsContainer = styled.h2`
  font-size: 1rem;
  line-height: 1.2rem;
`;

export const DateContainer = styled.div`
  margin-top: 5px;
  font-size: 0.8rem;
`;
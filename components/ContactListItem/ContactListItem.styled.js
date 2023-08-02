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

export const ProfileImage = styled(Image)`
  border: 1px solid #000000;
  border-radius: 10px;
`;

export const ProfileImagePlaceholder = styled(ProfileImage)`
  border: 1px solid var(--image-placeholder-border-color);
`;

export const DetailsContainer = styled.div`
  width: 100%;
  margin: 10px;
`;

export const NameContainer = styled.h2`
  font-size: 1.3rem;
  font-weight: 400;
`;

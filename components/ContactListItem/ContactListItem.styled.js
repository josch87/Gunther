import Image from "next/image";
import styled from "styled-components";

export const ListItem = styled.li`
  display: flex;
  margin-bottom: 10px;
  list-style: none;
`;

export const ProfileImage = styled(Image)`
  border: 1px solid black;
  border-radius: 10px;
`;

export const ProfileImagePlaceholder = styled(ProfileImage)`
  border: 1px solid #b2b2b2;
`;

export const DetailsContainer = styled.div`
  width: 100%;
  margin: 10px;
`;

export const NameContainer = styled.h2`
  font-size: 1.3rem;
`;

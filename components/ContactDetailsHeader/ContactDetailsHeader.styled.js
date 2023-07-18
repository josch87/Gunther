import Image from "next/image";
import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
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

export const NameContainer = styled.h1`
  font-size: 1.3rem;
`;

export const BirthdayContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 10px;
`;

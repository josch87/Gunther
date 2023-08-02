import Image from "next/image";
import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
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

export const NameHeader = styled.h1`
  font-size: 1.2rem;
`;

export const BirthdayContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 10px;
`;

export const ImageContainer = styled.div`
  position: relative;
`;

export const UploadImageIcon = styled(Image)`
  position: absolute;
  top: -9px;
  right: -6px;
  cursor: pointer;
  background-color: var(--background-color);
  border: 1px solid #d3d3d3;
  border-radius: 50%;
  padding: 2px;
`;

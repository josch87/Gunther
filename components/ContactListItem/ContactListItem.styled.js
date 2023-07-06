import Image from "next/image";
import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
`;

export const ProfileImage = styled(Image)`
  border: 1px solid black;
  border-radius: 10px;
`;

export const DetailsContainer = styled.div`
  margin: 10px;
`;

export const NameContainer = styled.div`
  font-size: 1.5rem;
`;

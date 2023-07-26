import styled from "styled-components";

export const Header = styled.h2`
  font-size: 1rem;
  margin-bottom: 30px;
`;

export const FileInput = styled.input`
  &::file-selector-button {
    background-color: white;
    border: 1px solid grey;
    border-radius: 5px;
    padding: 8px 28px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 30px;
`;

export const Note = styled.p`
  font-size: 0.8rem;
  margin: 15px 0;
`;

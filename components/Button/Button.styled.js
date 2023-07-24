import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 8px 28px;
  background-color: white;
  border: 1px solid grey;
  border-radius: 5px;
  cursor: pointer;
`;

export const StyledPrimaryButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 8px 28px;
  background-color: var(--primary-color);
  border: 1px solid var(--primary-color);
  color: white;
  border-radius: 5px;
  cursor: pointer;

  &:disabled {
    background-color: color-mix(in srgb, var(--primary-color) 40%, white);
    border-color: color-mix(in srgb, var(--primary-color) 40%, white);
    cursor: default;
  }
`;

export const StyledDangerButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 8px 28px;
  background-color: red;
  border: 1px solid red;
  color: white;
  border-radius: 5px;
  cursor: pointer;

  &:disabled {
    background-color: color-mix(in srgb, red 40%, white);
    border-color: color-mix(in srgb, red 40%, white);
    cursor: default;
  }
`;

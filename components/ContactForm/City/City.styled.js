import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 6px;
`;

export const ColumnOne = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  width: 70%;
`;
export const ColumnTwo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  width: 100%;
`;

export const StyledLabel = styled.label`
  font-size: 0.8rem;
  margin-bottom: 2px;
`;

export const StyledInput = styled.input`
  padding: 4px 8px;
  border: 1px solid var(--primary-text-color);
  border-radius: 5px;
`;

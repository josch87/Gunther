import styled from "styled-components";

export const Heading = styled.h2`
  font-size: 1rem;
  margin: 1.5rem 0 1rem 0;
`;

export const StickyContainer = styled.div`
  position: sticky;
  z-index: 1;
  top: var(--app-header-height);
  background-color: #ffffff;
  padding: 10px 0;
`;

export const StyledFieldset = styled.fieldset`
  border: none;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  padding: 10px 10px 0 10px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  resize: none;
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid var(--primary-text-color);
  border-radius: 5px;
`;

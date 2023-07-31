import styled from "styled-components";

export const Heading = styled.h2`
  font-size: 1.3rem;
  margin: 1rem 0 1rem 0;
`;

export const StickyContainer = styled.div`
  position: sticky;
  z-index: 1;
  top: var(--app-header-height);
  background-color: var(--background-color);
  padding: 10px 0;
`;

export const StyledFieldset = styled.fieldset`
  border: 1px solid var(--scopebox-border-color);
  margin-bottom: 20px;
  background-color: #ffffff;
  padding: 10px 10px 0 10px;
`;

export const StyledLegend = styled.legend`
  font-weight: bold;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  resize: none;
  margin-bottom: 15px;
`;

import styled from "styled-components";

export const StyledDetailsItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 10px;
`;

export const DataContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 20px;
`;

export const ExternalLink = styled.a`
  color: inherit;
  text-decoration: none;

  color: var(--primary-text-color);
  background-color: var(--link-background-color);
  padding: 2px 8px;
  border-radius: 10px;
`;

export const DataType = styled.div`
  font-size: 0.8em;
  color: #808080;
`;

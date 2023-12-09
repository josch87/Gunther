import styled from "styled-components";

export const StyledListItem = styled.li`
  list-style: none;
  display: flex;
  color: var(--primary-text-color);
  text-decoration: none;
  align-items: center;
`;

export const StyledDetailsContainer = styled.div`
  width: 100%;
  margin: 10px;
`;

export const StyledEntityTitleContainer = styled.h2`
  font-size: 1rem;
  line-height: 1.2rem;
  font-weight: 400;
`;

export const StyledDateContainer = styled.div`
  margin-top: 5px;
  font-size: 0.8rem;
`;

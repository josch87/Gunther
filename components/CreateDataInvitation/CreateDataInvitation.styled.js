import styled from "styled-components";

export const Note = styled.p`
  font-size: 0.7rem;
  margin-top: 10px;
`;

export const StyledParagraph = styled.p`
  margin-bottom: 15px;
  line-height: 1.5rem;

  ${({ $warning }) =>
    $warning &&
    `
    display: flex;
    gap: 10px;
    color: var(--warning-color);
    background-color: #f2f2f2;
    border: 1px solid #d3d3d3;
    border-radius: 5px;
    padding: 10px;
    `}
`;

export const Import = styled.span`
  text-decoration: underline;
  cursor: pointer;
`;

import Link from "next/link";
import styled from "styled-components";

export const StyledButton = styled(({ href, buttonType, ...props }) => {
  if (href) {
    return <Link href={href} {...props} />;
  }
  return <button {...props} />;
})`
  padding: 8px 28px;
  border-radius: 5px;
  cursor: pointer;

  ${({ href }) =>
    href &&
    `
    display: inline-block;
    text-decoration: none;
  `}
  ${({ href }) =>
    !href &&
    `
    display: flex;
    align-items: center;
    gap: 5px;
    font: inherit;
  `}
  
  ${({ $buttonType }) => {
    if ($buttonType === "primary") {
      return `
        background-color: var(--primary-color);
        border: 1px solid var(--primary-color);
        color: #ffffff;

        &:disabled {
          background-color: color-mix(in srgb, var(--primary-color) 40%, #ffffff);
          border-color: color-mix(in srgb, var(--primary-color) 40%, #ffffff);
          cursor: default;
        }
      `;
    } else if ($buttonType === "danger") {
      return `
        background-color: var(--danger-color);
        border: 1px solid var(--danger-color);
        color: #ffffff;

        &:disabled {
          background-color: color-mix(in srgb, var(--danger-color) 40%, #ffffff);
          border-color: color-mix(in srgb, var(--danger-color) 40%, #ffffff);
          cursor: default;
        }
      `;
    } else {
      return `
        background-color: #ffffff;
        border: 1px solid #808080;
      `;
    }
  }};
`;

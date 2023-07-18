import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root {
  --primary-color: #4dabf7;
  --primary-text-color: #4b4b4b;
  --app-header-height: 60px;
  --app-side-padding: 20px;
  --mobile-navigation-height: 50px;
  --mobile-navigation-background-color: #ffffff;
  --mobile-navigation-background-color-active: #99e9f2;

}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    font-family: system-ui;
    color: var(--primary-text-color);
  }
`;

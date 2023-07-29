import { createGlobalStyle } from "styled-components";

export const themeColor = "#c2c2f8";

export default createGlobalStyle`

:root {
  --primary-color: #c2c2f8;
  --danger-color: #ff0000;
  --warning-color: #f39d02;
  --primary-text-color: #4b4b4b;
  --app-header-background: linear-gradient(157deg, #c2c2f8 0%, #bfb4db 60%, #b99ac7 100%);
  --app-header-height: 60px;
  --app-side-padding: 20px;
  --mobile-navigation-height: 50px;
  --mobile-navigation-background-color: #fff;
  --mobile-navigation-background-color-active: #c2c2f8;

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

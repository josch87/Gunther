import { createGlobalStyle } from "styled-components";
import { Open_Sans } from "@next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });

export const themeColor = "#f8ffff";

export default createGlobalStyle`

:root {
  --primary-color: #7cf1f1;
  --danger-color: #e74c3c;
  --warning-color: #f39d02;
  --primary-text-color: #4b4b4b;
  --background-color: #f8ffff;
  --scopebox-border-color: #b2b2b2;
  --image-placeholder-border-color: #b2b2b2;
  --app-header-background-color: var(--background-color);
  --app-header-height: 60px;
  --app-side-padding: 20px;
  --mobile-navigation-height: 50px;
  --mobile-navigation-background-color: var(--background-color);
  --mobile-navigation-background-color-active: var(--primary-color);
  --link-background-color: color-mix(in srgb, var(--primary-color) 40%, white); 
  --toastify-color-success: var(--primary-color);
  --toastify-color-light: var(--background-color)
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
    background-color: var(--background-color);
    font-family: ${openSans.style.fontFamily}; 
  }

  ::selection {
    background-color: var(--primary-color);
  }

  input, textarea {
    background-color: hsl(0, 0%, 100%);
    border-color: hsl(0, 0%, 80%);
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    font: inherit;
    color: #333333;
    padding: 7px 10px;
    outline-color: #2684e1;
  }


`;

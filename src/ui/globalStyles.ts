import { createGlobalStyle } from "styled-components";
import { darkTheme, lightTheme, resetCSS } from ".";

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
${resetCSS};
html[theme=dark] {
  ${darkTheme}
}
html[theme=light] {
  ${lightTheme}
}
`;

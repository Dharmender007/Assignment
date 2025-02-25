// styles/GlobalStyle.ts
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${(props: any) => props.theme.fonts.primary};
    background: ${(props:any) => props.theme.colors.white};
    color: ${(props:any) => props.theme.colors.text};
  }
`;

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    type: "light" | "dark";
    background: string;
    hover: string;
    colors: {
      default: string;
      primary: string;
      danger: string;
      muted: string;
      disabled: string;
      defaultAccent: string;
      primaryAccent: string;
      dangerAccent: string;
      white: string;
    };
  }
}

import { DefaultTheme } from "styled-components";

const light: DefaultTheme = {
  type: "light",
  background: "#FFFFFF",
  hover: "#F8FCFF",
  colors: {
    default: "#444444",
    primary: "#2196F3",
    danger: "#FF4444",
    muted: "#909090",
    disabled: "#C4C4C4",
    defaultAccent: "#EEEEEE",
    primaryAccent: "#D3EAFD",
    dangerAccent: "#FBD2E0",
    white: "#FFFFFF",
  },
};

const dark: DefaultTheme = {
  type: "dark",
  background: "#051521",
  hover: "#F8FCFF",
  colors: {
    default: "#DDDDDD",
    primary: "#2196F3",
    danger: "#FF4444",
    muted: "#909090",
    disabled: "#909090",
    defaultAccent: "#06253D",
    primaryAccent: "#D3EAFD",
    dangerAccent: "#FBD2E0",
    white: "#FFFFFF",
  },
};

export { light, dark };

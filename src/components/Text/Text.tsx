import React from "react";
import styled, { DefaultTheme } from "styled-components";

export type TextSize = "1" | "2" | "3" | "4" | "5" | "6";
export type TextWeight = "regular" | "light" | "medium" | "bold";
export type TextColor =
  | "default"
  | "primary"
  | "danger"
  | "muted"
  | "white"
  | "disabled";

export interface TextProps {
  size?: TextSize;
  weight?: TextWeight;
  color?: TextColor;
  transform?: "none" | "capitalize" | "uppercase" | "lowercase";
  align?: AlignSetting;
}

export const getFontSize = (size?: TextSize): string => {
  switch (size) {
    case "1":
      return "0.512rem";
    case "2":
      return "0.64rem";
    case "3":
      return "0.8rem";
    case "5":
      return "1.25rem";
    case "6":
      return "1.563rem";
    default:
      return "1rem";
  }
};

export const getFontWeight = (weight?: TextWeight): string => {
  return weight === "bold"
    ? "bold"
    : weight === "medium"
    ? "600"
    : weight === "light"
    ? "normal"
    : "500";
};

export const getFontColor = (
  theme: DefaultTheme,
  color?: TextColor
): string => {
  switch (color) {
    case "primary":
      return theme.colors.primary;
    case "danger":
      return theme.colors.danger;
    case "muted":
      return theme.colors.muted;
    case "white":
      return theme.colors.white;
    case "disabled":
      return theme.colors.disabled;
    default:
      return theme.colors.default;
  }
};

const Text = styled.p<TextProps>`
  margin: 0;
  line-height: 1.6;
  font-size: ${(props) => getFontSize(props.size)};
  font-weight: ${({ weight }) => getFontWeight(weight)};
  color: ${(props) => getFontColor(props.theme, props.color)};
  text-transform: ${(props) => props.transform || "none"};
  text-align: ${({ align = "none" }) => align};
`;

export const Span = Text.withComponent("span");

export const Small = styled(Span)`
  font-size: 0.41rem;
`;

export default Text;

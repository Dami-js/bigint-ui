import React from "react";
import styled, { DefaultTheme } from "styled-components";
import {
  getFontColor,
  getFontSize,
  getFontWeight,
  TextProps,
} from "../Text/Text";

type ButtonType =
  | "primary"
  | "primaryOutline"
  | "primaryText"
  | "muted"
  | "mutedOutline"
  | "mutedText"
  | "default"
  | "defaultText"
  | "defaultAccent"
  | "dangerText"
  | "disabled"
  | "disabledText"
  | "disabledOutline";

interface ButtonProps {
  color?: ButtonType;
  labelProps?: TextProps;
  width?: number | undefined | string;
  disabled?: boolean;
}

const getButtonBorder = ({
  theme,
  ...props
}: ButtonProps & { theme: DefaultTheme }) => {
  const color =
    props.disabled && props.color && props.color.includes("Outline")
      ? "disabledOutline"
      : !props.color
      ? "primary"
      : props.color;

  switch (color) {
    case "primaryOutline":
      return `solid 0.14rem ${theme.colors.primary}`;
    case "disabledOutline":
      return `solid 0.14rem ${theme.colors.disabled}`;
    case "mutedOutline":
      return `solid 0.14rem ${theme.colors.muted}`;
    default:
      return `none`;
  }
};

const getButtonBackground = ({
  theme,
  ...props
}: ButtonProps & { theme: DefaultTheme }) => {
  const color =
    props.disabled &&
    props.color &&
    !props.color.includes("Outline") &&
    !props.color.includes("Text")
      ? "disabled"
      : props.color || "primary";

  switch (color) {
    case "primary":
      return theme.colors.primary;
    case "default":
      return theme.colors.default;
    case "defaultAccent":
      return theme.colors.defaultAccent;
    case "disabled":
      return theme.colors.disabled;
    case "muted":
      return theme.colors.muted;
    default:
      return "inherit";
  }
};

const getTextColorFromButtonType = ({
  theme,
  ...props
}: ButtonProps & { theme: DefaultTheme }) => {
  const color =
    props.disabled && props.color && props.color.includes("Outline")
      ? "disabledOutline"
      : props.disabled
      ? "disabled"
      : props.color || "primary";
  switch (color) {
    case "dangerText":
      return getFontColor(theme, "danger");
    case "default":
      return getFontColor(theme, "white");
    case "defaultAccent":
      return getFontColor(theme, "default");
    case "muted":
      return getFontColor(theme, "white");
    case "primary":
      return getFontColor(theme, "white");
    case "disabled":
      return getFontColor(theme, "default");
    case "mutedOutline":
      return getFontColor(theme, "muted");
    case "mutedText":
      return getFontColor(theme, "muted");
    case "disabledText":
      return getFontColor(theme, "disabled");
    case "disabledOutline":
      return getFontColor(theme, "disabled");
    case "muted":
      return getFontColor(theme, "white");
    case "primaryOutline":
      return getFontColor(theme, "primary");
    case "primaryText":
      return getFontColor(theme, "primary");
    case "defaultText":
      return getFontColor(theme, "default");
    default:
      return getFontColor(theme, "white");
      break;
  }
};

const Button = styled.button<ButtonProps>`
  display: inline-block;
  border: ${(props) => getButtonBorder(props)};
  border-radius: 5rem;
  padding: 0.6rem 1rem;
  margin: 0;
  text-decoration: none;
  background: ${(props) => getButtonBackground(props)};
  color: ${(props) => getTextColorFromButtonType(props)};
  font-size: ${({ labelProps }) =>
    getFontSize(labelProps ? labelProps.size : "3")};
  font-weight: ${({ labelProps }) =>
    getFontWeight(labelProps ? labelProps.weight : "regular")};
  text-transform: ${({ labelProps }) =>
    labelProps ? labelProps.transform : "none"};
  line-height: 1;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: 0;
  min-width: fit-content;
  width: ${(props) => props.width};
  &:disabled {
    background: ${(props) => getButtonBackground(props)} !important;
    color: ${(props) => getTextColorFromButtonType(props)} !important;
  }
  width: ${(props) => props.width};

  &:active {
    opacity: 0.6;
  }
`;

export const A = Button.withComponent("a");
// const Button = ({ label }: ButtonProps) => {
//   return <SButton>{label}</SButton>;
// };

export const BlockLink = styled.a<{ iconRight?: boolean; borderTop?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.iconRight ? "space-between" : "center")};
  padding: 1rem;
  border-top: ${({ borderTop, theme }) =>
    borderTop ? `1px solid ${theme.colors.defaultAccent}` : "none"};
  border-bottom: 1px solid ${({ theme }) => theme.colors.defaultAccent};
  text-decoration: none;
  transition: background-color 100ms ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: rgba(33, 150, 243, 3%);
  }
`;

export const Pill = styled(Button)`
  border-width: 1px;
`;

export default Button;

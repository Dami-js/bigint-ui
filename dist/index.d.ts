import * as styled_components from 'styled-components';
import { DefaultTheme } from 'styled-components';

declare type TextSize = "1" | "2" | "3" | "4" | "5" | "6";
declare type TextWeight = "regular" | "light" | "medium" | "bold";
declare type TextColor = "default" | "primary" | "danger" | "muted" | "white" | "disabled";
interface TextProps {
    size?: TextSize;
    weight?: TextWeight;
    color?: TextColor;
    transform?: "none" | "capitalize" | "uppercase" | "lowercase";
    align?: AlignSetting;
}
declare const Text: styled_components.StyledComponent<"p", DefaultTheme, TextProps, never>;

declare type ButtonType = "primary" | "primaryOutline" | "primaryText" | "muted" | "mutedOutline" | "mutedText" | "default" | "defaultText" | "defaultAccent" | "dangerText" | "disabled" | "disabledText" | "disabledOutline";
interface ButtonProps {
    color?: ButtonType;
    labelProps?: TextProps;
    width?: number | undefined | string;
    disabled?: boolean;
}
declare const Button: styled_components.StyledComponent<"button", DefaultTheme, ButtonProps, never>;

declare const light: DefaultTheme;
declare const dark: DefaultTheme;

export { Button, Text, dark, light };

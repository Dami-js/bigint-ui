import * as styled_components from 'styled-components';
import { DefaultTheme } from 'styled-components';

interface ButtonProps {
    size?: number;
}
declare const Button: styled_components.StyledComponent<"button", styled_components.DefaultTheme, ButtonProps, never>;

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

declare const light: DefaultTheme;
declare const dark: DefaultTheme;

export { Button, Text, dark, light };

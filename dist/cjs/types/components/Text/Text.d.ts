import { DefaultTheme } from "styled-components";
export declare type TextSize = "1" | "2" | "3" | "4" | "5" | "6";
export declare type TextWeight = "regular" | "light" | "medium" | "bold";
export declare type TextColor = "default" | "primary" | "danger" | "muted" | "white" | "disabled";
export interface TextProps {
    size?: TextSize;
    weight?: TextWeight;
    color?: TextColor;
    transform?: "none" | "capitalize" | "uppercase" | "lowercase";
    align?: AlignSetting;
}
export declare const getFontSize: (size?: TextSize | undefined) => string;
export declare const getFontWeight: (weight?: TextWeight | undefined) => string;
export declare const getFontColor: (theme: DefaultTheme, color?: TextColor | undefined) => string;
declare const Text: import("styled-components").StyledComponent<"p", DefaultTheme, TextProps, never>;
export declare const Span: import("styled-components").StyledComponent<"span", DefaultTheme, TextProps, never>;
export declare const Small: import("styled-components").StyledComponent<"span", DefaultTheme, TextProps, never>;
export default Text;

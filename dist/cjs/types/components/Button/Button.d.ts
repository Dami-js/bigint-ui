import { DefaultTheme } from "styled-components";
import { TextProps } from "../Text/Text";
declare type ButtonType = "primary" | "primaryOutline" | "primaryText" | "muted" | "mutedOutline" | "mutedText" | "default" | "defaultText" | "defaultAccent" | "dangerText" | "disabled" | "disabledText" | "disabledOutline";
interface ButtonProps {
    color?: ButtonType;
    labelProps?: TextProps;
    width?: number | undefined | string;
    disabled?: boolean;
}
declare const Button: import("styled-components").StyledComponent<"button", DefaultTheme, ButtonProps, never>;
export declare const A: import("styled-components").StyledComponent<"a", DefaultTheme, ButtonProps, never>;
export declare const BlockLink: import("styled-components").StyledComponent<"a", DefaultTheme, {
    iconRight?: boolean | undefined;
    borderTop?: boolean | undefined;
}, never>;
export declare const Pill: import("styled-components").StyledComponent<"button", DefaultTheme, ButtonProps, never>;
export default Button;

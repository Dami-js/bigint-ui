import { PropsWithChildren } from "react";
import { DefaultTheme } from "styled-components";
interface ThemeProviderProps {
    theme: DefaultTheme;
}
declare function ThemeProvider({ children, theme, }: PropsWithChildren<ThemeProviderProps>): JSX.Element;
export default ThemeProvider;

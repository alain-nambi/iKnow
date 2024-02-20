import { createContext } from "react";

const themes = {
  dark: {
    blue: "#255CFF",
    gray: "#8089A4",
    dark: "#000000",
    bright: "#EDEEF9",
    light: "#FFFFFF",
  },
  light: {
    blue: "#255CFF",
    gray: "#8089A4",
    dark: "#000000",
    bright: "#EDEEF9",
    light: "#FFFFFF",
  }
}

const ThemeContext = createContext(themes.dark)

export {
  themes,
  ThemeContext
}
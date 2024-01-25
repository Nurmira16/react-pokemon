import { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [themeName, setThemeName] = useState("Dark");
  const handleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    const newThemeName = themeName === "Dark" ? "Light" : "Dark";
    setThemeName(newThemeName);
  };
  return { theme, handleTheme, themeName };
};

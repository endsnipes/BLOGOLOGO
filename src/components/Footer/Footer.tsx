import { Toggle } from "..";
import { useEffect, useState } from "react";
import { StyledFooter, TextFooter } from "./styles";

type Theme = "dark" | "light";
export const Footer = () => {
  const [theme, setTheme] = useState<Theme>("light");
  const handleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);
  return (
    <StyledFooter>
      <TextFooter>©2023 Blogologo</TextFooter>
      <Toggle onChange={handleTheme} />
    </StyledFooter>
  );
};

import * as React from "react";
import * as Mui from "@mui/material";
import * as Themes from "src/themes";

export const ThemeContext = React.createContext({
  mode: false,
  changeMode: () => {},
});

export const Main = ({ children }: child) => {
  const [mode, setMode] = React.useState(
    localStorage.getItem("theme") === "dark"
  );
  const changeMode = () => {
    localStorage.setItem("theme", mode ? "light" : "dark");
    setMode(!mode);
  };
  const theme = React.useMemo(
    () =>
      Mui.createTheme({
        ...Themes.Global.Components(),
        ...(mode ? Themes.Global.PaletteDark() : Themes.Global.PaletteLight()),
        ...Themes.Global.Typography(),
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ mode, changeMode }}>
      <Mui.ThemeProvider theme={theme}>
        <Themes.CssBaseline.Main />
        {children}
      </Mui.ThemeProvider>
    </ThemeContext.Provider>
  );
};

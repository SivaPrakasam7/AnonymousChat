import * as React from "react";
import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Themes from "src/themes";

export const ThemeSwitch = () => {
  const { mode, changeMode } = React.useContext(Themes.ThemeContext);
  return (
    <Mui.IconButton
      size="small"
      onClick={changeMode}
      sx={{
        borderRadius: 2,
        border: (theme) => `1px solid ${theme.palette.primary.light}`,
      }}
    >
      {mode ? (
        <MuiIcons.LightMode color="primary" />
      ) : (
        <MuiIcons.DarkMode color="primary" />
      )}
    </Mui.IconButton>
  );
};

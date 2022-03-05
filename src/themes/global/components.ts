import * as Mui from "@mui/material";

export const Components = (): Pick<Mui.ThemeOptions, "components"> => {
  const borderRadius = 10;
  const theme = Mui.useTheme();

  return {
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "capitalize",
            borderRadius,
          },
        },
      },
      MuiAppBar: {
        defaultProps: {
          elevation: 0,
        },
        styleOverrides: {
          root: {
            background: `${theme.palette.primary.light}20`,
          },
        },
      },
      MuiCard: {
        defaultProps: {
          elevation: 0,
        },
        styleOverrides: {
          root: {
            border: `1px solid ${theme.palette.primary.light}20`,
            height: "fit-content",
          },
        },
      },
    },
  };
};

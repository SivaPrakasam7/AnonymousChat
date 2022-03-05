import * as Mui from "@mui/material";

export const FieldLabel = ({
  label,
  children,
  sx,
  ...props
}: Pick<Mui.TextFieldProps, "label"> & Mui.TypographyProps & child) => (
  <Mui.FormControl
    component={Mui.Stack}
    spacing={1}
    sx={{ maxWidth: "sm", width: "100%", ...sx }}
  >
    <Mui.Typography variant="body2" {...(props as Mui.TypographyProps)}>
      {label}
    </Mui.Typography>
    {children}
  </Mui.FormControl>
);

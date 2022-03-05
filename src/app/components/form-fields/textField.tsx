import * as React from "react";
import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Formik from "formik";
import * as FormikMui from "formik-mui";
import * as Components from "src/app/components";

export const FormField = (props: Mui.TextFieldProps) => (
  <Formik.Field
    component={props.type === "password" ? MuiPasswordField : MuiTextField}
    {...props}
  />
);

export const MuiTextField = ({ label, ...props }: FormikMui.TextFieldProps) => {
  const ifError = Boolean(
    props.form.errors[props.field.name] && props.form.touched[props.field.name]
  );
  return (
    <Components.FieldLabel
      label={label}
      color={ifError ? "error.main" : undefined}
    >
      <Mui.TextField
        variant="outlined"
        size="small"
        fullWidth
        {...FormikMui.fieldToTextField(props)}
      />
    </Components.FieldLabel>
  );
};

export const MuiPasswordField = ({
  type,
  label,
  ...props
}: FormikMui.TextFieldProps) => {
  const [visible, setVisible] = React.useState(false);
  const handleVisible = () => setVisible(!visible);
  const ifError = Boolean(
    props.form.errors[props.field.name] && props.form.touched[props.field.name]
  );
  return (
    <Components.FieldLabel
      label={label}
      color={ifError ? "error.main" : undefined}
    >
      <Mui.TextField
        variant="outlined"
        size="small"
        fullWidth
        type={visible ? "text" : type}
        InputProps={{
          endAdornment: (
            <Mui.InputAdornment position="end">
              <Mui.IconButton onClick={handleVisible}>
                {visible ? <MuiIcons.VisibilityOff /> : <MuiIcons.Visibility />}
              </Mui.IconButton>
            </Mui.InputAdornment>
          ),
        }}
        {...FormikMui.fieldToTextField(props)}
      />
    </Components.FieldLabel>
  );
};

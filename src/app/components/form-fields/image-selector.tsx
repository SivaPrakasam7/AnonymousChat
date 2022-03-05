import * as Mui from "@mui/material";
import * as Formik from "formik";
import * as Components from "src/app/components";

const tobase64 = (file: Blob) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject("");
  });

export const ImageSelector = ({
  label,
  name,
  ...props
}: Required<Pick<Mui.TextFieldProps, "label" | "name">> & Mui.AvatarProps) => {
  const { setFieldValue, values, errors, touched } =
    Formik.useFormikContext<{ [key: string]: string }>();
  const ifError = Boolean(touched[name] && errors[name]);
  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) =>
    setFieldValue(name, await tobase64(e.target.files?.[0] as unknown as Blob));

  return (
    <Components.FieldLabel
      label={label}
      color={ifError ? "error.main" : undefined}
      sx={{ width: "fit-content" }}
    >
      <input
        accept="image/*"
        type="file"
        name={name}
        hidden
        id={`browse${name}`}
        onChange={handleImageChange}
      />
      <label htmlFor={`browse${name}`}>
        <Mui.Avatar src={values[name]} {...props}>
          {label}
        </Mui.Avatar>
      </label>
    </Components.FieldLabel>
  );
};

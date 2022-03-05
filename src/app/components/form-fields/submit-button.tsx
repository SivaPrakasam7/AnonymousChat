import * as MuiLab from "@mui/lab";
import * as Formik from "formik";

export const SubmitButton = (props: MuiLab.LoadingButtonProps) => {
  const { isSubmitting } = Formik.useFormikContext();
  return (
    <MuiLab.LoadingButton
      type="submit"
      variant="contained"
      loading={isSubmitting}
      {...props}
    />
  );
};

import * as Formik from "formik";
import * as Router from "react-router-dom";
import * as Pages from "src/app/pages";

export const Main = () => {
  const navigate = Router.useNavigate();
  const Submit = (
    values: main.form,
    { setSubmitting, resetForm }: Formik.FormikHelpers<main.form>
  ) => {
    try {
      navigate(values.username);
    } catch (e) {
      console.log(e);
    } finally {
      console.log(values);
      setSubmitting(false);
      resetForm();
    }
  };
  return (
    <Formik.Formik
      initialValues={{ profile: "", username: "" }}
      onSubmit={Submit}
    >
      {() => (
        <Formik.Form>
          <Pages.Main.Views.Content />
        </Formik.Form>
      )}
    </Formik.Formik>
  );
};

export declare namespace main {
  export interface form {
    profile: string;
    username: string;
  }
}

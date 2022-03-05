import * as React from "react";
import * as Formik from "formik";
import * as Router from "react-router-dom";
import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Pages from "src/app/pages";
import * as Logics from "src/logics";

export const Main = () => {
  const { data, handleDB, loading } = Logics.useIndexedDB<user>(
    "UserDB",
    "user",
    "uid",
    "signedIn"
  );
  const navigate = Router.useNavigate();
  React.useLayoutEffect(() => {
    // handleDB("deleteDB");
    // handleDB("readall");
    handleDB("query", { index: "signedIn", key: "true" });
  }, []);

  const logout = () => {
    handleDB("update", { ...data[0], signedIn: "false" });
    window.location.reload();
  };

  const copy = () => {
    navigator.clipboard.writeText(data[0]?.uid);
  };

  const deleteUser = () => {
    handleDB("delete", data[0]?.uid);
  };

  const Submit = async (
    values: Pick<user, "name" | "profile">,
    {
      setSubmitting,
      resetForm,
    }: Formik.FormikHelpers<Pick<user, "name" | "profile">>
  ) => {
    try {
      if (!Boolean(data[0]?.uid)) {
        const preUser = { createdTime: new Date().getTime(), ...values };
        const user = new Logics.User(preUser);
        handleDB("insert", [user.getData()]);
      }
      navigate(values.name);
    } catch (e) {
      console.log(e);
    } finally {
      setSubmitting(false);
      resetForm();
    }
  };

  return loading ? (
    <Mui.Stack
      alignItems="center"
      justifyContent="center"
      sx={{ height: "100vh" }}
    >
      <Mui.CircularProgress />
    </Mui.Stack>
  ) : (
    <Formik.Formik
      initialValues={{
        profile: data[0]?.profile || "",
        name: data[0]?.name || "",
      }}
      onSubmit={Submit}
    >
      {() => (
        <Formik.Form>
          <Mui.Stack
            alignItems="center"
            justifyContent="center"
            sx={{ p: 2, height: "95vh" }}
          >
            <Mui.Stack
              spacing={2}
              component={Mui.CardContent}
              alignItems="center"
              sx={{
                bgcolor: (theme) => `${theme.palette.primary.main}20`,
                width: { md: "50%" },
                borderRadius: 10,
              }}
            >
              <Mui.Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ width: "100%", display: data[0]?.uid ? "flex" : "none" }}
              >
                <Mui.Typography
                  variant="h6"
                  textAlign="center"
                  noWrap
                  color="primary"
                  sx={{ width: { xs: 200, md: 500 } }}
                >
                  UID:{data[0]?.uid}
                </Mui.Typography>
                <Mui.IconButton onClick={copy}>
                  <MuiIcons.CopyAll color="primary" />
                </Mui.IconButton>
              </Mui.Stack>
              <Pages.Main.Views.Content disabled={Boolean(data?.[0]?.uid)} />
              <Mui.Button
                size="small"
                variant="contained"
                color="error"
                onClick={logout}
                sx={{
                  display: data[0]?.uid ? "flex" : "none",
                }}
              >
                Logout
              </Mui.Button>
            </Mui.Stack>
          </Mui.Stack>
        </Formik.Form>
      )}
    </Formik.Formik>
  );
};

export declare namespace main {
  export interface form {
    profile: string;
    name: string;
  }
}

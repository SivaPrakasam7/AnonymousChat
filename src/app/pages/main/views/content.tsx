import * as Mui from "@mui/material";
import * as Components from "src/app/components";

export const Content = () => (
  <Mui.Stack
    alignItems="center"
    justifyContent="center"
    sx={{ height: "100vh", p: 2, width: "100%" }}
  >
    <Mui.Stack
      spacing={2}
      component={Mui.CardContent}
      alignItems="center"
      sx={{
        bgcolor: (theme) => `${theme.palette.primary.main}20`,
        width: "50%",
        borderRadius: 10,
      }}
    >
      <Components.FormFields.ImageSelector
        label=""
        name="profile"
        sx={{ height: 150, width: 150 }}
      />
      <Components.FormFields.FormField
        name="username"
        label=""
        placeholder="Username"
        // variant="standard"
        sx={{ "& input": { textAlign: "center" } }}
      />
      <Components.FormFields.SubmitButton>
        Join
      </Components.FormFields.SubmitButton>
    </Mui.Stack>
  </Mui.Stack>
);

import * as React from "react";
import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Pages from "src/app/pages";
import * as Logics from "src/logics";

export const UserList = () => {
  const { data, handleDB } = Logics.useIndexedDB<user>(
    "UserDB",
    "user",
    "uid"
  );
  React.useLayoutEffect(() => {
    handleDB("readall");
  }, []);
  return (
    <Mui.Box>
      <Mui.AppBar position="static">
        <Mui.Stack direction="row" component={Mui.Toolbar} spacing={1}>
          <Mui.Typography
            variant="h6"
            color="primary"
            sx={{ textTransform: "capitalize" }}
          >
            {data[0]?.name}
          </Mui.Typography>
          <Mui.Box flexGrow={1} />
          <Pages.Chat.Views.ThemeSwitch />
          <Mui.IconButton size="small">
            <Mui.Avatar src={data[0]?.profile} />
          </Mui.IconButton>
        </Mui.Stack>
      </Mui.AppBar>
      <Pages.Chat.Views.UserCard />
    </Mui.Box>
  );
};

import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Pages from "src/app/pages";

export const UserList = () => (
  <Mui.Box>
    <Mui.AppBar position="static">
      <Mui.Stack direction="row" component={Mui.Toolbar} spacing={1}>
        <Mui.Typography variant="h6" color="primary">
          From User
        </Mui.Typography>
        <Mui.Box flexGrow={1} />
        <Pages.Chat.Views.ThemeSwitch />
        <Mui.IconButton size="small">
          <Mui.Avatar></Mui.Avatar>
        </Mui.IconButton>
      </Mui.Stack>
    </Mui.AppBar>
    <Pages.Chat.Views.UserCard />
  </Mui.Box>
);

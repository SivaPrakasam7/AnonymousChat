import * as Mui from "@mui/material";
import * as Pages from "src/app/pages";

export const Main = () => (
  <Mui.Grid container>
    <Mui.Grid item xs={9}>
      <Pages.Chat.Views.MessageView />
    </Mui.Grid>
    <Mui.Grid item xs={3}>
      <Pages.Chat.Views.UserList />
    </Mui.Grid>
  </Mui.Grid>
);

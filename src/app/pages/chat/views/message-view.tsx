import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Pages from "src/app/pages";

export const MessageView = () => (
  <Mui.Box
    sx={{ borderRight: (theme) => `1px solid ${theme.palette.primary.main}20` }}
  >
    <Mui.AppBar position="static">
      <Mui.Stack direction="row" component={Mui.Toolbar} spacing={1}>
        <Mui.Avatar></Mui.Avatar>
        <Mui.Typography variant="h6" color="primary">
          To User
        </Mui.Typography>
        <Mui.Box flexGrow={1} />
        <Mui.IconButton>
          <MuiIcons.VideoCall color="primary" />
        </Mui.IconButton>
        <Mui.IconButton>
          <MuiIcons.Call color="primary" />
        </Mui.IconButton>
        <Mui.IconButton>
          <MuiIcons.MoreVert />
        </Mui.IconButton>
      </Mui.Stack>
    </Mui.AppBar>
    <Mui.CardContent
      sx={{
        overflowY: "auto",
        height: "90vh",
        scrollbarWidth: "none",
        bgcolor: (theme) => theme.palette.grey[100],
        pb: "60px !important",
      }}
    >
      {new Array(20).fill(undefined).map((value, index) => (
        <Pages.Chat.Views.Chat index={index} />
      ))}
      <Pages.Chat.Views.SenderBox />
    </Mui.CardContent>
  </Mui.Box>
);

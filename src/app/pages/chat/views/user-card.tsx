import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";

export const UserCard = () => (
  <Mui.Card
    sx={{
      borderRadius: 0,
      bgcolor: (theme) =>
        theme.palette.mode === "dark"
          ? `${theme.palette.primary.main}20`
          : undefined,
    }}
  >
    <Mui.ListItem
      secondaryAction={
        <Mui.Stack alignItems="flex-end" spacing={1}>
          <Mui.IconButton size="small">
            <MuiIcons.KeyboardArrowDown />
          </Mui.IconButton>
          <Mui.Typography variant="caption" color="text.secondary">
            {new Date().toLocaleTimeString()}
          </Mui.Typography>
        </Mui.Stack>
      }
      disablePadding
    >
      <Mui.CardContent
        component={Mui.ListItemButton}
        sx={{ p: "12px !important" }}
      >
        <Mui.Stack direction="row" spacing={1} alignItems="center">
          <Mui.Avatar sx={{ width: 50, height: 50 }}></Mui.Avatar>
          <Mui.Stack>
            <Mui.Typography variant="body1">Username</Mui.Typography>
            <Mui.Typography variant="body2" color="text.secondary" noWrap>
              Username
            </Mui.Typography>
          </Mui.Stack>
        </Mui.Stack>
      </Mui.CardContent>
    </Mui.ListItem>
  </Mui.Card>
);

import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as Pages from "src/app/pages";

export const Main = () =>
  Router.useRoutes([
    {
      path: "/*",
      element: <Pages.Main.Main />,
    },
    {
      path: ":fromUser",
      element: <Pages.Chat.Main />,
    },
  ]);

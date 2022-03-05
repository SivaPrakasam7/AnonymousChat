import * as Router from "react-router-dom";
import * as Routes from "src/app/routes";
import * as Providers from "src/app/providers";
import * as Themes from "src/themes";

export const Main = () => (
  <Themes.Main>
    <Providers.Main>
      <Router.BrowserRouter>
        <Routes.Main />
      </Router.BrowserRouter>
    </Providers.Main>
  </Themes.Main>
);

import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import MockBrowser from "./mock-browser";
import AuthorizedRoute from "./router/AuthorizedRoute";
import store from "./stores/store";

// Layouts
import UnauthorizedLayout from "./layouts/UnauthorizedLayout";
import PrimaryLayout from "./layouts/PrimaryLayout";

// ** See notes on this `<App>` component at the bottom of this file **
const App = (props) => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <MockBrowser />
        <Switch>
          <Route path="/auth" component={UnauthorizedLayout} />
          <AuthorizedRoute path="/app" component={PrimaryLayout} />
          <Redirect to="/auth" />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;

import "./App.css";

import { Route, Switch } from "react-router-dom";

import RedirectResultHandler from "./redirectMode/auth";

import HomePage from "./App";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/auth" exact>
        <RedirectResultHandler />
      </Route>
    </Switch>
  );
}

export default App;

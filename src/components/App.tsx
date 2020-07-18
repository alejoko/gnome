import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

//Custom Component Imports
// import Header from "./Header";
import { CitizenList } from "./CitizenList";
import CitizenDetail from "./CitizenDetail";
import { NotFound } from "./NotFound";

const App = (): JSX.Element => {
  return (
    <>
      <Router>

        <Switch>
          <Route path="/" exact component={CitizenList} />
          <Route path="/:id" component={CitizenDetail} />
          <Route path="/404" component={NotFound} />

          <Redirect to="/404" />
        </Switch>
      </Router>
    </>
  );
};
//

export default App;
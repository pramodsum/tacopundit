import React from "react";
import "typeface-roboto";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import NotFoundPage from "./routes/NotFoundPage";
import Homepage from "./routes/Homepage";
import ToppingDetailsPage from "./routes/ToppingDetailsPage";

import initializeFirebase from "./utils/firebase/init";

const App: React.FC = () => {
  initializeFirebase();

  return (
    <Router>
      <Switch>
        <Redirect exact path="/tacopundit" to="/tacopundit/toppings" />
        <Route exact path="/tacopundit/toppings" component={Homepage} />
        <Route
          path={`/tacopundit/toppings/:slug`}
          component={ToppingDetailsPage}
        />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default App;

import React from "react";
import "typeface-roboto";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NotFoundPage from "./routes/NotFoundPage";
import ItemPage from "./routes/ItemPage";

import initializeFirebase from "./utils/firebase/init";
import ItemDetailsPage from "./routes/ItemDetailsPage";

const App: React.FC = () => {
  initializeFirebase();

  return (
    <Router basename="/tacopundit">
      <Switch>
        <Route exact path="/" component={ItemPage} />
        <Route path="/:slug" component={ItemDetailsPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default App;

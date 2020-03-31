import React from "react";
import "typeface-roboto";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NotFoundPage from "./routes/NotFoundPage";
import Homepage from "./routes/Homepage";
import initializeFirebase from "./utils/firebase/init";
import RecipeDetailsPage from "./routes/RecipeDetailsPage";

const App: React.FC = () => {
  initializeFirebase();

  return (
    <Router basename="/tacopundit">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/:slug" component={RecipeDetailsPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default App;

import React from "react";
import { BrowserRouter as HashRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import AllLaunches from "./pages/allLaunches";
import Launch from "./pages/launch";
import History from "./pages/history";
import NewCard from "./components/newCard";

import "./App.css";

function App() {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/all_launches" component={AllLaunches} />
          <Route path="/launch/:mission_name" component={Launch} />
          <Route exact path="/history" component={History} />
          <Route exact path="/newCard" component={NewCard} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;

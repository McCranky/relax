import React from "react";
import "./App.scss";
import WorkoutWeek from "./view/WorkoutWeek";
import { Redirect, Route, Switch } from "react-router-dom";
import WorkoutStarter from "./view/WorkoutStarter";
import WorkoutPlan from "./view/WorkoutPlan";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/" exact component={WorkoutPlan} />
        <Route path="/week/:weekId" exact component={WorkoutWeek} />
        <Route path="/day/:weekId/:dayId" exact component={WorkoutStarter} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;

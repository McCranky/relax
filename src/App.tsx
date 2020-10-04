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
        <Route path="/plans/:planId" exact component={WorkoutPlan} />
        <Route path="/week/:weekId" exact component={WorkoutWeek} />
        <Route path="/day/:dayId" exact component={WorkoutStarter} />
        <Redirect to="/plans/0" />
      </Switch>
    </div>
  );
}

export default App;

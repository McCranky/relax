import React from "react";
import "./App.scss";
import Workout from "./view/Workout";
import { getDayWorkout } from "./services/trainingService";

function App() {
  return (
    <div className="app">
      <Workout workout={getDayWorkout(0)} />
    </div>
  );
}

export default App;

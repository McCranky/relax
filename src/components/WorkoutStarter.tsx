import React, { useState } from "react";
import "../App.scss";
import WorkoutDay from "../view/WorkoutDay";
import { getDayWorkout } from "../services/trainingService";
import { RouteComponentProps } from "react-router-dom";

interface Props {
  dayId: string;
  weekId: string;
}

const WorkoutStarter = ({ match, ...props }: RouteComponentProps<Props>) => {
  const [started, setStarted] = useState(false);
  const [workoutDuration, setWorkoutDuration] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [workout] = useState(getDayWorkout(+match.params.weekId, +match.params.dayId));

  // useEffect(() => {
  //     setWorkoutDuration(getDayWorkout(+props.match.params.id));
  // }, [])

  const handleStart = () => {
    setWorkoutDuration(Date.now());
    setStarted(true);
  };

  const handleWorkoutFinish = () => {
    setWorkoutDuration((duration) => Date.now() - duration);
    setCompleted(true);
  };

  const formatTime = (time?: number): string => {
    const seconds = Math.floor((time ? time : workoutDuration) / 1000);
    return `${Math.floor(seconds / 60)}min ${seconds % 60}sec`;
  };

  let render;
  if (!started)
    render = (
      <button className="btn hvr-success" onClick={handleStart}>
        Start
      </button>
    );
  else if (completed) {
    render = <h1>Completed in {formatTime()}, noice!</h1>;
  } else {
    render = <WorkoutDay workout={workout} onWorkoutComplete={handleWorkoutFinish} />;
  }
  return <React.Fragment>{render}</React.Fragment>;
};

export default WorkoutStarter;

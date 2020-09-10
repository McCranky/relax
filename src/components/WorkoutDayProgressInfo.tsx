import React from "react";

import "../App.scss";

interface Props {
  rounds: number;
  currentRound: number;
  roundRepeats: number;
  currentRepeat: number;
  exercises: number;
  currentExercise: number;
}

const WorkoutDayProgressIngo = ({
  rounds,
  exercises,
  currentRound,
  currentExercise,
  roundRepeats,
  currentRepeat,
  ...props
}: Props) => {
  return (
    <nav>
      <ul className="progress-info">
        <li>{`Round ${currentRound}/${rounds}`}</li>
        <li>{`Repeat ${currentRepeat}/${roundRepeats}`}</li>
        <li>{`Exercise ${currentExercise}/${exercises}`}</li>
      </ul>
    </nav>
  );
};

export default WorkoutDayProgressIngo;

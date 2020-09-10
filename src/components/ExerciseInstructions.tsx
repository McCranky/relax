import React, { useState } from "react";
import { ExerciseDescription } from "../types";
import Timer from "./Timer";

interface Props {
  exercise: ExerciseDescription;
  onComplete: any;
}

const ExerciseInstructions = ({ exercise, onComplete, ...props }: Props) => {
  const [completed, setCompleted] = useState(false);

  //   let exerciseInstructions;
  if (exercise.rest === -1) {
    return <h1>Chill</h1>;
  } else if (exercise.duration) {
    if (!completed) {
      return (
        <Timer
          allowModifing={false}
          time={exercise.duration}
          onTimeRunsOut={() => setCompleted(true)}
        />
      );
    } else {
      return <button onClick={onComplete}>Complete</button>;
    }
  } else {
    return (
      <div>
        <p>
          {exercise.repeats} reps {exercise.bothSided && "each"}
        </p>
        <button onClick={onComplete}>Complete</button>
      </div>
    );
  }

  //   return <React.Fragment>{exerciseInstructions}</React.Fragment>;
};

export default ExerciseInstructions;

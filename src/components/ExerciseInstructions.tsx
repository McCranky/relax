import React, { useState } from "react";
import Timer from "./Timer";

import { ExerciseDescription } from "../types";

import "../App.scss";

interface Props {
  exercise: ExerciseDescription;
  onComplete: any;
}

const ExerciseInstructions = ({ exercise, onComplete, ...props }: Props) => {
  const [completed, setCompleted] = useState(false);

  const bothSided = exercise.instructions.includes("each");
  const challange = exercise.instructions.includes("max");
  const timed = exercise.instructions.includes("seconds");
  const duration = +exercise.instructions.split(" ")[0];

  return (
    <React.Fragment>
      {/* If the exercise is a challange or based on repetitions */}
      {(challange || !timed) && (
        <div className="instruction">
          <p>{exercise.instructions}</p>
          <button className="btn hvr-info" onClick={onComplete}>
            Complete
          </button>
        </div>
      )}

      {/* If exercise is timed */}
      {!challange && timed && !completed && (
        <Timer
          allowModifing={false}
          time={bothSided ? duration * 2 : duration}
          onTimeRunsOut={() => setCompleted(true)}
        />
      )}

      {/* If time runs out in timed exercise*/}
      {completed && (
        <button className="btn hvr-info space" onClick={onComplete}>
          Complete
        </button>
      )}
    </React.Fragment>
  );
};

export default ExerciseInstructions;

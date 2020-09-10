import React from "react";
import { Exercise } from "./../types/index";
import "../App.scss";

interface Props {
  exercises: Exercise[];
  currentExerciseIndex: number;
}

const ExercisesList = ({ exercises, currentExerciseIndex, ...props }: Props) => {
  return (
    <ul>
      {exercises.map((ex, index) => (
        <li
          key={ex.name}
          className={
            index < currentExerciseIndex
              ? "completed"
              : index === currentExerciseIndex
              ? "processing"
              : ""
          }
        >
          {ex.name}
        </li>
      ))}
    </ul>
  );
};

export default ExercisesList;

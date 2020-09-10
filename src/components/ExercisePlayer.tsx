import React from "react";
import { Exercise } from "./../types/index";

interface Props {
  exercise: Exercise;
}

const ExercisePlayer = ({ exercise, ...props }: Props) => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      src={`${process.env.REACT_APP_ASSETS}/exercises/${exercise.name}.mp4`}
    />
  );
};

export default ExercisePlayer;

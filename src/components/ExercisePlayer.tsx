import React from "react";

import { Exercise } from "./../types/index";

import "../App.scss";

interface Props {
  exercise: Exercise;
}

const ExercisePlayer = ({ exercise, ...props }: Props) => {
  return (
    <React.Fragment>
      <p className="title">{exercise.name}</p>
      <video
        className="flat"
        autoPlay
        loop
        muted
        playsInline
        src={`${process.env.REACT_APP_ASSETS}/exercises/${exercise.name}.mp4`}
      />
    </React.Fragment>
  );
};

export default ExercisePlayer;

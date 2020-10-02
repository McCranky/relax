import React, { useEffect, useState } from "react";

import { Exercise } from "./../types/index";

import "../App.scss";

interface Props {
  exercise: Exercise;
}

const ExercisePlayer = ({ exercise, ...props }: Props) => {
  const [url, setUrl] = useState(
    `${process.env.REACT_APP_ASSETS}/exercises/${exercise.name}.mp4`
  );

  // useEffect(() => {
  //   fetch(`${process.env.REACT_APP_ASSETS}/exercises/${exercise.name}.mp4`, {
  //     mode: "cors",
  //   }).then((response) => {
  //     console.log(response);
  //     if (response.ok) {
  //       setUrl(`${process.env.REACT_APP_ASSETS}/exercises/${exercise.name}.mp4`);
  //     }
  //   });
  // }, [url, exercise.name]);
  useEffect(() => {
    setUrl(`${process.env.REACT_APP_ASSETS}/exercises/${exercise.name}.mp4`);
  }, [exercise]);

  return (
    <React.Fragment>
      <p className="title">{exercise.name}</p>
      <video className="flat" autoPlay loop muted playsInline src={url} />
    </React.Fragment>
  );
};

export default ExercisePlayer;

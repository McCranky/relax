import React, { useEffect, useState } from "react";

import { Exercise } from "./../types/index";

import "../App.scss";

interface Props {
  exercise: Exercise;
}

const ExercisePlayer = ({ exercise, ...props }: Props) => {
  const [url, setUrl] = useState(`/exercises/${exercise.name}.mp4`); //${process.env.REACT_APP_ASSETS}

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
    setUrl(`/exercises/${exercise.name}.mp4`); //${process.env.REACT_APP_ASSETS}
    console.log(url);
  }, [exercise, url]);

  return (
    <React.Fragment>
      <p className="title">{exercise.name}</p>
      <video className="flat" autoPlay loop muted playsInline>
        <source src={url} />
        <source src="https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4" />
      </video>
    </React.Fragment>
  );
};

export default ExercisePlayer;

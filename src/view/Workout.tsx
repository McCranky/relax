import React, { useState, useEffect } from "react";
import ExercisePlayer from "../components/ExercisePlayer";
import { DayWorkout, ExerciseDescription } from "./../types/index";
import Timer from "../components/Timer";
import ExerciseInstructions from "../components/ExerciseInstructions";

interface Props {
  workout: DayWorkout;
}

const Workout = ({ workout, ...props }: Props) => {
  const [workoutDuration, setWorkoutDuration] = useState(0);
  const [roundIndex, setRoundIndex] = useState(0);
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [isExerciseRest, setIsExerciseRest] = useState(false);
  const [isRoundRest, setIsRoundRest] = useState(false);
  const [exerciseDescription, setExerciseDescription] = useState<ExerciseDescription>({
    rest: -1,
    exercise: { name: "Chill" },
  });

  const handleStart = () => {
    setWorkoutDuration(Date.now());
    setStarted(true);
  };

  const handleExerciseCompletion = () => {
    if (exerciseIndex + 1 >= workout.rounds[roundIndex].exercises.length) {
      setExerciseIndex(0);
      if (roundIndex + 1 >= workout.rounds.length) {
        setCompleted(true);
        setWorkoutDuration((duration) => Date.now() - duration);
      } else {
        setRoundIndex((index) => index + 1);
        setIsRoundRest(true);
      }
    } else {
      setExerciseIndex((index) => index + 1);
      setIsExerciseRest(true);
    }
  };

  const formatTime = (time?: number): string => {
    const seconds = Math.floor((time ? time : workoutDuration) / 1000);
    return `${Math.floor(seconds / 60)}min ${seconds % 60}sec`;
  };

  useEffect(() => {
    setExerciseDescription(workout.rounds[roundIndex].exercises[exerciseIndex]);
  }, [workout.rounds, roundIndex, exerciseIndex]);

  if (!workout.rounds) return <h1>Rest</h1>;
  if (completed) return <h1>Completed in {formatTime()}, noice!</h1>;
  if (!started) return <button onClick={handleStart}>Start</button>;
  if (isExerciseRest)
    return (
      <Timer
        allowModifing={true}
        time={exerciseDescription.rest}
        onTimeRunsOut={() => setIsExerciseRest(false)}
      />
    );
  if (isRoundRest)
    return (
      <Timer
        allowModifing={true}
        time={workout.rounds[roundIndex].rest}
        onTimeRunsOut={() => setIsRoundRest(false)}
      />
    );
  return (
    <React.Fragment>
      <ExercisePlayer exercise={exerciseDescription.exercise} />
      <ExerciseInstructions
        exercise={exerciseDescription}
        onComplete={handleExerciseCompletion}
      />
    </React.Fragment>
  );
};

export default Workout;

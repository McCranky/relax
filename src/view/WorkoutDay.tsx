import React, { useState, useEffect } from "react";

import ExercisePlayer from "../components/ExercisePlayer";
import Timer from "../components/Timer";
import ExerciseInstructions from "../components/ExerciseInstructions";

import { DayWorkout, ExerciseDescription } from "../types/index";

import "../App.scss";
import WorkoutDayProgressInfo from "./../components/WorkoutDayProgressInfo";
import ExercisesList from "../components/ExercisesList";

interface Props {
  workout: DayWorkout;
  onWorkoutComplete: any;
}

const WorkoutDay = ({ workout, onWorkoutComplete, ...props }: Props) => {
  const [roundIndex, setRoundIndex] = useState(0);
  const [roundRepeats, setRoundRepeats] = useState(0);
  const [currentRepeat, setCurrentRepeat] = useState(1);
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [isExerciseRest, setIsExerciseRest] = useState(false);
  const [isRoundRest, setIsRoundRest] = useState(false);
  const [exerciseDescription, setExerciseDescription] = useState<ExerciseDescription>({
    rest: -1,
    exercise: { name: "Chill" },
  });

  const handleExerciseCompletion = () => {
    if (exerciseIndex + 1 >= workout.rounds[roundIndex].exercises.length) {
      setExerciseIndex(0);
      if (currentRepeat < roundRepeats) {
        setIsRoundRest(true);
        setCurrentRepeat((rep) => rep + 1);
      } else if (roundIndex + 1 >= workout.rounds.length) {
        onWorkoutComplete();
      } else {
        setRoundIndex((index) => index + 1);
        setCurrentRepeat(1);
        setIsRoundRest(true);
      }
    } else {
      setExerciseIndex((index) => index + 1);
      setIsExerciseRest(true);
    }
  };

  useEffect(() => {
    setRoundRepeats(workout.rounds[roundIndex].repeats);
  }, [roundIndex, workout.rounds]);

  useEffect(() => {
    setExerciseDescription(workout.rounds[roundIndex].exercises[exerciseIndex]);
  }, [workout.rounds, roundIndex, exerciseIndex]);

  if (isExerciseRest)
    return (
      <React.Fragment>
        <Timer
          allowModifing={true}
          time={exerciseDescription.rest}
          onTimeRunsOut={() => setIsExerciseRest(false)}
        />
        <p>Next: {workout.rounds[roundIndex].exercises[exerciseIndex].exercise.name}</p>
      </React.Fragment>
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
      <WorkoutDayProgressInfo
        currentExercise={exerciseIndex + 1}
        currentRound={roundIndex + 1}
        exercises={workout.rounds[roundIndex].exercises.length}
        rounds={workout.rounds.length}
        roundRepeats={workout.rounds[roundIndex].repeats}
        currentRepeat={currentRepeat}
      />
      <ExercisePlayer exercise={exerciseDescription.exercise} />
      <ExerciseInstructions
        exercise={exerciseDescription}
        onComplete={handleExerciseCompletion}
      />
      <ExercisesList
        exercises={workout.rounds[roundIndex].exercises.map((ex) => ex.exercise)}
        currentExerciseIndex={exerciseIndex}
      />
    </React.Fragment>
  );
};

export default WorkoutDay;

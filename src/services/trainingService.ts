import { DayWorkout } from "../types";

const apiEndpoint = process.env.REACT_APP_ASSETS;

function exerciseUrl(name: string) {
  return `${apiEndpoint}/exercises/${name}.mp4`;
}

export function getExercise(name: string) {
  return exerciseUrl(name);
}

export function getRestDay(): DayWorkout {
  return {
    name: "Rest",
    rounds: [],
  };
}

export function getDayWorkout(id: number): DayWorkout {
  return {
    name: "Day 4 (Upper Body)",
    rounds: [
      {
        repeats: 3,
        rest: 120,
        exercises: [
          {
            exercise: { name: "Jumping Jacks" },
            rest: 45,
            duration: 35,
          },
          {
            exercise: { name: "Handstand Kick Ups" },
            rest: 45,
            repeats: 8,
          },
          {
            exercise: { name: "Butterflies" },
            rest: 45,
            duration: 30,
          },
          {
            exercise: { name: "Decline Push Up" },
            rest: 45,
            repeats: 15,
          },
          {
            exercise: { name: "Elevated Pike Push Up" },
            rest: 45,
            repeats: 10,
          },
          {
            exercise: { name: "Burpee (Beginner)" },
            rest: 45,
            repeats: 10,
          },
        ],
      },
    ],
  };
}

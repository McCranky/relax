import { DayWorkout } from "../types";
// import data from "../data.json";
import { WeekPlan } from "./../types/index";

const apiEndpoint = process.env.REACT_APP_ASSETS;
const data = getData();

function exerciseUrl(name: string) {
  return `${apiEndpoint}/exercises/${name}.mp4`;
}

export function getWeekPlan(weekId: number): string[] {
  // const plan: WeekPlan[] = data;
  let result = data[weekId].dayliWorkouts.map((work) => {
    if (work.name.toLowerCase().includes("rest")) {
      return work.name;
    } else {
      return work.name.substring(work.name.indexOf("(") + 1, work.name.indexOf(")"));
    }
  });
  return result;
}

export function getPlanWeeks(planId: number): string[] {
  return data.map((week) => week.name);
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

export function getDayWorkout(weekId: number, dayId: number): DayWorkout {
  // console.log(data.length);
  // const plan: WeekPlan[] = data;
  return data[weekId].dayliWorkouts[dayId];
}

function getData(): WeekPlan[] {
  return [];
}

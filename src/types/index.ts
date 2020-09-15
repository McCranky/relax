export interface Exercise {
  name: string;
}

export interface ExerciseDescription {
  exercise: Exercise;
  duration?: number;
  repeats?: number;
  bothSided?: boolean;
  challange?: string;
  rest: number;
}

export interface Round {
  repeats: number;
  rest: number;
  exercises: ExerciseDescription[];
}

export interface DayWorkout {
  name: string;
  /**
   * Empty if rest day
   */
  rounds: Round[];
}

export interface WeekPlan {
  name: string;
  dayliWorkouts: DayWorkout[];
}

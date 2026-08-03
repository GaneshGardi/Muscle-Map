export type WorkoutState =
  | "completed"
  | "current"
  | "locked"
  | "rest";

export interface WorkoutData {
  id: string;
  day: number;
  title: string;
  state: WorkoutState;
}

export interface WeekData {
  id: string;
  weekNumber: number;
  title: string;
  subtitle: string;
  workouts: WorkoutData[];
}

export const journeyData: WeekData[] = [
  {
    id: "week-1",
    weekNumber: 1,
    title: "Build Your Foundation",
    subtitle: "Start strong and establish your routine",
    workouts: [
      {
        id: "w1-d1",
        day: 1,
        title: "Push",
        state: "completed",
      },
      {
        id: "w1-d2",
        day: 2,
        title: "Pull",
        state: "completed",
      },
      {
        id: "w1-d3",
        day: 3,
        title: "Legs",
        state: "completed",
      },
      {
        id: "w1-d4",
        day: 4,
        title: "Rest",
        state: "rest",
      },
      {
        id: "w1-d5",
        day: 5,
        title: "Shoulders",
        state: "current",
      },
      {
        id: "w1-d6",
        day: 6,
        title: "Arms",
        state: "locked",
      },
    ],
  },

  // Week 2 and Week 3 stay exactly as you have them (all locked)

  {
    id: "week-2",
    weekNumber: 2,
    title: "Build Momentum",
    subtitle: "Increase your strength and consistency",
    workouts: [
      {
        id: "w2-d1",
        day: 1,
        title: "Push",
        state: "locked",
      },
      {
        id: "w2-d2",
        day: 2,
        title: "Pull",
        state: "locked",
      },
      {
        id: "w2-d3",
        day: 3,
        title: "Legs",
        state: "locked",
      },
      {
        id: "w2-d4",
        day: 4,
        title: "Rest",
        state: "rest",
      },
      {
        id: "w2-d5",
        day: 5,
        title: "Shoulders",
        state: "locked",
      },
      {
        id: "w2-d6",
        day: 6,
        title: "Arms",
        state: "locked",
      },
    ],
  },

  {
    id: "week-3",
    weekNumber: 3,
    title: "Level Up",
    subtitle: "Push your limits and keep progressing",
    workouts: [
      {
        id: "w3-d1",
        day: 1,
        title: "Push",
        state: "locked",
      },
      {
        id: "w3-d2",
        day: 2,
        title: "Pull",
        state: "locked",
      },
      {
        id: "w3-d3",
        day: 3,
        title: "Legs",
        state: "locked",
      },
      {
        id: "w3-d4",
        day: 4,
        title: "Rest",
        state: "rest",
      },
      {
        id: "w3-d5",
        day: 5,
        title: "Shoulders",
        state: "locked",
      },
      {
        id: "w3-d6",
        day: 6,
        title: "Arms",
        state: "locked",
      },
    ],
  },
];
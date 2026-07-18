export type FitnessGoal =
  | "BUILD_MUSCLE"
  | "LOSE_WEIGHT"
  | "GAIN_STRENGTH";

export interface FitnessGoalOption {
  id: FitnessGoal;
  title: string;
  subtitle: string;
  icon: string;
}
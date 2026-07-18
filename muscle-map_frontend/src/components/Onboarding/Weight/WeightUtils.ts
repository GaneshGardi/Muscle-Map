export const KG_MIN = 30;
export const KG_MAX = 200;

export const LB_MIN = 66;
export const LB_MAX = 440;

export const kgToLb = (kg: number) =>
  Math.round(kg * 2.20462);

export const lbToKg = (lb: number) =>
  Math.round(lb / 2.20462);
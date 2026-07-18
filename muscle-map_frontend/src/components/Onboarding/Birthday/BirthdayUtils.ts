export const DAYS = Array.from(
  { length: 31 },
  (_, i) => i + 1
);

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const currentYear = new Date().getFullYear();

export const YEARS = Array.from(
  { length: 100 },
  (_, i) => currentYear - i
);
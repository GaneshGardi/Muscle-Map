export interface FeetInches {
  feet: number;
  inches: number;
}

/**
 * Converts centimeters to feet & inches
 */
export function cmToFeetInches(
  cm: number
): FeetInches {
  const totalInches = cm / 2.54;

  const feet = Math.floor(totalInches / 12);

  const inches = Math.round(totalInches % 12);

  // Handle edge case (e.g. 5'11.9" -> 6'0")
  if (inches === 12) {
    return {
      feet: feet + 1,
      inches: 0,
    };
  }

  return {
    feet,
    inches,
  };
}

/**
 * Converts feet & inches to centimeters
 */
export function feetInchesToCm(
  feet: number,
  inches: number
): number {
  const totalInches = feet * 12 + inches;

  return Math.round(totalInches * 2.54);
}
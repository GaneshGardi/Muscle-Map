const Colors = {
  // ============================================================
  // BRAND COLORS
  // ============================================================

  primary: "#E76F51", // Main brand color
  primaryDark: "#D65C3C", // Pressed buttons
  primaryLight: "#FCE8DD", // Selected cards / chips

  secondary: "#F4A261",
  secondaryDark: "#E89142",
  secondaryLight: "#FDF1E5",

  accent: "#2A9D8F",
  accentDark: "#23867A",
  accentLight: "#E5F5F2",

  // ============================================================
  // BACKGROUNDS
  // ============================================================

  background: "#FAFAF7", // Entire app background
  surface: "#FFFFFF", // Cards / Bottom Sheets
  surfaceSecondary: "#F6F6F4", // Slightly different surfaces

  // ============================================================
  // TEXT
  // ============================================================

  text: "#264653",
  textSecondary: "#5F6F7A",
  textMuted: "#9AA6AF",
  placeholder: "#B9C1C7",
  textInverse: "#FFFFFF",

  // ============================================================
  // INPUTS
  // ============================================================

  inputBackground: "#FFFFFF",
  inputBorder: "#D8D8D2",
  inputFocused: "#E76F51",
  inputPlaceholder: "#B9C1C7",

  // ============================================================
  // BORDERS
  // ============================================================

  border: "#D8D8D2",
  borderLight: "#E8E8E3",
  divider: "#ECECE8",

  // ============================================================
  // BUTTONS
  // ============================================================

  buttonPrimary: "#E76F51",
  buttonPrimaryPressed: "#D65C3C",

  buttonSecondary: "#F4A261",
  buttonSecondaryPressed: "#E89142",

  buttonDisabled: "#D6D6D6",

  // ============================================================
  // CARDS
  // ============================================================

  cardBackground: "#FFFFFF",
  cardBorder: "#ECECE8",

  // Selected cards (Gender, Goal, Equipment etc.)
  cardSelectedBackground: "#FCE8DD",
  cardSelectedBorder: "#E76F51",

  // Success cards
  cardSuccessBackground: "#E5F5F2",

  // ============================================================
  // ICONS
  // ============================================================

  icon: "#264653",
  iconSecondary: "#5F6F7A",
  iconInactive: "#9AA6AF",

  iconPrimary: "#E76F51",
  iconAccent: "#2A9D8F",

  // ============================================================
  // STATUS
  // ============================================================

  success: "#43AA8B",
  successLight: "#E5F5F2",

  warning: "#E9C46A",
  warningLight: "#FCF5DD",

  error: "#E76F51",
  errorLight: "#FCE8DD",

  info: "#4D96FF",
  infoLight: "#EAF3FF",

  // ============================================================
  // WORKOUT
  // ============================================================

  workout: "#E76F51",
  rest: "#2A9D8F",

  completed: "#43AA8B",
  currentDay: "#F4A261",

  locked: "#D9D9D9",

  // ============================================================
  // PROGRESS
  // ============================================================

  progressBackground: "#ECECE8",
  progressFill: "#E76F51",

  // ============================================================
  // CHARTS
  // ============================================================

  chartPrimary: "#E76F51",
  chartSecondary: "#F4A261",
  chartAccent: "#2A9D8F",
  chartNeutral: "#7A8A93",

  // ============================================================
  // SHADOWS
  // ============================================================

  shadow: "rgba(38,70,83,0.08)",

  // ============================================================
  // GENERIC
  // ============================================================

  white: "#FFFFFF",
  black: "#000000",
  transparent: "transparent",
} as const;

export default Colors;

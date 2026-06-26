import Colors from "./Colors";

export const Fonts = {
  display: {
    fontFamily: "Outfit",
    fontSize: 36,
    fontWeight: "700",
    lineHeight: 42,
    color: Colors.text,
  },

  h1: {
    fontFamily: "Outfit",
    fontSize: 30,
    fontWeight: "700",
    lineHeight: 38,
    color: Colors.text,
  },

  h2: {
    fontFamily: "Outfit",
    fontSize: 24,
    fontWeight: "600",
    lineHeight: 32,
    color: Colors.text,
  },

  h3: {
    fontFamily: "Outfit",
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 28,
    color: Colors.text,
  },

  title: {
    fontFamily: "Outfit",
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 26,
    color: Colors.text,
  },

  body: {
    fontFamily: "Poppins",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
    color: Colors.text,
  },

  bodyMedium: {
    fontFamily: "Poppins",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 24,
    color: Colors.text,
  },

  bodySmall: {
    fontFamily: "Poppins",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 22,
    color: Colors.textSecondary,
  },

  caption: {
    fontFamily: "Poppins",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 18,
    color: Colors.textMuted,
  },

  button: {
    fontFamily: "Outfit",
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 22,
    color: Colors.textInverse,
  },

  input: {
    fontFamily: "Poppins",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 22,
    color: Colors.text,
  },

  placeholder: {
    fontFamily: "Poppins",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 22,
    color: Colors.placeholder,
  },
} as const;

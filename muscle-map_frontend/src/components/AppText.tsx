import { Text, TextProps } from "react-native";
import Typography  from "../theme/Typography";
import  Colors  from "../theme/Colors";


type Variant =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "title"
  | "body"
  | "bodyMedium"
  | "bodySmall"
  | "caption"
  | "button";

interface Props extends TextProps {
  variant?: Variant;
  color?: string;
  children: React.ReactNode;
}

export default function AppText({
  variant = "body",
  color = Colors.text,
  style,
  children,
  ...rest
}: Props) {
  return (
    <Text
      {...rest}
      style={[
        Typography[variant="body"],
        {
          color,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}
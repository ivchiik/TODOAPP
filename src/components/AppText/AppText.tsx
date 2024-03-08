import React, { ReactNode } from "react";
import { Text, type StyleProp, type TextStyle } from "react-native";

interface AppTextProps {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
}

export const AppText = (props: AppTextProps) => {
  const { children, style } = props;

  const text = children;

  return <Text style={[style, { fontFamily: "Poppins-Regular" }]}>{text}</Text>;
};

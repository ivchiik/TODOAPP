import React from "react";
import {
  Pressable,
  type StyleProp,
  type ViewStyle,
  TextStyle,
} from "react-native";

import { AppText } from "components";

import { styles } from "./Styles";

interface AppButtonProps {
  style?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
  text: string;
  onPress: () => void;
}

export const AppButton = (props: AppButtonProps) => {
  const { style, styleText, text, onPress } = props;

  return (
    <Pressable style={[styles.btn, style]} onPress={onPress}>
      <AppText style={[styles.btnText, styleText]}>{text}</AppText>
    </Pressable>
  );
};

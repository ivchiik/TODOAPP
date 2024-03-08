import React, { useState } from "react";
import { View, Pressable } from "react-native";
import { styles } from "./Styles";
import { AppText } from "components";

import ArrowUp from "images/ArrowUp.svg";
import ArrowDown from "images/ArrowDown.svg";
import DeleteIcon from "images/DeleteIcon.svg";
import Marked from "images/MarkedIcon.svg";

interface HistoryTaskProps {}

export const HistoryTask = (props: HistoryTaskProps) => {
  const [pressed, setPressed] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.headWrapper}>
        <View style={styles.row}>
          <AppText style={styles.headText}>Dorem ipsum dolor sit</AppText>
          {pressed && <Marked />}
        </View>
        <Pressable onPress={() => setPressed(!pressed)}>
          {pressed ? <ArrowUp /> : <ArrowDown />}
        </Pressable>
      </View>

      {!pressed && (
        <View style={styles.textWrapper}>
          <AppText style={styles.text}>
            s Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit consectetur adipiscing.
          </AppText>
        </View>
      )}

      {!pressed && (
        <View style={styles.footerWrapper}>
          <View style={styles.rowContainer}>
            <DeleteIcon />
          </View>
          <View style={styles.rowContainer}>
            <AppText style={styles.markText}>Completed</AppText>
            <Marked />
          </View>
        </View>
      )}
    </View>
  );
};

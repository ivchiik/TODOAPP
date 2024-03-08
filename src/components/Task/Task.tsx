import React, { useState } from "react";
import { View, Pressable } from "react-native";
import { styles } from "./Styles";
import { AppText } from "components";

import ArrowUp from "images/ArrowUp.svg";
import ArrowDown from "images/ArrowDown.svg";
import EditIcon from "images/EditIcon.svg";
import DeleteIcon from "images/DeleteIcon.svg";
import Marked from "images/MarkedIcon.svg";

interface TaskProps {
  onEdit?: (name: string, text: string) => void;
}

export const Task = (props: TaskProps) => {
  const { onEdit } = props;

  const [pressed, setPressed] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.headWrapper}>
        <AppText style={styles.headText}>Dorem ipsum dolor sit</AppText>
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

      <View style={styles.footerWrapper}>
        <View style={styles.rowContainer}>
          <Pressable
            onPress={() => onEdit("Dorem ipsum dolor sit", "Hello Hello Hello")}
          >
            <EditIcon />
          </Pressable>
          <DeleteIcon />
        </View>
        <View style={styles.rowContainer}>
          <AppText style={styles.markText}>Mark completed</AppText>
          <Marked />
        </View>
      </View>
    </View>
  );
};